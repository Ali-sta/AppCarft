import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import styles from './Banner.module.scss'
import Image from 'next/image'
import Link from 'next/link'


function Banner(props) {
    const {BannerBgURL,
           Heading,
           TagLine,
           Btn1Text,
           Btn2Text,
           RightImg,
           ImageWidth,
           ImageHeight,
           btnModuleCls
        } = props
  return (
    <div className={styles['Banner-Sec']} style={{backgroundImage: `url(${BannerBgURL})`}}>
        <Container>
            <Row>
                <Col md={7}>
                    <div className={styles["Content-Sec"]}>
                        <h1>{Heading}</h1>
                        <p>{TagLine}</p>
                        <div className={`${styles[{btnModuleCls}]} Btn-Box`}>
                            {Btn1Text ? (
                                <Link href="#">{Btn1Text}</Link>
                            ) :(
                                ""
                            )}
                             {Btn2Text ? (
                                <Link href="#">{Btn2Text}</Link>
                            ) :(
                                ""
                            )}
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className={styles['Image-Sec']}>
                        <Image src={RightImg} width={ImageWidth} height={ImageHeight} alt='Img'  />
                    </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Banner
