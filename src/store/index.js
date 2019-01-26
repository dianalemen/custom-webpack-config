function store () {
    const store = {};
    return {
        setValue: (key, value) => store[key] = value,
        getItem: key => store[key],
        removeItem: key => delete store[key],
    }
}

export default store;
