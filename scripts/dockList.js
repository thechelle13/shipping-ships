import { getDocks } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock")
        /*
            Your job is to design an algorithm and implement it
        */
            window.alert(`This dock is holding ${itemClicked.dataset.dockname} ships.`)
    }
)

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = ""

    for (const dock of docks) {
        docksHTML += `<ul>`
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}"
        data-type="dock">${dock.name}</li>`
        docksHTML += "</ul>"
    }
    return docksHTML
}