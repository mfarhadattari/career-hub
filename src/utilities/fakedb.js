// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const exist = appliedJobs[id];
    if (!exist) {
        appliedJobs[id] = 1;
    }
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedAppliedJobs = localStorage.getItem('appliedJobs');
    if (storedAppliedJobs) {
        appliedJobs = JSON.parse(storedAppliedJobs);
    }
    return appliedJobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobs,
    deleteShoppingCart
}
