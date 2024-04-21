/* Variables */
MainTimeline = document.getElementById("timeline")
VisTimeline = null

const TimelineTitle = document.getElementById("timeline-title")
const TimelineAuthor = document.getElementById("timeline-author")
const TimelineDate = document.getElementById("timeline-date")
const TimelineDescription = document.getElementById("timeline-description")
const TimelineSource = document.getElementById("timeline-source")

const CopyTimelineTitle = TimelineTitle.cloneNode(true)
const CopyTimelineAuthor = TimelineAuthor.cloneNode(true)
const CopyTimelineDate = TimelineDate.cloneNode(true)
const CopyTimelineDescription = TimelineDescription.cloneNode(true)
const CopyTimelineSource = TimelineSource.cloneNode(true)

/* Functions */
const GetData = (async () => {
    const Response = await fetch("cronograma.json")

    if (Response.ok) {
        return Response.json()
    }

    throw new Error("Error al obtener el cronograma")
})

document.addEventListener("DOMContentLoaded", async function() {
    const items = new vis.DataSet()
    const options = {
        height: "inherit"
    }

    VisTimeline = new vis.Timeline(MainTimeline, items, options)

    let Data = await GetData()

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
            TimelineDate.textContent = new Date(SelectedTimeline.date).toLocaleDateString()
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
        }
    })
})