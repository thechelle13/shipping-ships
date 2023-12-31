const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5"},
        { id: 2, location: "Busan, South Korea", volume: "21.6"},
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35"},
        { id: 4, location: "Antwerp, Belgium", volume: "12.04"}, 
        { id: 5, location: "Pensacola, Florida", volume: "13.02"}
    ],
    haulers: [
        {id:1, name:"The Stewie", dockId: 4, haulerId: 5}, 
        {id:2, name:"The Lois", dockId: 3, haulerId: 4}, 
        {id:3, name:"The Griffin", dockId: 5, haulerId: 2}, 
        {id:4, name:"The Giddie", dockId: 1, haulerId: 3}, 
        {id:5, name:"The Ninja", dockId: 2, haulerId: 1}
    ], 
    
    shippingShips: [
        {id:1, name:"The Marge", haulerId: 5, dockId: 2}, 
        {id:2, name:"The Bart", haulerId: 4, dockId: 1}, 
        {id:3, name:"The Lisa", haulerId: 1, dockId: 3}, 
        {id:4, name:"The Homer", haulerId: 2, dockId: 5}, 
        {id:5, name:"The Santa's Helper", haulerId: 2, dockId: 4} 
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}
export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}
export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}

