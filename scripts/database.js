const database = {
    docks: [
        { id: 1, name: "Shanghai, China", volume: "43.5" },
        { id: 2, name: "Busan, South Korea", volume: "21.6" },
        { id: 3, name: "Rotterdam, The Netherlands",    volume: "14.35" },
        { id: 4, name: "Antwerp, Belgium", volume: "12.04" }, 
        { id: 5, name: "Pensacola, Florida", volume: "13.02" }
    ],
    ships: [
        {id:1, name:"The Stewie", dockId: 1}, 
        {id:2, name:"The Lois", dockId: 2}, 
        {id:3, name:"The Griffin", dockId: 3}, 
        {id:4, name:"The Giddie", dockId: 4}, 
        {id:5, name:"The Ninja", dockId: 5}
    ], 
    
    shippingShips: [
        {id:1, name:"The Marge"}, 
        {id:2, name:"The Bart"}, 
        {id:3, name:"The Lisa"}, 
        {id:4, name:"The Homer"}, 
        {id:5, name:"The Santa's Helper"} 
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}
export const getHaulingShips = () => {
    return database.ships.map(ship => ({...ship}))
}
export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}

