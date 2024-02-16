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
        2: {"title": "Jueces de la Corte Suprema de Chile compran 22 autos Lexus", "source": ["https://x.com/Soy_Tu_Aji/status/1757112648854798557?s=20", "https://x.com/Tor25899035/status/1757412835791880211?s=20", "https://www.latercera.com/mtonline/noticia/asi-es-el-lexus-que-escogio-la-corte-suprema-para-sus-ministros-y-que-tiene-un-valor-de-56990000/RRQ3ZBMN5BEO3ATUYWQMN5FJZE/", "https://www.theclinic.cl/2024/02/12/polemica-precios-corte-suprema-aprueba-compra-22-autos-casi-57-millones-para-magistrados-jueces-fiscal/", "https://x.com/Tor25899035/status/1757412835791880211?s=20"], "description": "El 2 de febrero, la Corte Suprema aprobó por 11 votos a favor y dos en contra la compra de autos Lexus ―de alta gama― para el recambio de los autos en que se trasladan los jueces y fiscales del órgano. Como publica La Tercera, se trata de 22 vehículos del modelo ES300h, que tienen un precio de lista de $56.990.000 cada uno. Antes de que el Pleno la visara, la adquisición pasó el filtro del Consejo Superior de la Corporación Administrativa del máximo tribunal.", "date": "2024-02-12"},
        3: {"title": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "source": ["https://x.com/FutboliPolitica/status/1756854559543025703?s=20", "https://x.com/Yuyodelizqui/status/1755978261547352392?s=20", "https://x.com/anndresrojass/status/1756805744169570785?s=20"], "description": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "date": "2024-02-11"},
        4: {"title": "Inauguran \"Refugios Climaticos\"", "source": ["https://x.com/biobio/status/1758491477749993921?s=20", "https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2024/02/16/los-comentados-refugios-climaticos-inaugurados-por-hassler-son-dispensadores-de-agua.shtml", "https://www.gamba.cl/2024/02/iraci-hassler-refugios-climaticos-bidones/"], "description": "La alcaldesa de Santiago (PC), Irací Hassler, inauguró el 15 de febrero la ampliación de la red de “refugios climáticos” de la Municipalidad de Santiago.\n\nSon basicamente bidones de agua", "date": "2024-02-15"},
        5: {"title": "Personas de viña del mar se quejan de poca ayuda del gobierno", "source": ["https://x.com/manuelsoteldo4/status/1758218133934907639?s=20", "https://x.com/traviejita_/status/1758179236232237264?s=20", "https://x.com/Chileno17039890/status/1758170978612367376?s=20", "https://x.com/Chileno17039890/status/1757808170586771851?s=20", "https://x.com/meganoticiascl/status/1757864792373829954?s=20", "https://x.com/Pk2Giuliana/status/1757782339789148366?s=20", "https://x.com/camilaemiliasv/status/1757719528409092291?s=20", "https://x.com/SebastianRochaZ/status/1757758285241786465?s=20", "https://x.com/KnightAshborn/status/1757752578643767683?s=20", "https://x.com/sergiou01329861/status/1757458252319580620?s=20", "https://x.com/Tor25899035/status/1755293732264460599?s=20", "https://x.com/Iherreraa/status/1754616167014994192?s=20"], "description": "Debido a los incendios ocurridos en febrero, las personas de viña del mar se quejan de poca ayuda del gobierno", "date": "2024-02-15"},
        6: {"title": "Corte suprema sanciono a Juez Daniel Urrutina (PC)", "source": ["https://x.com/Cooperativa/status/1668731652833439744?s=20", "https://www.cooperativa.cl/noticias/pais/judicial/corte-suprema-sanciono-a-juez-urrutia-por-liberacion-de-miembros-de-la-primera-linea-/2023-06-13/170402.html"], "description": "La Corte Suprema sancionó al juez Daniel Urrutia, quien liberó a miembros de la primera línea, las mismas personas que estuvieron en el estallido social del 18 de octubre", "date": "2023-06-13"},
        7: {"title": "Daniel Urrutina (PC) autoriza videollamada a reos de crimen organizado", "source": ["https://www.meganoticias.cl/nacional/439523-videollamadas-autorizadas-en-carcel-alta-seguridad-15-02-2024.html", "https://x.com/Caplevi1540/status/1758191827742609549?s=20"], "description": "El juez Daniel Urrutia autorizó videollamadas a reos de crimen organizado", "date": "2024-02-15"},
        8: {"title": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane", "source": ["https://x.com/biobio/status/1758172797023432959?s=20", "https://www.biobiochile.cl/noticias/nacional/region-de-tarapaca/2024/02/15/aduanas-incauta-un-total-de-87-millones-sin-declarar-por-parte-de-ciudadanos-extranjeros-en-colchane.shtml"], "description": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane", "date": "2024-02-15"},
        9: {"title": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "source": ["https://www.emol.com/noticias/Nacional/2024/02/12/1121436/cierre-hospital-de-ninos-vina.html"], "description": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "date": "2024-02-12"},
        10: {"title": "Muere Sebastian Piñera", "source": ["https://x.com/DRESTRUM__Pl/status/1755033030580752715?s=20", "https://x.com/eduardomenoni/status/1754957047550902335?s=20"]}
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
