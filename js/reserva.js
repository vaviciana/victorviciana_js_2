const Hoteles = [
    {
        id: "1",
        Nombre: "Málaga",
        Imagen: "recursos/1.jpg",
        Descripcion: "Vive la esencia del sur en nuestro hotel de Málaga, ideal para quienes buscan playa, cultura y buena gastronomía. Con régimen de media pensión y ubicado en plena Andalucía, ofrece la comodidad de contar con parking para que te muevas sin preocupaciones.",
        Localizacion: "Andalucía",
        Régimen: "Media Pensión",
        Parking: "Si",
        PrecioNoche: "100€",
        diasReservados: ["2025-02-02", "2025-08-04"],
    },
    {
        id: "2",
        Nombre: "Córdoba",
        Imagen: "recursos/2.jpg",
        Descripcion: "Sumérgete en la historia y encanto de Córdoba alojándote en un hotel acogedor y bien ubicado. Con desayuno incluido y parking disponible, es la opción perfecta para explorar la ciudad con total libertad y comenzar cada día con energía.",
        Localizacion: "Andalucía",
        Régimen: "Desayuno",
        Parking: "Si",
        PrecioNoche: "120€",
        diasReservados: ["2025-08-06", "2025-09-14"],
    },
    {
        id: "3",
        Nombre: "Sevilla",
        Imagen: "recursos/3.jpg",
        Descripcion: "Disfruta de una estancia cómoda y bien ubicada en nuestro hotel de Sevilla, ideal tanto para escapadas de ocio como para viajes de trabajo. Con un régimen de desayuno y situado en el corazón de Andalucía, este alojamiento ofrece una excelente relación calidad-precio. Aunque no dispone de parking, su entorno y accesibilidad te permitirán aprovechar al máximo tu visita.",
        Localizacion: "Andalucía",
        Régimen: "Desayuno",
        Parking: "No",
        PrecioNoche: "80€",
        diasReservados: ["2025-12-12", "2025-02-14"],
    },
    {
        id: "4",
        Nombre: "Castellon",
        Imagen: "recursos/4.jpg",
        Descripcion: "Vive una experiencia completa en nuestro hotel de Castellón, perfecto para quienes desean combinar descanso y gastronomía. Ubicado en la Comunidad Valenciana y con régimen de media pensión, es ideal para relajarte tras explorar la ciudad. No cuenta con parking, pero su excelente ubicación lo compensa con creces.",
        Localizacion: "Valencia",
        Régimen: "Media Pensión",
        Parking: "No",
        PrecioNoche: "50€",
        diasReservados: ["2025-06-21", "2025-08-14"],
    },
    {
        id: "5",
        Nombre: "Alicante",
        Imagen: "recursos/5.jpg",
        Descripcion: "Ideal para escapadas al Mediterráneo, el hotel de Alicante te ofrece comodidad y cercanía al mar con un régimen de desayuno incluido. Situado en la Comunidad Valenciana, es una opción práctica para quienes buscan explorar la costa sin complicaciones. No dispone de parking.",
        Localizacion: "Valencia",
        Régimen: "Desayuno",
        Parking: "No",
        PrecioNoche: "60€",
        diasReservados: ["2025-02-12", "2025-08-04"],
    },
    {
        id: "6",
        Nombre: "Benidorm",
        Imagen: "recursos/6.jpg",
        Descripcion: "Disfruta del ambiente vibrante de Benidorm desde nuestro hotel con desayuno incluido. Ubicado en la Comunidad Valenciana, es perfecto para unas vacaciones al sol o un descanso frente al mar. No dispone de parking, pero su localización lo convierte en un punto estratégico para tu viaje.",
        Localizacion: "Valencia",
        Régimen: "Desayuno",
        Parking: "No",
        PrecioNoche: "75€",
        diasReservados: ["2025-11-12", "2025-07-08"],
    },
    {
        id: "7",
        Nombre: "Fuerteventura",
        Imagen: "recursos/7.jpg",
        Descripcion: "Escápate al paraíso con nuestro hotel en Fuerteventura, ideal para disfrutar de las playas y el clima de Canarias. Con régimen de desayuno, es perfecto para comenzar el día con energía. No cuenta con parking, aunque su entorno natural y ubicación privilegiada te conquistarán.",
        Localizacion: "Canarias",
        Régimen: "Desayuno",
        Parking: "No",
        PrecioNoche: "150€",
        diasReservados: ["2025-04-12", "2025-07-25"],
    },
    {
        id: "8",
        Nombre: "Tenerife",
        Imagen: "recursos/8.jpg",
        Descripcion: "Sumérgete en la magia de Tenerife desde nuestro hotel con pensión completa. Ubicado en las Islas Canarias y con parking disponible, te ofrece comodidad y todos los servicios para que no tengas que preocuparte por nada durante tu estancia.",
        Localizacion: "Canarias",
        Régimen: "Pensión Completa",
        Parking: "Si",
        PrecioNoche: "100€",
        diasReservados: ["2025-03-18", "2025-04-13"],
    },
    {
        id: "9",
        Nombre: "Gran Canaria",
        Imagen: "recursos/9.jpg",
        Descripcion: "Descubre el encanto de Gran Canaria desde un alojamiento cómodo y bien equipado. Con media pensión y parking incluido, este hotel te permite disfrutar de las maravillas de Canarias con total tranquilidad y sin preocupaciones logísticas.",
        Localizacion: "Canarias",
        Régimen: "Media Pensión",
        Parking: "Si",
        PrecioNoche: "80€",
        diasReservados: ["2025-02-23", "2025-04-28"],
    },
    {
        id: "10",
        Nombre: "Lanzarote",
        Imagen: "recursos/10.jpg",
        Descripcion: "Déjate cautivar por los paisajes volcánicos de Lanzarote desde nuestro hotel con pensión completa. Perfecto para una estancia sin estrés, incluye parking para tu comodidad y una ubicación inmejorable para recorrer la isla.",
        Localizacion: "Canarias",
        Régimen: "Pensión Completa",
        Parking: "Si",
        PrecioNoche: "120€",
        diasReservados: ["2025-05-17", "2025-09-23"],
    }
];

const diasNoDisponibles = [
    "2025-05-05",
    "2025-08-06",
    "2025-12-24",
    "2026-01-13",
    "2025-02-19",
    "2025-04-20",
    "2025-05-26",
    "2025-09-27"
];


const selectHotel = document.getElementById("selectHotel");
const fechaReserva = document.getElementById("fechaReserva");
const boton = document.getElementById("botonDisponibilidadFechas");
const resultado = document.getElementById("cartel");

boton.addEventListener("click", () => {
    const hotelId = selectHotel.value;
    const fechaSeleccionada = fechaReserva.value;
    const hotel = Hoteles.find(h => h.id === hotelId);

    resultado.innerHTML = "";

    if (!fechaSeleccionada) {
        const cartelVacio = document.createElement("div");
        cartelVacio.innerHTML = `
            <div class="cartel">
                <p>Introduce la fecha</p>
            </div>
        `;
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
});

const cartReservas = [];

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
    

