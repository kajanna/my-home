const houseObjectFromFormValues = values => {
    let house = {};
    let propertyNames = [];
    for (const key in values) {
        propertyNames.push(key);
    }
    for (const p of propertyNames) {
        house[p] = values[p] ? values[p] : null;
    }
    return house;
}

export default houseObjectFromFormValues;