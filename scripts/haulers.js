import { getHaulingShips } from "./database.js"

 // debugger

const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {

            

            window.alert(`This hauler is carrying ${itemClicked.dataset.id} cargo.`)
        }
    }
)
// debugger
export const HaulerList = () => {
    let haulersHTML = ""
    //debugger
    for (const hauler of haulers) {
        haulersHTML += "<ul>"
        haulersHTML += `<li data-id="${hauler.id}"
        data-type="hauler">${hauler.name}</li>`
        haulersHTML += "</ul>"
    }
    return haulersHTML
}