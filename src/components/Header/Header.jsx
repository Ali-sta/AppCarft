import React from 'react'
import styles from './Header.module.scss'
import {   Row , Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


function header() {
   
  return (
    <div className={styles['Header-Sec']}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles['Image-Sec']}>
                        <Link href="/">
                            <Image src={'/assets/images/Header-logo.png'} width={150} height={100} alt='Img' />
                        </Link>
                    </div>
                </Col>
                <Col md={6} className={styles['Contect-Col']}>
                    <div className={styles['Contact-Sec']}>
                        <h6>Call Now:</h6>
                        <a href="tel:123(4567)789">123(4567)789</a>
                    </div>
                
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default header
