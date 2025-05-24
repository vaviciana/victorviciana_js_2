let Hoteles = [];
let diasNoDisponibles = [];

let cartReservas = JSON.parse(localStorage.getItem("carritoReservas")) || [];
renderizarCarrito();

fetch('/db/reservas.json')
    .then(res => res.json())
    .then(data => {
        Hoteles = data;

    return fetch('/db/fechas.json');
    })
        .then(res => res.json())
        .then(data => {
            diasNoDisponibles = data;
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'No se pudieron cargar los datos de hoteles o fechas.',
        });
    });

const selectHotel = document.getElementById("selectHotel");
const fechaReserva = document.getElementById("fechaReserva");
const boton = document.getElementById("botonDisponibilidadFechas");
const resultado = document.getElementById("cartel");

boton.addEventListener("click", () => {
    try {
        const hotelId = selectHotel.value;
        const fechaSeleccionada = fechaReserva.value;
        const hotel = Hoteles.find(h => h.id === hotelId);

        resultado.innerHTML = "";

    if (!fechaSeleccionada) {
        const cartelVacio = document.createElement("div");
        cartelVacio.innerHTML = `
            <div class="cartel">
                <p>Introduce la fecha</p>
            </div>`;
        resultado.appendChild(cartelVacio);
        return;
    }

    if (!hotelId || !hotel) {
        const cartelHotel = document.createElement("div");
        cartelHotel.innerHTML = `
            <div class="cartel">
            <p>Selecciona un hotel</p>
            </div>
        `;
        resultado.appendChild(cartelHotel);
        return;
    }

    const noDisponible = hotel.diasReservados.includes(fechaSeleccionada) || diasNoDisponibles.includes(fechaSeleccionada);

    if (noDisponible) {
        const cartel = document.createElement("div");
        cartel.innerHTML = `
            <div class="cartel">
            <p>La fecha <strong>${fechaSeleccionada}</strong> no está disponible para el hotel <strong>${hotel.Nombre}</strong>.</p>
            </div>
        `;
        resultado.appendChild(cartel);
        } else {
        const cartel = document.createElement("div");
        cartel.innerHTML = `
            <p>¡La fecha <strong>${fechaSeleccionada}</strong> está disponible en <strong>${hotel.Nombre}</strong>!</p>
            <button id="agregarReserva" class="btn btn-light btn-lg w-50">Agregar al carrito</button>
        `;
        resultado.appendChild(cartel);

        document.getElementById("agregarReserva").addEventListener("click", () => {
            const reserva = {
            hotelId: hotel.id,
            hotelNombre: hotel.Nombre,
            fecha: fechaSeleccionada
            };
            cartReservas.push(reserva);
            localStorage.setItem("carritoReservas", JSON.stringify(cartReservas));
            renderizarCarrito();
        });
        }
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un problema inesperado.',
        });
    }
    });

    function renderizarCarrito() {
    const contenedor = document.getElementById("carritoReservas");
    contenedor.innerHTML = "";

    if (cartReservas.length === 0) {
        contenedor.innerHTML = "<p>No hay reservas en el carrito.</p>";
        return;
    }

    const lista = document.createElement("div");
    lista.innerHTML = "<h4>Carrito de reservas:</h4>";

    cartReservas.forEach(reserva => {
        const item = document.createElement("div");
        item.classList.add("reservaItem");
        item.innerHTML = `
        <p>
            <strong>${reserva.hotelNombre}</strong> - ${reserva.fecha}
        </p>
        `;
        lista.appendChild(item);
    });

    contenedor.appendChild(lista);
    }
