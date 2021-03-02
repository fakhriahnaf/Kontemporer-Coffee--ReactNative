const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation:'',
    // address: '',
    // kecamatan_area: '',
    // portalCode: '',
    // phoneNumber:'',
}

// const [namaState, setNamaState]

export const registerReducer = (state=initStateRegister, action) => {
    if(action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password:action.value.password,
            password_confirmation: action.value.password,
        }
    }
    // if (action.type === 'SET_REGISTER_CONTINUE') {
    //     return {
    //         ...state,
    //         address: action.value.address,
    //         kecamatan_area: action.value.kecamatan_area,
    //         portalCode: action.value.portalCode,
    //         phoneNumber: action.value.phoneNumber,
    //     }
    // }
    return state
};

const initPhoto  = {
    uri: '',
    type: '',
    name: '',
    isUploadPhoto: false,
}

export const photoReducer = (state=initPhoto, action) => {
    if(action.type === 'SET_PHOTO') {
        return {
            ...state,
            uri: action.value.uri,
            type: action.value.type,
            name: action.value.name
        }
    }
    if(action.type === 'SET_UPLOAD_STATUS') {
        return {
            ...state,
            isUploadPhoto: action.value,
        }
    }
    return state
}