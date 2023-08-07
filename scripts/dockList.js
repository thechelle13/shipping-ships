import { getDocks, getHaulingShips } from "./database.js"

const haulers = getHaulingShips()

const docks = getDocks()

// debugger 
document.addEventListener(
    "click",
    (clickEvent) => {
            
        const itemClicked = clickEvent.target
                   
        const dockId = itemClicked.dataset.id

            if (itemClicked.dataset.type === "dock") {
                const hauler = getHaulingShips()
                
                for (const hauls of hauler) {
                // debugger
                let dockedShip = ""
                    if(parseInt(dockId) === hauls.dockId){
                    dockedShip += `${hauls.name}`
                        if (dockedShip === "") {
                        window.alert(`${dockId} is unloading no boats.`)
                        }

                        else {
                        window.alert(`${dockId} is unloading ${dockedShip}`)
                        }
                    }
                }
            }          
    }
)

export const DockList = () => {
    let docksHTML = ""
    // debugger
    for (const dock of docks) {
        docksHTML += "<ul>"
        docksHTML += `<li 
                        data-type="dock"
                        data-id="${dock.id}"
                        data-name="${dock.location}"
                        >${dock.location} has a volume of ${dock.volume}.</li>`
        docksHTML += "</ul>"
    }
    return docksHTML
}
