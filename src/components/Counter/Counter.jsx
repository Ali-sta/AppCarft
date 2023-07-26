import React from 'react';
import styles from './Counter.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import CountUp from 'react-countup'; // Import the CountUp component

function Counter() {
  const CounterData = [
    {
      Imgsrc: '/assets/images/Frame1.png',
      Imgwdth: '63',
      ImgHight: '62',
      Subheading: 'Projects Completed',
      count: 1, // Replace with the initial count value
      countParam: "k+"
    },
    {
      Imgsrc: '/assets/images/Frame.png',
      Imgwdth: '50',
      ImgHight: '66',
      Subheading: 'Years Experience',
      count: 12, // Replace with the initial count value
      countParam: "+"
    },
    {
      Imgsrc: '/assets/images/Frame2.png',
      Imgwdth: '80',
      ImgHight: '48',
      Subheading: 'Global Strong Team',
      count: 100, // Replace with the initial count value
      countParam: "+"
    },
    {
      Imgsrc: '/assets/images/Frame3.png',
      Imgwdth: '67',
      ImgHight: '65',
      Subheading: 'Revenue Generated',
      count: 50, // Replace with the initial count value
      countParam: "M+"
    },
  ];

  return (
    <div className={styles['Counter-Main']}>
      <Container>
        <Row>
          <Col md={12} className={styles['Col-12']}>
            <div className={styles['Counter-Inner']}>
              {CounterData.map((item, index) => (
                <div className={styles['Counter-Box']} key={index}>
                  <div className={styles['Counter-BoxInner']}>
                    <Image src={item.Imgsrc} width={item.Imgwdth} height={item.ImgHight} alt='Img' />
                    <div>
                      <CountUp start={0} end={item.count} duration={2} separator="," /> <span>{item.countParam}</span>
                    </div>
                    <h4>{item.Subheading}</h4>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
