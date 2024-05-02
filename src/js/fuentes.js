const FuentesConfiablesVerificadasPorUnaFuenteConfiableYVerificadaSiEstasLeyendoEsteNombreDeVariableEsPorqueQuieresSaberPorqueEstaVariableTieneUnNombreTanLargo = [
    "joseantoniokast",
    "dipuBobadilla",
    "memerluzo",
    "CarabPrCentral",
    "DRESTRUM__Pl",
    "neoliberalchile",
    "DRESS__TRUMPY",
    "SymbiotKnull",
    "ClintJoselito",
    "Patitoo_Verde",
    "WCreativo",
    "MrNeuroc",
    "White_Hunters",
    "Kasterizador",
    "traviejita_",
    "ommm55555",
    "Cta_Random_X",
    "LEONARDOFAXA"
]

const ItemList = document.getElementById("sources-items")
const DateBegin = document.getElementById("sources-date-being")
const DateUntil = document.getElementById("sources-date-until")

const AddLinks = document.getElementById("sources-add-links")
const AskSourcesButton = document.getElementById("sources-button")

const Ourdate = new Date()

let AllSources = []

document.addEventListener("DOMContentLoaded", async () => {
    for (const fuente of FuentesConfiablesVerificadasPorUnaFuenteConfiableYVerificadaSiEstasLeyendoEsteNombreDeVariableEsPorqueQuieresSaberPorqueEstaVariableTieneUnNombreTanLargo) {
        const NewItem = document.createElement("li")

        const Input = document.createElement("input")
        Input.type = "checkbox"
        Input.name = "user-" + fuente
        Input.id = "user-" + fuente

        const Label = document.createElement("label")
        Label.htmlFor = "user-" + fuente
        Label.innerText = "@" + fuente

        const ProfilePhoto = document.createElement("img")
        ProfilePhoto.src = "/src/img/" + fuente + ".jpg"
        ProfilePhoto.alt = "@" + fuente

        NewItem.appendChild(Input)
        NewItem.appendChild(ProfilePhoto)
        NewItem.appendChild(Label)

        ItemList.appendChild(NewItem)
    }

    const SameDay = new Date(Ourdate)
    const OneDayBefore = new Date(Ourdate)

    SameDay.setDate(Ourdate.getDate())
    OneDayBefore.setDate(Ourdate.getDate() - 1)

    DateBegin.value = OneDayBefore.toISOString().split("T")[0]
    DateUntil.value = SameDay.toISOString().split("T")[0]
})

AskSourcesButton.addEventListener("click", async () => {
    const AllCheckBoxes = document.querySelectorAll("input[type='checkbox']")
    const ContainOnlyLinks = document.getElementById("sources-includelinks").checked
    let SelectedSources = []

    let UrlString = "https://twitter.com/search?q=("

    let First = true
    for (const CheckBox of AllCheckBoxes) {
        if (CheckBox.checked) {
            if ( CheckBox.id === "sources-includelinks" ) continue

            SelectedSources.push(CheckBox.id.split("-")[1])

            if (First) {
                UrlString += "from:" + CheckBox.id.split("-")[1]
                First = false
            } else {
                UrlString += "%20OR%20from:" + CheckBox.id.split("-")[1]
            }
        }
    }

    UrlString += ")"

    if (SelectedSources.length === 0) {
        alert("Selecciona al menos una fuente")
        return
    }

    UrlString += "%20since:" + DateBegin.value + "%20until:" + DateUntil.value

    if (ContainOnlyLinks) {
        UrlString += "%20filter:links"
    }

    UrlString += "&src=cronologiadechile&f=live"

    // Open the URL
    window.open(UrlString, "_blank")
})