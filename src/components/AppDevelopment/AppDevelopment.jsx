import React from 'react'
import styles from './AppDevelopment.module.scss'
import Image from 'next/image'
import { Container , Row , Col } from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';


function AppDevelopment(props) {
    const tabsData = [
        {
            id: 1,
            Title: 'Requirement Gathering',
            TitleImg:'/assets/images/appdeve1.png',
            Timgwidht:'60',
            TimgHeight:'54',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ), 
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        {
            id: 2,
            Title: 'Scope of Work',
            TitleImg:'/assets/images/appdeve2.png',
            Timgwidht:'60',
            TimgHeight:'60',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ), 
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        {
            id: 3,
            Title: 'Design & Wireframing',
            TitleImg:'/assets/images/appdeve3.png',
            Timgwidht:'60',
            TimgHeight:'54',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ),
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        {
            id: 4,
            Title: 'Development',
            TitleImg:'/assets/images/appdeve4.png',
            Timgwidht:'60',
            TimgHeight:'54',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ),
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        {
            id: 5,
            Title: 'Quality Assurance',
            TitleImg:'/assets/images/appdeve5.png',
            Timgwidht:'60',
            TimgHeight:'60',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ),
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        {
            id: 6,
            Title: 'Deployment',
            TitleImg:'/assets/images/appdeve6.png',
            Timgwidht:'60',
            TimgHeight:'54',
            Description: (
                <>
                Requirement Gathering Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br/> <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </>
            ), 
            ImageUrl: '/assets/images/appdeve.png',
            BtnText: 'GET A FREE QUOTE',
            BtnLink:'#',
        },
        
    ] 
    const [activeTab, setActiveTab] = useState(tabsData[1].id);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

  return (
    <div className={`${styles['App-Development']} ${styles[props.CompntCls]}`}>  
        <Container>
            <Row>
                <h1>{props.TopHeading}</h1>
                <div className={styles['Tab-Main-Sec']}>
                    <div className={styles['tabs-sec']}>
                        <div className={styles['tabs-ul']}>
                            {tabsData.map((tab) => (
                                <div
                                    className={`${styles['tab']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                    key={tab.id}>
                                        <Image src={tab.TitleImg} width={tab.Timgwidht} height={tab.TimgHeight} alt=""/>
                                        <p>{tab.Title}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles['tab-content']}>
                        {tabsData.map((tab) => (
                            <div
                                key={tab.id}
                                className={`${styles['content']} ${activeTab === tab.id ? `${styles['active']}` : ''}`}
                                >
                                <div className={styles['Tab-Content-Sec']}>
                                <Container>
                                    <Row className={styles['Tab-Content-Sec-Row']}>
                                        <Col md={8} className={styles['Content-Box']}>
                                            <div>
                                                <h2><span>{tab.id}. </span>{tab.Title}</h2>
                                                <p>{tab.Description}</p>
                                                <Link href={tab.BtnLink}> {tab.BtnText}</Link>
                                            </div>
                                            </Col>
                                        <Col md={4} className={styles['Image-Col']}>
                                            <div className={styles['Image']}>
                                                <Image
                                                    className={styles['img']}
                                                    src={tab.ImageUrl}
                                                    alt=""
                                                    width={330}
                                                    height={680}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                </div>
                            </div>  
                        ))}
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default AppDevelopment
