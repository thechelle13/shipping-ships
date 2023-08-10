import {getHaulingShips, getShippingShips } from "./database.js"

const ships = getShippingShips()
const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "shippingShips") {
            window.alert(`${itemClicked.dataset.name} is being hauled by ${itemClicked.dataset.hauler}.`)
        }
    }  
)

const findHauler = (shipObject, haulerArray) => {
    let theseHaulers = null
    for (const hauler of haulerArray) {
        // debugger
        if(hauler.id === shipObject.haulerId) {
            theseHaulers = hauler
        }
    }
    return theseHaulers
}

export const ShippingShipList = () => {
    let shipsHTML = ""
    
    for (const ship of ships) {
     // debugger
        const currentHaulers = findHauler(ship, haulers)
        shipsHTML += "<ul>"
        shipsHTML += `<li 
            data-type="shippingShips"
            data-hauler="${currentHaulers.name}"
            data-name="${ship.name}" 
            >
            ${ship.name}</li>`
            shipsHTML += "</ul>"
    
    }   
    return shipsHTML
}

