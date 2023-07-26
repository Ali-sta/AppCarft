
import { Layout } from '@/components/Layout'
import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function App({ Component, pageProps }) {
  return(
    <Layout>
         <Component {...pageProps} />
    </Layout>
       
  ) 
}
