import React from 'react'
import styles from './WhyApps.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'


function WhyApps(props) {
    const {CompntCls , RowClas , SubHeading , Heading , BtnLink , BtnText , Para , ImgSrc , ImgWidht , ImgHeight } = props
  return (
    <div className={`${styles['WhyApps']} ${styles[CompntCls]}`}>
      <Container>
        <Row className={styles[RowClas]}>
            <Col md={6}>
                <div className={styles['Content-Sec']}>
                    <h4>{SubHeading}</h4>
                    <h1>{Heading}</h1>
                    <p>{Para}</p>
                    {BtnText ? (
                             <Link href={BtnLink}>{BtnText}</Link>
                    ): (
                        ""
                    )
                }
                   
                </div>
            </Col>
            <Col md={6}>
                <div className={styles['Image-Sec']}>
                    <Image src={ImgSrc} width={ImgWidht} height={ImgHeight} alt='Img'></Image>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhyApps
