const reductor = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(state)
            let isExist = false;
            state.forEach(r => {
                if(r.id === action.payload.id ) {
                    r.qty = r.qty + action.payload.qty;
                    isExist = true;
                }
            });

            return isExist ? [...state] : [
                ...state, action.payload
            ];
        case 'DELETE_TO_CART':
            state.forEach((item, index, object) => {
                if(item.id === action.id ) {
                    object.splice(index, 1);
                }
            });

            return [
                ...state
            ]
    }
    
    return state;
}

export default reductor;