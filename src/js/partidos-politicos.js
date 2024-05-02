/*==============================================
               Partidos Políticos
==============================================*/

const PP_UnorderedList = document.getElementById("partidos-politicos")

PP = {}

PP.MainPath = "partidospoliticos.json"

PP.GetPartidos = async () => {
    if (PP.CacheData) { return PP.CacheData }

    const response = await fetch(PP.MainPath)
    return await response.json()
}

PP.GetPartidosByShortName = async (ShortName) => {
    if ( !PP.CacheData ) { await PP.GetPartidos() }

    PP.CacheData.forEach((Partido) => {
        if (Partido["name_short"] === ShortName) {
            return element
        }
    })

    return null
}

PP.Main = async () => {
    Partidos = await PP.GetPartidos()

    Partidos.forEach((Partido) => {
        const FullName = "(" + (Partido["name_short"]).padStart(3, " ").padEnd(4, " ") + ") - " + Partido["name"]

        const ListItem = document.createElement("li")
        ListItem.textContent = FullName

        // add style "white-space:pre"
        ListItem.style.whiteSpace = "pre"

        PP_UnorderedList.appendChild(ListItem)
    })
}

PP.Main()