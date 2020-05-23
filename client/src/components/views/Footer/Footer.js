import React from 'react'
import { Row, Col, Divider, Icon } from 'antd';
import 'antd/dist/antd.css';

  

const style = { padding: '8px 0' };


function Footer() {
    return (
        <div>
            <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
    
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                </Divider>

                    <Row gutter={[16, 24]} >
                        <Col className="gutter-row" span={6}>
                            <div style={style}>SHOP</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>MORE WAYS TO SHOP</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>COMPANY INFORMATION</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>HELP & INFORMATION</div>
                        </Col>


                        <Col className="gutter-row" span={6}>
                            <div style={style}>Gift Cards</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Marketplace</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>ABOUT MUNAGI </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Help Centre</div>
                        </Col>


                        <Col className="gutter-row" span={6}>
                            <div style={style}>MUNAGI blog</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Affiliates</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Policies</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Privacy Settings</div>
                        </Col>
        

                        <Col className="gutter-row" span={6}>
                            <div>
                                <Icon type="facebook" style={{ fontSize: 25 }} /> &nbsp; &nbsp;
                                <Icon type="twitter" style={{ fontSize: 25 }} />  &nbsp; &nbsp;
                                <Icon type="instagram" style={{ fontSize: 25 }} /> &nbsp; &nbsp;
                                <Icon type="youtube" style={{ fontSize: 25 }} /> &nbsp; &nbsp;
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Teams & Ideas</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Investors</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Delivery & Returns</div>
                        </Col>

                        
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Mobile Apps</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Careers</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Shipping Information</div>
                        </Col>

                        
                        <Col className="gutter-row" span={6}>
                            <div style={style}></div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Forums</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Legal imprint</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>Contact Customer Care</div>
                        </Col>
                    </Row>

            </div>

            <div>
                <div  style={{ color: 'black', margin: 'auto', marginTop: '30px', marginBottom: '20px'}}>
                    <Row justify="end">
                    <Col span={16}> © 2020 MUNAGI, Inc. All Rights Reserved. </Col>
                    <Col style={{ textAlign: 'right' }} span={2}> Privacy & Policy </Col>
                    <Col style={{ textAlign: 'center' }} span={4}> Terms & Conditions </Col>
                    <Col style={{ textAlign: 'left' }} span={2}>Accessibility </Col>
                    </Row>
                </div>
            </div>
                {/* <div>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                </div> */}
        </div> 
    )
}

export default Footer
