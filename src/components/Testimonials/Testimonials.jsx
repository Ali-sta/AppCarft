import React from 'react'
import styles from './Testimonials.module.scss'
import { Container , Row } from 'react-bootstrap'
import Image from 'next/image'
import Slider from 'react-slick';

function Testimonials(props) {
    const {TopHeading , TopPara } = props

    const ClientTS = [
        {
            ClientName: "John Smith",
            ClientDestination: "CEO",
            ClientImg:"/assets/images/Clientimg.png",
            CImgWidht: "138",
            CImgHeight: "138",
            RatingImg:"/assets/images/All Stars.png",
            RImgWidht:"100",
            RImgHeight:"18",
            ClientReview: "App Crafters Studio delivered an outstanding app that surpassed our expectations. Their team's expertise, professionalism, and attention to detail were impressive. Highly recommended!",
        },
        {
            ClientName: "John Smith",
            ClientDestination: "CEO",
            ClientImg:"/assets/images/Clientimg.png",
            CImgWidht: "138",
            CImgHeight: "138",
            RatingImg:"/assets/images/All Stars.png",
            RImgWidht:"100",
            RImgHeight:"18",
            ClientReview: "App Crafters Studio delivered an outstanding app that surpassed our expectations. Their team's expertise, professionalism, and attention to detail were impressive. Highly recommended!",
        },
        {
            ClientName: "John Smith",
            ClientDestination: "CEO",
            ClientImg:"/assets/images/Clientimg.png",
            CImgWidht: "138",
            CImgHeight: "138",
            RatingImg:"/assets/images/All Stars.png",
            RImgWidht:"100",
            RImgHeight:"18",
            ClientReview: "App Crafters Studio delivered an outstanding app that surpassed our expectations. Their team's expertise, professionalism, and attention to detail were impressive. Highly recommended!",
        },
    ]
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // If you want to show navigation arrows, set this to true
      };
  return (
    <div className={styles['Testimonials-Sec']}>
        <Container>
            <Row>
                <div className={styles['Testimonial-Inner']}>
                    <h1>{TopHeading}</h1>
                    <p>{TopPara}</p>

                    <div className={styles['Clint-Testimonials']}>
                        <Slider {...sliderSettings}> {/* Use the Slider component and pass the sliderSettings */}
                            {ClientTS.map((item , index) => (
                                <div className={styles['Client-Reviews']} key={index}>
                                    <div className={styles['img-Heading-Rating']}>
                                        <Image src={item.ClientImg} width={item.CImgWidht} height={item.CImgHeight} alt='Img' />
                                        <div className={styles['Nme-rating']}>
                                            <div>
                                                <h1>{item.ClientName}, <span>{item.ClientDestination}</span></h1>
                                                <Image src={item.RatingImg} width={item.RImgWidht} height={item.RImgHeight} alt='Img' />
                                            </div>
                                        </div>
                                    </div> 
                                    <p>{item.ClientReview}</p>       
                                </div>
                            )
                            )}
                        </Slider>
                      
                        
                    </div>
                </div>
            </Row>
        </Container>
      
    </div>
  )
}

export default Testimonials
