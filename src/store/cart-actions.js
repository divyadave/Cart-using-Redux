import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async() => {
            const response = await fetch('https://cart-dff8c-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok) {
                throw new Error('Could not fetch cart data')
            }
            const data = await response.json()

            return data;



        }
        try {
            const cartData = await fetchData()
            
            dispatch(cartActions.replaceCart(cartData))
        }
        catch(error) {
            uiActions.showNotification({
                status: 'error',
                title: 'failed',
                message: 'Sending cart data failed'
              })

        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
           uiActions.showNotification({
              status: 'Pending data',
              title: 'Pending...',
              message: 'Sending cart data'
            })
            )
    

    const sendRequest = async () => {
        const response = await fetch('https://cart-dff8c-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',   
            body: JSON.stringify(cart)
          }) 
          if(!response.ok) {
            throw new Error('Sending cart data failed')
    
          }
    }
    try {
        await sendRequest();
        dispatch(
            uiActions.showNotification({
              status: 'success',
              title: 'Successful',
              message: 'Successfully cart data'
            })
            )
    }
    catch (error) {
        dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'failed',
              message: 'Sending cart data failed'
            })
            )

    }
    }

}