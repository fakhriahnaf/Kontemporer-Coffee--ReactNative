const initHome = {
    product: [],
    coffee:[],
    non_coffee: [],
    food:[],
    beans:[],
};

export const homeReducer = (state = initHome, action) => {
    if(action.type === 'SET_PRODUCT') {
        return {
            ...state, 
            product: action.value,
        };
    }
    if(action.type === 'SET_COFFEE') {
        return {
            ...state, 
            coffee: action.value,
        };
    }
    if(action.type === 'SET_NON_COFFEE') {
        return {
            ...state, 
            non_coffee: action.value,
        };
    }
    if(action.type === 'SET_FOOD') {
        return {
            ...state, 
            food: action.value,
        };
    }
    if(action.type === 'SET_BEANS') {
        return {
            ...state, 
            beans: action.value,
        };
    }
    return state;
}