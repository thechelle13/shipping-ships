import { getDocks, getHaulingShips } from "./database.js"

const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
        const dockId = itemClicked.dataset.id
        const dockLocation = itemClicked.dataset.location
        let dockedShip = ""
        for (const hauler of haulers) {
            if(parseInt(dockId) === hauler.id){
                dockedShip += `${hauler.name}`
        }
        if (dockedShip === "") {
            window.alert(`${dockLocation} is unloading no boats.`)}
            else {
                const dockedShips = dockedShip.slice(0, dockedShip.length)
                window.alert(`${dockLocation} is unloading ${dockedShips}`)
            }
        }
        }
        
            //window.alert(`This dock is holding ${itemClicked.dataset.id} ships.`)
    }
)

export const DockList = () => {
    const docks = getDocks()
    let docksHTML = ""
    // debugger
    for (const dock of docks) {
        docksHTML += "<ul>"
        docksHTML += `<li data-id="${dock.id}"
                        data-type="dock"
                        
                        >${dock.location} has a volume of ${dock.volume}.</li>`
        docksHTML += "</ul>"
    }
    return docksHTML
}

//   data-location="${dock.location}