export const addToCart = (data) => {
    return {
        type: 'ADD_TO_CART',
        payload: data,
    }
}

export const deleteToCart = (data) => {
    return {
        type: 'DELETE_TO_CART',
        id: data,
    }
}