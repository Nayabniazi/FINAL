import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/homepage1/Brands1"
import Hero2 from "@/components/sections/homepage2/Hero2"
import Info3 from "@/components/sections/homepage2/Info3"
import Info4 from "@/components/sections/homepage2/Info4"
import News2 from "@/components/sections/homepage2/News2"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import Requestquote2 from "@/components/sections/homepage2/Requestquote2"
import Team1 from "@/components/sections/homepage2/Team1"
import Testimonial2 from "@/components/sections/homepage2/Testimonial2"
import Whychooseus1 from "@/components/sections/homepage2/Whychooseus1"
import Faq from "./faqs"
export default function Home2() {

    return (
        <>
            <Layout>
             

            <section className="section d-block">
                    <div className="container position-relative">
                        <div className="banner-trackyourparcel" style={{ backgroundImage: "url('/assets/imgs/page/blog-single/rental.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%", opacity:'.6'}}/>
                        <div className="box-info-trackyourparcel">
                            <h2 className="color- mb-25 wow animate__animated animate__fadeIn"style={{Color:'black'}}>JK Pricer Estimater<br className="d-none d-lg-block" /></h2>
                            <p className="color-grey-900 font-md wow animate__animated animate__fadeIn">Track packages from China, US Post, Canada Post, Royal Mail, Deutsche Post,<br className="d-none d-lg-block" />Aliexpress, UPS, Shein, FedEx, Pitney Bowes, eBay, Amazon</p>
                            <div className="form-trackparcel wow animate__animated animate__fadeIn">
                                <form action="#">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Your package tracking number" />
                                        <input className="btn btn-brand-1 btn-track" type="submit" defaultValue="Track Package" style={{backgroundColor:'orange'}}/>
                                    </div>
                                </form>
                            </div>
                             </div>
                    </div>
                </section>





             
                
           
              
                <div className="line-border"></div>
                <Testimonial2/>
                <Brands1 />
                <Pricing2/>
             














              
               
                
                <Newsletter1 />
            </Layout>
        </>
    )
}