import {getHaulingShips, getShippingShips } from "./database.js"

const ships = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        const shippers = itemClicked.dataset.type
        const haulers = getHaulingShips()
        //if (itemClicked.dataset.type === "shippingShips") {
            //debugger
            for (const hauler of haulers) {
                
                if(hauler.id === parseInt(shippers)) {

            
                    window.alert(`${itemClicked.dataset.name} is being hauled by ${hauler.name}.`)
                }
            }  
        }      
      
)


// debugger
export const ShippingShipList = () => {
    let shipsHTML = ""
    for (const ship of ships) {
        shipsHTML += "<ul>"
        shipsHTML += `<li 
            data-id="${ship.id}"
            data-name="${ship.name}" 
            data-type="${ship.haulerId}">
            ${ship.name}</li>`
        shipsHTML += "</ul>"
    }
    return shipsHTML
}

