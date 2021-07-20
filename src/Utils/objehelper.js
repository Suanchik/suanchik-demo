export let upDataObjectArray = (items, itemsId, id, newObj) => {
    return items.map(u=> {
        if (u[id] === itemsId) {
            return {...u, ...newObj}
        } else {
            return u;
        }
    })
}