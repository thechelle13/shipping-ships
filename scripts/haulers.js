import { getHaulingShips } from "./database.js"

const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        window.alert(`This hauler is carrying ${itemClicked.dataset.volume} cargo.`)
    }
)

export const HaulerList = () => {
    let haulersHTML = ""
    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `<ul>`
        haulersHTML += `<li data-id="${hauler.id}"
        data-type="hauler">${hauler.name}</li>`
        haulersHTML += `</ul>`
    }
    return haulersHTML
}