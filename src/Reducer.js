const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                activeCountry: action.payload
            };
        case 'SET_DARKTHEME':
            return {
                ...state,
                darktheme: !action.payload
            };
        default:
            return state;
    }
};

export default Reducer;