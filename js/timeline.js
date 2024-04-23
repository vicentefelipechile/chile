/* Variables */
MainTimeline = document.getElementById("timeline")
VisTimeline = null

const TimelineTitle = document.getElementById("timeline-title")
const TimelineAuthor = document.getElementById("timeline-author")
const TimelineDate = document.getElementById("timeline-date")
const TimelineDescription = document.getElementById("timeline-description")
const TimelineSource = document.getElementById("timeline-source")
const LastUpdate = document.getElementById("last-update")

TimelineDate.textContent = new Date().toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })

const CopyTimelineTitle = TimelineTitle.cloneNode(true)
const CopyTimelineAuthor = TimelineAuthor.cloneNode(true)
const CopyTimelineDate = TimelineDate.cloneNode(true)
const CopyTimelineDescription = TimelineDescription.cloneNode(true)
const CopyTimelineSource = TimelineSource.cloneNode(true)

/* Functions */
const CreateDate = (date) => {
    return new Date(date).toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
}

const GetData = (async () => {
    // const Response = await fetch("cronograma.json")
    const Response = await fetch("https://pub-8894ff44a6f3423591cf59b2b272f41b.r2.dev/cronograma.json")

    if (Response.ok) {
        return await Response.json()
    }

    throw new Error("Error al obtener el cronograma")
})

document.addEventListener("DOMContentLoaded", async function() {
    const items = new vis.DataSet()
    const options = {
        height: "inherit"
    }

    VisTimeline = new vis.Timeline(MainTimeline, items, options)

    let All = await GetData()
    let Data = All["articles"], Info = All["info"]

    LastUpdate.textContent = "Última actualización: " + CreateDate(Info["last_update"])

    Data = Data.map((item, index) => {
        item.id = index
        return item
    })

    for (const item of Data) {
        items.add({
            id: item.id,
            content: item.title,
            start: item.date
        })
    }

    VisTimeline.on("select", (properties) => {
        // ID
        const ID = properties.items[0]

        // Get current event
        const SelectedTimeline = Object.values(Data).find((Event) => { return Event.title === items.get(ID).content })

        if (SelectedTimeline) {
            TimelineTitle.textContent = SelectedTimeline.title
            TimelineAuthor.textContent = "Por " + SelectedTimeline.author
            TimelineDate.textContent = CreateDate(SelectedTimeline.date)
            TimelineDescription.innerHTML = SelectedTimeline.description

            // Set source
            TimelineSource.innerHTML = ""

            const unordenedList = document.createElement("ul")

            SelectedTimeline.source.forEach((LinkSource) => {
                const ListItem = document.createElement("li")
                const Link = document.createElement("a")

                LinkText = document.createTextNode(LinkSource)
                Link.appendChild(LinkText)
                Link.href = LinkSource
                ListItem.appendChild(Link)
                unordenedList.appendChild(ListItem)
            })

            TimelineSource.appendChild(unordenedList)
        } else {
            TimelineTitle.textContent = CopyTimelineTitle.textContent
            TimelineAuthor.textContent = CopyTimelineAuthor.textContent
            TimelineDate.textContent = CopyTimelineDate.textContent
            TimelineDescription.innerHTML = CopyTimelineDescription.innerHTML
            TimelineSource.innerHTML = CopyTimelineSource.innerHTML
        }
    })
})