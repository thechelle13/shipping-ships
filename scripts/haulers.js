import { getHaulingShips, getShippingShips } from "./database.js"

 // debugger

// const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            const haulerId = itemClicked.dataset.id
            let shipCounter = 0
            const shippingShips = getShippingShips()
            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId)
                shipCounter++
            }
            window.alert(`This hauler is carrying ${shipCounter} ship.`)
            
        }
    }
)

// debugger
export const HaulerList = () => {
    let haulersHTML = ""
    const haulers = getHaulingShips()
    //debugger
    for (const hauler of haulers) {
        haulersHTML += "<ul>"
        haulersHTML += `<li data-type="hauler"
                            data-id="${hauler.id}"
                            >${hauler.name}</li>`
        haulersHTML += "</ul>"
    }
    return haulersHTML
}