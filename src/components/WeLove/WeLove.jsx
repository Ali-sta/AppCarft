import React from 'react'
import styles from './WeLove.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'

function WeLove(props) {
    const {TopHeading , Description , WeLoveModuleCls} = props
    const Welovelist = [
        {
            ImgSrc :'/assets/images/startupimg.png',
            ImgWidt :'45',
            ImgHeght :'80',
            Heading :'Startups',
            Para :'You are an entrepreneur, a visionary. Let’s start building your unicorn.'
        },
        {
            ImgSrc :'/assets/images/Bussines1.png',
            ImgWidt :'50',
            ImgHeght :'80',
            Heading :'Businesses',
            Para :'Flawless transformative Apps and websites for your business.'
        },
        {
            ImgSrc :'/assets/images/Government1.png',
            ImgWidt :'65',
            ImgHeght :'88',
            Heading :'Government Agencies',
            Para :'Easy to use and secure Apps that improve Government processes.'
        },
    ];
  return (
    <div className={`${styles[WeLoveModuleCls]}`}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles['TopSec']}>
                        <h1>{TopHeading}</h1>
                        <p>{Description}</p>
                    </div>
                    <div className={styles["Box-Sec"]}>
                        {Welovelist.map((item , index) => (
                             <div className={styles['BoxMain']} key={index}>
                                <div className={styles['BoxInner']}>
                                    <div className={styles['ImgHeading']}>
                                        <Image src={item.ImgSrc} width={item.ImgWidt} height={item.ImgHeght} alt='Img' />
                                        <h1>{item.Heading}</h1>
                                    </div>
                                    <p>{item.Para}</p>
                                </div>
                            </div>
                        ))}
                    </div> 
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default WeLove
