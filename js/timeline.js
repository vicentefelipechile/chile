document.addEventListener("DOMContentLoaded", (event) => {

    // Crear un conjunto de datos
    var items = new vis.DataSet()
    var argTitle = document.getElementById("arg-title")
    var argDescription = document.getElementById("arg-description")
    var argSources = document.getElementById("arg-sources")

    // Realizar una copia de los elementos de la plantilla
    var saveArgTitle = argTitle.cloneNode(true)
    var saveArgDescription = argDescription.cloneNode(true)
    var saveArgSources = argSources.cloneNode(true)

    // Configurar la línea de tiempo
    var options = {
        height: "18em",
    }

    // Crear la línea de tiempo
    var container = document.getElementById("timeline")
    var timeline = new vis.Timeline(container, items, options)

    var contenido = {
        1: {"title": "Gabriel Boric actuando mal contra sus compañeros", "source": ["https://x.com/camilaemiliasv/status/1757343742057386118?s=20"], "description": "Gabriel Boric actuando mal contra sus compañeros", "date": "2024-02-13"},
        2: {"title": "Jueces de la Corte Suprema de Chile compran 22 autos Lexus", "source": ["https://x.com/Soy_Tu_Aji/status/1757112648854798557?s=20", "https://x.com/Tor25899035/status/1757412835791880211?s=20", "https://www.latercera.com/mtonline/noticia/asi-es-el-lexus-que-escogio-la-corte-suprema-para-sus-ministros-y-que-tiene-un-valor-de-56990000/RRQ3ZBMN5BEO3ATUYWQMN5FJZE/", "https://www.theclinic.cl/2024/02/12/polemica-precios-corte-suprema-aprueba-compra-22-autos-casi-57-millones-para-magistrados-jueces-fiscal/"], "description": "El 2 de febrero, la Corte Suprema aprobó por 11 votos a favor y dos en contra la compra de autos Lexus ―de alta gama― para el recambio de los autos en que se trasladan los jueces y fiscales del órgano. Como publica La Tercera, se trata de 22 vehículos del modelo ES300h, que tienen un precio de lista de $56.990.000 cada uno. Antes de que el Pleno la visara, la adquisición pasó el filtro del Consejo Superior de la Corporación Administrativa del máximo tribunal.", "date": "2024-02-12"},
        3: {"title": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "source": ["https://x.com/FutboliPolitica/status/1756854559543025703?s=20", "https://x.com/Yuyodelizqui/status/1755978261547352392?s=20"], "description": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "date": "2024-02-11"}
    };
    // Añadir los eventos al conjunto de datos
    for (var key in contenido) {
        var evento = contenido[key]
        items.add({
            id: key,
            content: evento.title,
            start: evento.date
        })
    }

    // Añadir un controlador de eventos para el evento "select"
    timeline.on("select", function (properties) {
        // Obtener el ID del elemento seleccionado
        var id = properties.items[0]

        // Buscar el elemento correspondiente en los datos
        var evento = Object.values(contenido).find((evento) => { return evento.title == items.get(id).content })

        // Cargar el contenido correspondiente
        if (evento) {
            argTitle.textContent = evento.title
            argDescription.textContent = evento.description

            // Añadir enlaces para cada fuente encontrada
            argSources.innerHTML = ""
            evento.source.forEach(function (fuente) {
                var link = document.createElement("a")
                link.href = fuente
                link.textContent = fuente
                link.target = "_blank"
                argSources.appendChild(link)
                argSources.appendChild(document.createElement("br"))
            })
        } else {
            argTitle.textContent = saveArgTitle.textContent
            argDescription.textContent = saveArgDescription.textContent
            argSources.textContent = saveArgSources.textContent
        }
    })

})
