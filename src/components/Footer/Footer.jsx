import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';

function Footer(props) {
  return (
    <>
        <div style={{backgroundImage: `url(${props.BgImageURL})`}} className={styles['Footer-Sec']}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles['Contact-Area']}>
                            <div className={styles['Contact-Box']}>
                                <h4>Phone</h4>
                                <a href="tel:+1 (630) 686-9245" className={styles['Btn-Com']}>+1 (630) 686-9245</a>
                            </div>
                            <div className={styles['Contact-Box']}>
                                <h4>Email</h4>
                                <a href="mailto:inquiry@appcraft ersstudio.com" className={styles['Btn-Com']}>inquiry@appcraft ersstudio.com</a>
                            </div>
                            <div className={styles['Contact-Box']}>
                                <h4>Address</h4>
                                <a href="https://goo.gl/maps/c14y1kvmeMBKiCbm8" target='_blank' className={styles['Btn-Com']}>1415 West 22nd Street, Tower Floor, Oak Brook, 60523</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles['Footer-Logo-Sec']}>
                            <Link href={"/"}>
                                <Image src={'/assets/images/Header-logo.png'} width={150} height={100} alt='Img' />
                            </Link>
                        </div>
                        <div className={styles["Social-Icons_Area"]}>
                            <div><Link href={'https://www.facebook.com/'} target={'_blank'}><FaFacebookF /></Link></div>
                            <div><Link href={'https://www.instagram.com/'} target={'_blank'}><FaInstagram /></Link></div>
                            <div><Link href={'https://www.linkedin.com/'} target={'_blank'}><FaLinkedinIn /></Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={styles['Copy-Right-Sec']}>
            <p>© <Link href="/" className={styles['Btn-Com']}>App Crafters Studio</Link> <span>{props.date}</span>. All Rights Reserved</p>
        </div>
    
    </>
   
  )
}

export default Footer
