import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import styles from './MostExperience.module.scss'

function MostExperience(props) {
    const {secClass,
           BgImage,
           Imagesrc,
           Imagewidth,
           Imageheight,
           Heading,
           Description,
           Btn1Text,
           Btn1Link,
           Btn2Text,
           Btn2Link,
           btnModuleCls
        } = props
  return (
    <div className={`${styles['Most-Experience-Comm']} ${styles[secClass]}`}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles['Image-Sec']} style={{backgroundImage: `url(${BgImage})`}}>
                        <Image src={Imagesrc} width={Imagewidth} height={Imageheight} alt='Img'/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles['Content-Sec']}>
                        <h1>{Heading}</h1>
                        <p>{Description}</p>
                        {Btn1Text || Btn2Text ? (
                            
                            <div className={`${styles[btnModuleCls ? btnModuleCls : ""]} Btn-Box`} >
                                {Btn1Text ? (
                                     <Link href={Btn1Link}>{Btn1Text}</Link>
                                ) :
                                (
                                    ""
                                )}
                                {Btn2Text ? (
                                      <Link href={Btn2Link}>{Btn2Text}</Link>  
                                ): (
                                    ""
                                )}          
                            </div>
                        ) : (
                            ""
                        )}
                          
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MostExperience
