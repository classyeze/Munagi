import React, { useState } from 'react'
import { Icon, Col, Card, Row, Button } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import { deleteWishlist } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux';

const { Meta } = Card;

function WishlistPage(props) {
    console.log(props);

    const dispatch = useDispatch();

    const deleteWishlishHandler = () => {
        dispatch(deleteWishlist());
    }

    const renderCards = props.detail.map((product, index) => {


        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
            >
                <Meta style={{textAlign: 'center'}}
                    title={product.title}
                    description={`$${product.price}`}
                />
                 <Button type="" shape="circle" style={{ marginTop: 15, float: 'right', bottom: 430, textAlign: 'center', left: 18, backgroundColor: '#333030'}}
                    onClick={() => { deleteWishlishHandler() }}

                >

                    <Icon type="delete" style={{ fontSize: 21, textAlign: 'center', marginTop: 4, color: 'white'}} />

                </Button>
            </Card>
        </Col>
    })


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  YOUR FAVOURITES  <Icon type="shopping" />  </h2>
            </div>



            {props.detail.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No items saved yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>
                </div>
            }

            <br /><br />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={props.onLoadMore}>Load More</button>
            </div>
        </div>
    )
}

export default WishlistPage
