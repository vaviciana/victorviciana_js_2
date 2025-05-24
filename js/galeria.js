//BUSCADOR
const busqueda = document.getElementById('buscar');
const botonBuscar = document.getElementById('botonBuscar');
const listaResultados = document.getElementById('listaResultados');

botonBuscar.addEventListener('click', () => {
    const termino = busqueda.value;

    try {
        fetch('./db/reservas.json')
        .then(response => response.json())
        .then(hoteles => {
            const resultado = hoteles.filter(hotel => hotel.Nombre.includes(termino));

            listaResultados.innerHTML = '';

            if (resultado.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Sin resultados',
                text: 'No encontramos hoteles que coincidan con tu búsqueda.',
            });

            } else {
            resultado.forEach(hotel => {
                const card = document.createElement("div");
                card.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${hotel.Imagen}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${hotel.Nombre}</h5>
                        <p class="card-text">${hotel.Descripcion}</p>
                        <div class="d-flex flex-column">
                            <p><b>Características</b></p>
                            <div class="d-flex flex-row flex-wrap gap-3 justify-content-center">
                            <div class="d-flex">
                                <p>Localización:</p>
                                <p>${hotel.Localizacion}</p>
                            </div>
                            <div class="d-flex">
                                <p>Régimen:</p>
                                <p>${hotel.Régimen}</p>
                            </div>
                            <div class="d-flex">
                                <p>Parking:</p>
                                <p>${hotel.Parking}</p>
                            </div>
                            </div>
                        </div>
                        <div class="text-center"><p><b>Precio Noche: ${hotel.PrecioNoche}</b></p></div>
                        <div class="btn btn-primary w-100 hotelAgregar" id="${hotel.id}">Reservar</div>
                        </div>
                    </div>
                    </div>
                </div>
                `;
                listaResultados.appendChild(card);
            });
            }
        });
    } catch (error) {
        Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'No se pudo cargar el archivo de hoteles.',
        });
    }
});




//FILTRO
const botonFiltrar = document.getElementById('Filtrar');

botonFiltrar.addEventListener('click', () => {
    try {
        fetch('./db/reservas.json')
        .then(response => response.json())
        .then(Hoteles => {
            listaResultados.innerHTML = "";

            const filtroLocalizacion = document.querySelectorAll('#Localizacion input[type="checkbox"]:checked');
            const filtroRegimen = document.querySelectorAll('#Regimen input[type="checkbox"]:checked');
            const filtroParking = document.querySelectorAll('#Parking input[type="checkbox"]:checked');

            const matchLocalizacion = Array.from(filtroLocalizacion).map(input => input.value);
            const matchRegimen = Array.from(filtroRegimen).map(input => input.value);
            const matchParking = Array.from(filtroParking).map(input => input.value);

            const resultadoFiltro = Hoteles.filter(hotel => {
                const coincideLocalizacion = matchLocalizacion.length === 0 || matchLocalizacion.includes(hotel.Localizacion);
                const coincideRegimen = matchRegimen.length === 0 || matchRegimen.includes(hotel.Régimen);
                const coincideParking = matchParking.length === 0 || matchParking.includes(hotel.Parking);
                return coincideLocalizacion && coincideRegimen && coincideParking;
        });

        if (resultadoFiltro.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Sin resultados',
                text: 'No se encontraron hoteles con esas características.',
            });
            return;
        }

        resultadoFiltro.forEach(hotel => {
            const cardFiltro = document.createElement("div");
            cardFiltro.innerHTML = `
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src=${hotel.Imagen} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${hotel.Nombre}</h5>
                        <p class="card-text">${hotel.Descripcion}</p>
                        <div class="d-flex flex-column">
                        <p><b>Características</b></p>
                        <div class="d-flex flex-row flex-wrap gap-3 justify-content-center">
                            <div class="d-flex">
                            <p>Localización:</p>
                            <p>${hotel.Localizacion}</p>
                            </div>
                            <div class="d-flex">
                            <p>Régimen:</p>
                            <p>${hotel.Régimen}</p>
                            </div>
                            <div class="d-flex">
                            <p>Parking:</p>
                            <p>${hotel.Parking}</p>
                            </div>
                        </div>
                        </div>
                        <div class="text-center"><p><b>Precio Noche: ${hotel.PrecioNoche}</b></p></div>
                        <div class="btn btn-primary w-100 hotelAgregar" id="${hotel.id}">Reservar</div>
                    </div>
                    </div>
                </div>
                </div>`;
            listaResultados.appendChild(cardFiltro);
            });
        });
    } 
    catch (err) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un problema al filtrar los hoteles.',
        });
    }
});

                        
                        
                