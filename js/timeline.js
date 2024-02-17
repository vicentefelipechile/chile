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
        2: {"title": "Jueces de la Corte Suprema de Chile compran 22 autos Lexus", "source": ["https://x.com/Soy_Tu_Aji/status/1757112648854798557?s=20", "https://x.com/Tor25899035/status/1757412835791880211?s=20", "https://www.latercera.com/mtonline/noticia/asi-es-el-lexus-que-escogio-la-corte-suprema-para-sus-ministros-y-que-tiene-un-valor-de-56990000/RRQ3ZBMN5BEO3ATUYWQMN5FJZE/", "https://www.theclinic.cl/2024/02/12/polemica-precios-corte-suprema-aprueba-compra-22-autos-casi-57-millones-para-magistrados-jueces-fiscal/", "https://x.com/Tor25899035/status/1757412835791880211?s=20"], "description": "ChatGPT: La Corte Suprema aprobó la compra de 22 autos de lujo Lexus, con un costo unitario de $56.990.000, para sus magistrados, a pesar de la controversia suscitada por el elevado precio de estos vehículos. La medida, aprobada por 11 votos a favor y dos en contra en una sesión extraordinaria del Pleno, requerirá una inversión total de más de $1.253 millones.\n\nSin embargo, algunos jueces expresaron su disconformidad con la adquisición, argumentando que los autos de alta gama podrían considerarse un lujo innecesario, prefiriendo mantener los Toyota Camry adquiridos en 2014. La decisión contó con el voto en contra del presidente de la Corte Suprema, Ricardo Blanco, y la ministra Andrea Muñoz.\n\nLa renovación de la flota se justificó en base a la antigüedad de los vehículos actuales, cumpliendo con los criterios establecidos por el instructivo de buen uso de recursos fiscales. Aunque inicialmente se buscó adquirir autos Camry Híbrido de la misma marca y modelo que los actuales, la discontinuación del modelo en Chile llevó a la selección del Lexus ES300h como alternativa más viable en el mercado.", "date": "2024-02-12"},
        3: {"title": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "source": ["https://x.com/FutboliPolitica/status/1756854559543025703?s=20", "https://x.com/Yuyodelizqui/status/1755978261547352392?s=20", "https://x.com/anndresrojass/status/1756805744169570785?s=20"], "description": "Hinchas del colo colo cantan contra el minuto de silencio de la muerte de Sebastián Piñera", "date": "2024-02-11"},
        4: {"title": "Inauguran \"Refugios Climaticos\"", "source": ["https://x.com/biobio/status/1758491477749993921?s=20", "https://www.biobiochile.cl/noticias/nacional/region-metropolitana/2024/02/16/los-comentados-refugios-climaticos-inaugurados-por-hassler-son-dispensadores-de-agua.shtml", "https://www.gamba.cl/2024/02/iraci-hassler-refugios-climaticos-bidones/", "https://x.com/Muni_Stgo/status/1758163653444927515?s=20"], "description": "La alcaldesa de Santiago (PC), Irací Hassler, inauguró el 15 de febrero la ampliación de la red de “refugios climáticos” de la Municipalidad de Santiago.\n\nSon basicamente bidones de agua", "date": "2024-02-15"},
        5: {"title": "Personas de viña del mar se quejan de poca ayuda del gobierno", "source": ["https://x.com/manuelsoteldo4/status/1758218133934907639?s=20", "https://x.com/traviejita_/status/1758179236232237264?s=20", "https://x.com/Chileno17039890/status/1758170978612367376?s=20", "https://x.com/Chileno17039890/status/1757808170586771851?s=20", "https://x.com/meganoticiascl/status/1757864792373829954?s=20", "https://x.com/Pk2Giuliana/status/1757782339789148366?s=20", "https://x.com/camilaemiliasv/status/1757719528409092291?s=20", "https://x.com/SebastianRochaZ/status/1757758285241786465?s=20", "https://x.com/KnightAshborn/status/1757752578643767683?s=20", "https://x.com/sergiou01329861/status/1757458252319580620?s=20", "https://x.com/Tor25899035/status/1755293732264460599?s=20", "https://x.com/Iherreraa/status/1754616167014994192?s=20", "https://x.com/DRESTRUM__Pl/status/1758641440044011959?s=20"], "description": "Debido a los incendios ocurridos en febrero, las personas de viña del mar se quejan de poca ayuda del gobierno", "date": "2024-02-15"},
        6: {"title": "Corte suprema sanciono a Juez Daniel Urrutina (PC)", "source": ["https://x.com/Cooperativa/status/1668731652833439744?s=20", "https://www.cooperativa.cl/noticias/pais/judicial/corte-suprema-sanciono-a-juez-urrutia-por-liberacion-de-miembros-de-la-primera-linea-/2023-06-13/170402.html"], "description": "La Corte Suprema sancionó al juez Daniel Urrutia, quien liberó a miembros de la primera línea, las mismas personas que estuvieron en el estallido social del 18 de octubre\n\nChatGPT: La Corte Suprema ha confirmado una sanción contra el juez Daniel Urrutia por su participación en la liberación de 13 imputados vinculados a la \"primera línea\" durante el estallido social.\n\nUrrutia, en marzo de 2020, modificó la medida cautelar de estos individuos, ordenando su liberación inmediata y alegando un supuesto acuerdo del comité de jueces del Séptimo Juzgado de Garantía de Santiago. Esta acción desencadenó un proceso sancionatorio que culminó con una amonestación por parte de la Corte Suprema, la cual quedará registrada en su historial profesional.\n\nEsta no es la primera controversia en la que se ve envuelto Urrutia, quien previamente fue suspendido y trasladado a un tribunal de cobranzas, aunque esta decisión fue revertida posteriormente por la Corte. Urrutia presentó una querella por prevaricación judicial contra los 19 ministros que investigaron su caso, pero esta acción fue declarada inadmisible.\n\nAnteriormente, también fue sancionado por cuestionar el rol de otros jueces en relación con el uso de balines durante el estallido social.", "date": "2023-06-13"},
        7: {"title": "Daniel Urrutina (PC) autoriza videollamada a reos de crimen organizado", "source": ["https://www.meganoticias.cl/nacional/439523-videollamadas-autorizadas-en-carcel-alta-seguridad-15-02-2024.html", "https://x.com/Caplevi1540/status/1758191827742609549?s=20"], "description": "El juez Daniel Urrutia autorizó videollamadas a reos de crimen organizado\n\nChatGPT: El juez Daniel Urrutia autorizó videollamadas para reclusos del Recinto Penitenciario Especial de Alta Seguridad (REPAS), lo que generó tensión entre Gendarmería y el Poder Judicial. El REPAS alberga a los delincuentes más peligrosos de Chile, muchos vinculados al crimen organizado.\n\nLas autoridades temen que estas videollamadas comprometan la seguridad al permitir el contacto con personas no autorizadas. Gendarmería apeló la decisión, lo que llevó a una orden de no innovar suspendiendo la resolución del juez Urrutia.\n\nAdemás, se reveló que líderes del Tren de Aragua realizaron videollamadas desde la cárcel, lo que aumentó la preocupación por la seguridad. Esta disputa no es nueva; en el pasado, en el año 2023, la repartición penitenciaria recurrió a la Corte Suprema para permitir el traslado de reos del Tren de Aragua desde el penal de Acha, en Arica, a otros recintos carcelarios.", "date": "2024-02-15"},
        8: {"title": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane", "source": ["https://x.com/biobio/status/1758172797023432959?s=20", "https://www.biobiochile.cl/noticias/nacional/region-de-tarapaca/2024/02/15/aduanas-incauta-un-total-de-87-millones-sin-declarar-por-parte-de-ciudadanos-extranjeros-en-colchane.shtml"], "description": "Aduanas incauta un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane\n\nChatGPT: Aduanas incautó un total de $87 millones sin declarar por parte de ciudadanos extranjeros en Colchane, Región de Tarapacá. Las incautaciones se realizaron bajo la Ley 21.632 que penaliza el ingreso y salida de dinero del país sin informar a Aduanas.\n\nEn el primer caso, un conductor boliviano de un bus de la empresa Fer ocultó $27 millones en el ducto de aire acondicionado. En otro incidente, un comerciante boliviano que evadió el control migratorio llevaba consigo $42 millones en su equipaje. Simultáneamente, otro pasajero boliviano intentó ingresar al país con una mochila que contenía $18 millones sin declarar.\n\nTodas las divisas fueron entregadas a la Policía de Investigaciones tras coordinación con el Ministerio Público. La legislación establece que cualquier persona que ingrese o salga de Chile con más de US$10 mil dólares (9.722.500 CLP - 2024-02-17) debe informarlo a Aduanas; de lo contrario, se considera un delito y se incauta el 100% de las divisas, en lugar del 30% como era antes de la mencionada ley.", "date": "2024-02-15"},
        9: {"title": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "source": ["https://www.emol.com/noticias/Nacional/2024/02/12/1121436/cierre-hospital-de-ninos-vina.html"], "description": "Debido a crisis financiera, Anuncian cierre del Hospital de Niños de Viña del Mar", "date": "2024-02-12"},
        10: {"title": "Sebastian Piñera Fallece", "source": ["https://x.com/DRESTRUM__Pl/status/1755033030580752715?s=20", "https://x.com/eduardomenoni/status/1754957047550902335?s=20"], "description": "Sebastian Piñera Fallece", "date": "2024-02-06"},
        11: {"title": "Jorge Alis es bajado del evento \"Juntos Chile se levanta\"", "source": ["https://x.com/publimemetro/status/1758876203446940017?s=20", "https://twitter.com/fachininja/status/1758883572021113325", "https://twitter.com/biobio/status/1758842617679200282", "https://www.biobiochile.cl/noticias/espectaculos-y-tv/tv/2024/02/17/no-se-pueden-decir-ciertas-cosas-en-television-jorge-alis-acuso-censura-en-evento-solidario.shtml", "https://www.instagram.com/p/C3b4Oehsm5l/"], "description": "Jorge Alís acusa de \"Censura\" durante el evento solidario de \"Juntos Chile se levanta\"\n\nChatGPT: El humorista argentino Jorge Alís acusó que fue censurado y no se le permitió subir al escenario del evento \"Juntos Chile se levanta\". A pesar de estar programado como uno de los shows de humor de la noche, nunca apareció en escena, lo que dejó al público esperándolo durante casi nueve horas. Alís explicó en un video en redes sociales que les impidieron subir al escenario porque sus comentarios críticos y sociales no eran aceptables para la televisión. Expresó su molestia por la censura y anunció que realizará otros shows solidarios sin restricciones.", "date": "2024-02-17"}
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
