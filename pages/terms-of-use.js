import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'

const privacy = ({ data }) => {  
  const pathname = usePathname()
  return (
    <div>
      <NextSeo
         noindex={true}
         nofollow={true}
      title="Privacy policy  - Walmart Vriddhi"
      description="Privacy policy  - Walmart Vriddhi"
        canonical={pathname}
        openGraph={{
          url: pathname,
          title: 'Privacy policy  - Walmart Vriddhi',
          description: 'Privacy policy  - Walmart Vriddhi',
          images: [
            {
              url:'/images/Walmart-Vriddhi-logo.svg',
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url:'/images/Walmart-Vriddhi-logo.svg',
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: '/images/Walmart-Vriddhi-logo.svg' },
            { url: '/images/Walmart-Vriddhi-logo.svg' },
          ],
          siteName: "Privacy policy  - Walmart Vriddhi",
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
        <Header/>
<Container fluid>
{
data.map((post,index)=>{
console.log(post)
return (
<>
<Container className="wbg-main d-flex  align-items-center" style={{height:150}}>
<h2 className="text-white bogle-medium text-right px-5">{post['title']['rendered']}</h2>
</Container>
<Container className="px-5 m-break">
<div dangerouslySetInnerHTML={{__html:post['acf']['terms_of_use']}} className="fs-4"/>

</Container>
</>
 )


})}
</Container>
<Popups/>
            <Floating/> 
            <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default privacy


export async function getServerSideProps(context){
    //const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}pages?_embed&slug=terms-of-use`);
  const data = await res.json();
  console.log(data)
    return {props:{data}}
    
    }
