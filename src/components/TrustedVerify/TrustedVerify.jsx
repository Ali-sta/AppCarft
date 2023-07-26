import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import styles from './TrustedVerify.module.scss'
import Counter from '../Counter/Counter'

function TrustedVerify(props) {
  const {Heading1 , Heading2 , Para1 , Para2} = props
  return (
    <div className={styles['TrustedVerify']}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles['CounterSec']}>
                        <Counter/>
                    </div>
                </Col>
                <Col md={6} className={styles['Content-Col']}>
                  <div className={styles['Content-Sec']}>
                    <h1>{Heading1}</h1>
                    <p>{Para1}</p>
                    <h1>{Heading2}</h1>
                    <p>{Para2}</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TrustedVerify
