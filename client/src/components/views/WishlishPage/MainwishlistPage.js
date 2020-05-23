import React, { useState } from 'react'
import WishlistPage from './wishlistPage'
import { addToWishlist  } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux';


function MainwishlistPage() {

    const dispatch = useDispatch();
    const [Product, setProduct] = useState([])

    const addToWishlistHandler =(productId) => {
        dispatch(addToWishlist(productId))
    }

    return (
        <div>
            <WishlistPage
           addToWishlist={addToWishlistHandler}
           detail={Product} 
            />
        </div>
    )
}

export default MainwishlistPage
