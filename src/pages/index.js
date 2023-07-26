import React, { Fragment } from 'react'
import { Banner } from '@/components/Banner'
import { MostExperience } from '@/components/MostExperience'
import { WeLove } from '@/components/WeLove'
import { TrustedVerify } from '@/components/TrustedVerify'
import { AppDevelopment } from '@/components/AppDevelopment'
import { WhyApps } from '@/components/WhyApps'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Fragment>
        <Banner 
          BannerBgURL="./assets/images/banner.png"
          Heading={
            <>
            Unleash Your <span>Apps Potential</span> with App Crafters Studio
            </>
          }
          TagLine="We've Built #1 Ranking and Top Grossing Apps in USA."
          Btn1Text="GET A FREE QUOTE"
          Btn2Text="LET’S TAlk"
          RightImg="/assets/images/RightImage.png"
          ImageWidth="500"
          ImageHeight="700" />
          <MostExperience
          Heading={
            <>
            Most Experienced App <span>Developers</span> in USA.
            </>
          }
          Description={
            "Our team of Award-winning Developers, Designers and Project Managers build Apps of tomorrow that are designed for success. We keep our customers’ vision, feedback and ideas at the centre of the development process!"
          }
          Btn1Text={
            "Contact Us"
          }
          Btn1Link={"#"}
          Btn2Text={" Book Your Free Strategy Session"}
          Btn2Link={"#"}
          BgImage={"./assets/images/Both-Shapes.png"}
          Imagesrc={"/assets/images/experien1.png"}
          Imagewidth={"520"}
          Imageheight={"640"}
          btnModuleCls={"Most"}
          />
          <WeLove
          TopHeading={
            <>
            We Love <span>Working With</span>
            </>
          }
          Description="This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished. This is dummy copy. It is not meant to be read. It has been placed."
          WeLoveModuleCls="WeLoveMain"
          />
          <TrustedVerify 
            Heading1={
              <>
              Trusted & <span>Verified</span>
              </>
            }
            Para1 ="This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished. This is dummy copy."
            Heading2={
              <>
              Award <span>Winning</span>
              </>
            }
            Para2="This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished. This is dummy copy."
            />
            <AppDevelopment TopHeading={
              <>
              App Development <span>Process</span>
              </>
            } />
            <WhyApps
              CompntCls="WhyAppFirst"
              SubHeading="How Much Does App "
              Heading="Development Cost?"
              Para={
                <>
                App development cost depends on several factors, such as: the complexity of the App, whether it is for the web, iOS or Android, whether you want a native or a hybrid App and many other factors.
                <div>
                  <p>
                  Basically, the more complex the App, usually, the more it will cost.
                  </p>
                  <p>
                  The good news is, with 1000+ projects successfully delivered, we’ve developed practices to deliver projects extremely cost-effectively while developing the highest quality Apps in USA.
                  </p>
                </div>
                </>
              }
              BtnText="GET A FREE QUOTE"
              BtnLink="#"
              ImgSrc="/assets/images/Mobilemockuppng1.png"
              ImgWidht="555"
              ImgHeight="666"
            />
             <WhyApps
              CompntCls="WhyAppSecond"
              RowClas="RowRevs"
              SubHeading="Why App"
              Heading="Crafters Studio ?"
              Para={
                <>
                With 1000+ projects completed and multiple prestigious industry awards won, our team is the most experienced and skilled development team in USA.
                <br/> <br/>
                While we are based in USA, we have successfully delivered projects throughout USA. We can make the necessary arrangements to discuss and deliver your project seamlessly, regardless of your location.
                 
                </>
              }
              ImgSrc="/assets/images/Mobilemockuppng2.png"
              ImgWidht="470"
              ImgHeight="545"
            />
            <Testimonials
              TopHeading="Testimonials"
              TopPara="Don't Just Take Our Word for it. See What Our Clients Have to Say"
            />

      </Fragment>
    </>
  )
}
