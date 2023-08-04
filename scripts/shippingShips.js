import {getHaulingShips, getShippingShips } from "./database.js"

//const shippingShips = getShippingShips()
// debugger
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "shippingShip") {
//debugger
            const shippingShipId = itemClicked.dataset.id
            let shipCounter = 0
            const haulers = getHaulingShips()
                for (const hauler of haulers) {
                    if (parseInt(shippingShipId) === hauler.id) {
                    shipCounter++
                }
            }
            window.alert(`This Carrier is carrying ${shipCounter} shipping ships.`)
        }
    }
)
// debugger
export const ShippingShipList = () => {
    const ships = getShippingShips()
    let shipsHTML = ""
    for (const ship of ships) {
        shipsHTML += "<ul>"
        shipsHTML += `<li 
            data-id=${ship.id} 
            data-type="shippingShip">
                ${ship.name}</li>`
        shipsHTML += "</ul>"
    }
    return shipsHTML
}
