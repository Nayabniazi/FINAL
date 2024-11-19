import Layout from "@/components/layout/Layout"

import Brands1 from "@/components/sections/homepage1/Brands1"
import Faqs1 from "@/components/sections/homepage1/Faqs1"
import News2 from "@/components/sections/homepage2/News2"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"

import Info5 from "@/components/sections/homepage3/Info5"
import Info6 from "@/components/sections/homepage3/Info6"
import Projects2 from "@/components/sections/homepage3/Projects2"
import Hero3 from "../components/sections/homepage3/Hero3"
import Services3 from "@/components/sections/homepage3/Services3"
import Testimonial3 from "@/components/sections/homepage3/Testimonial3"
import Whychooseus2 from "@/components/sections/homepage3/Whychooseus2"

export default function Home3() {

    return (
        <>
            <Layout>


         
            <section className="section d-block">
                    <div className="container position-relative">
                        <div className="banner-trackyourparcel" style={{ backgroundImage: "url('/assets/imgs/page/blog-single/bag.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   opacity:.6,
   
    height: "100%", }}/>
                        <div className="box-info-trackyourparcel">
                            <h2 className="color- mb-25 wow animate__animated animate__fadeIn"style={{color:'black'}}>Schedule a Pickup Full Dumpster Bag<br className="d-none d-lg-block" /></h2>
                            <p className="color-grey-900 font-md wow animate__animated animate__fadeIn"><br className="d-none d-lg-block" /></p>
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
















                <Brands1 />
               
              
                <Projects2 />
              
              


                <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail"><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn">Sea freight forwarding, also known as ocean freight forwarding, is a critical aspect of the global supply chain. It refers to the transportation of goods via cargo ships or vessels from one port to another. This mode of transportation is preferred by many businesses due to its cost-effectiveness, reliability, and ability to transport large quantities of goods. In this article, we will discuss the basics of sea freight forwarding, including its benefits, modes of transportation, and key players.</strong>
                            <h3 className="color- wow animate__animated animate__fadeIn"style={{color:'black'}}>Modes of Sea Freight Transportation</h3>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">There are two primary modes of sea freight transportation: Full Container Load (FCL) and Less than Container Load (LCL). FCL is used when the shipment is large enough to fill="none" an entire container. On the other hand, LCL is used when the shipment does not require a full container. In this case, the goods are combined with other shipments to fill="none" a container. Both modes have their advantages and disadvantages.</p>
                            <p className="wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img3.png" alt="transp" /></p>
                            <p className="wow animate__animated animate__fadeIn">There are two primary modes of sea freight transportation: Full Container Load (FCL) and Less than Container Load (LCL). FCL is used when the shipment is large enough to fill="none" an entire container. On the other hand, LCL is used when the shipment does not require a full container. In this case, the goods are combined with other shipments to fill="none" a container. Both modes have their advantages and disadvantages.</p>
                            <p className="wow animate__animated animate__fadeIn">There are two primary modes of sea freight transportation: Full Container Load (FCL) and Less than Container Load (LCL). FCL is used when the shipment is large enough to fill="none" an entire container. On the other hand, LCL is used when the shipment does not require a full container. In this case, the goods are combined with other shipments to fill="none" a container. Both modes have their advantages and disadvantages.</p>
                            <h3 className="wow animate__animated animate__fadeIn"style={{color:'black'}}>Benefits of Sea Freight Forwarding</h3>
                            <div className="row align-items-center">
                                <div className="col-lg-7 wow animate__animated animate__fadeIn">
                                    <p>Sea freight forwarding offers several benefits to businesses that use it to transport their goods. Some of the benefits include:</p>
                                    <p>Cost-Effectiveness: Sea freight forwarding is one of the most cost-effective modes of transportation, especially for businesses that require the transportation of large quantities of goods. This is because cargo ships can transport large volumes of goods at a lower cost compared to other modes of transportation.</p>
                                    <p>Sea freight forwarding is a reliable mode of transportation since it is not affected by traffic or weather conditions. Additionally, cargo ships are designed to withstand harsh weather conditions, which reduces the risk of damage or loss of goods.</p>
                                </div>
                                <div className="col-lg-5 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
                            </div>
                        </div>
                    </div>
                </section>








                <Faqs1 />
               
                <Newsletter1 />
            </Layout>
        </>
    )
}