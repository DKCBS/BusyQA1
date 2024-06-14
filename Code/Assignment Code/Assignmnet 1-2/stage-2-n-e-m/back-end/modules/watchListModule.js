
const additem = (Symbol) => {
    console.log ('item ${Symbol} added to watch list')
}

const removeitem = (Symbol) => {
    console.log ('item ${Symbol} removed from watch list')
}

const getitem = () => {
    console.log ('watch list items fetched..')
}

modules.exports = {
    additem,
    removeitem,
    getitem,
}