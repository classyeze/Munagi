import React, { useState } from 'react'
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';



const { Meta } = Card;

function WishlistPage(props) {
    
    const [Products, setProduct] = useState([])

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
            > 
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })


    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>  YOUR FAVOURITES  <Icon type="shopping" />  </h2>
            </div>



            {Products.length === 0 ?
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
                <button>Load More</button>
            </div>
        </div>
    )
}

export default WishlistPage
