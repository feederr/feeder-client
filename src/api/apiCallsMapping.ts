const mapping: any = {}

const apiCallsMapping = (actionType: any) => {
    if (mapping.hasOwnProperty(actionType)) {
        return mapping[actionType];
    } else {
        throw new Error("There is no such mapped action");
    }
}

export default apiCallsMapping;
