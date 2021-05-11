


// general type common

export const generalTypeFetching = type => `${type}_Fetching`;

export const generalTypeSuccess = type => `${type}_Success`;

export const generalTypeFailure = type => `${type}_Failure`;

export const generalTypePending = type => `${type}_Pending`;


// general action common

export const generalActionsFetching = (type, payload) => ({
    type: generalTypeFetching(type),
    payload
})



export const generalActionsSuccess = (type, payload) => ({
    type: generalTypeSuccess(type),
    payload
});


export const generalActionsFailure = (type, payload) => ({
    type: generalTypeFailure(type),
    payload
});

export const generalActionsPending = (type, payload) => ({
    type: generalTypePending(type),
    payload
});



