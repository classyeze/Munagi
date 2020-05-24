import React, { useEffect, useState } from 'react'
import WishlistPage from './wishlistPage'
import { addToWishlist } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux';
import Axios from 'axios';


function MainwishlistPage() {

    const dispatch = useDispatch();
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.get('/api/users/getWishlist', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
        }
        getProducts(variables)
        setSkip(skip)
    }

    const addToWishlistHandler = (productId) => {
        dispatch(addToWishlist(productId))
    }

    return (
        <div>
            <WishlistPage
                addToWishlist={addToWishlistHandler}
                detail={Products} onLoadMore={onLoadMore}
            />
        </div>
    )
}

export default MainwishlistPage
