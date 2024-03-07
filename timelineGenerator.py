# ============================
# ==== Timeline Generator ====
# ============================


import json


HEADER: str = """document.addEventListener("DOMContentLoaded", (event) => {

    // Crear un conjunto de datos
    var items = new vis.DataSet()
    const argTitle = document.getElementById("arg-title")
    const argDescription = document.getElementById("arg-description")
    const argSources = document.getElementById("arg-sources")

    // Realizar una copia de los elementos de la plantilla
    const saveArgTitle = argTitle.cloneNode(true)
    const saveArgDescription = argDescription.cloneNode(true)
    const saveArgSources = argSources.cloneNode(true)

    // Configurar la línea de tiempo
    var options = {
        height: "24em",
    }

    // Crear la línea de tiempo
    var container = document.getElementById("timeline")
    var timeline = new vis.Timeline(container, items, options)

"""

FOOTER: str = """
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
            argDescription.innerHTML = evento.description

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
            argTitle.innerHTML = saveArgTitle.innerHTML
            argDescription.innerHTML = saveArgDescription.innerHTML
            argSources.innerHTML = saveArgSources.innerHTML
        }
    })

})
"""

# ============================
# ==== Funcion Principal =====
# ============================

# Estructura del json:
# id: {title: "...", description: "...", sources: ["...", "..."], date: "..."}

# Obtener el archivo "cronograma.json"
with open("cronograma.json", "r", encoding="utf-8") as file:
    contenido = json.load(file)
file.close()

VariableGenerator: str = "    var contenido = {"

for key, value in contenido.items():
    if value["date"] == "":
        print(f"El evento '{value['title']}' no tiene una fecha definida")
    
    if value["description"] == "":
        print(f"El evento '{value['title']}' no tiene una descripción definida")

    VariableGenerator += f"\n        {key}: {json.dumps(value, ensure_ascii=False)},"
VariableGenerator = VariableGenerator[:-1]
VariableGenerator += "\n    }"

# Concatenar las variables y luego escribir el archivo en "js/timeline.js"
with open("js/timeline.js", "w", encoding="utf-8") as file:
    file.write(HEADER + VariableGenerator + FOOTER)
file.close()