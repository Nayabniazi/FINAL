import Layout from "@/components/layout/Layout"


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
                        <div className="banner-trackyourparcel" style={{ backgroundImage: "url(''/assets/imgs/page/blog-single/bag.png'')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%", opacity:'.6'}}/>

<div className="box-info-trackyourparcel">
                            <h2 className="color- mb-25 wow animate__animated animate__fadeIn"style={{Color:'black'}}>Dumpster Bag Rentals  <br className="d-none d-lg-block" /></h2>
                            <p className="color-grey-900 font-md wow animate__animated animate__fadeIn">Discover our JK Dumpster Bag ,How it Simplifies the Junk removal process<br className="d-none d-lg-block" /></p>
                            <div className="form-trackparcel wow animate__animated animate__fadeIn">
                               
                                      </div>
                                      <div className="mt-20"style={{marginLeft:'90px'}}><div className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange'}}>Free Estimate</div><div className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">
                                  
                                  </div>
                                  </div> 
 </div>
                            
                    






                        </div>

                </section>













             
               
              
                <Projects2 />
              
              
                <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail"><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn">Old appliances often contain chemicals like Freon, which can be harmful to the environment. BinBear provides an eco-friendly appliance removal service, handling items  </strong>
                           <h3 className="color- wow animate__animated animate__fadeIn"style={{color:'black'}}>Terms apply, Not valid below minimum charge or combined with other offers</h3>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Not all junk needs to go to waste. Usable items can be repurposed, sold, or donated. Once you’ve handled what you can, BinBear is here to help with the rest, offering:
                            Electronic waste (e-waste) includes items like computers, TVs, and phones, which contain valuable and potentially harmful materials. Disposing of these items in landfills releases toxic metals into the environment. BinBear offers safe, eco-friendly e-waste removal, ensuring that your electronics are recycled responsibly.                    </p>
                            <p className="wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img3.png" alt="transp" /></p>
                            <p className="wow animate__animated animate__fadeIn">While many recyclables can be disposed of for free, larger items may come with fees. BinBear offers transparent, upfront pricing with free estimates. We show up on time, provide a written estimate, and, if you’re happy, we can often take your items on the spot..</p>
                            <p className="wow animate__animated animate__fadeIn">While many recyclables can be disposed of for free, larger items may come with fees. BinBear offers transparent, upfront pricing with free estimates. We show up on time, provide a written estimate, and, if you’re happy, we can often take your items on the spot..</p>
                            
                            
                            
                            <h3 className="color- wow animate__animated animate__fadeIn"style={{color:'black'}}>Big Trucks, Big Value</h3>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.           </p>
                            <div className="col-lg-5 wow animate__animated animate__fadeIn"style={{width:'500px'}}><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
                  
                            <p className="wow animate__animated animate__fadeIn"style={{marginTop:'40px'}}>Cost-Effectiveness: Sea freight forwarding is one of the most cost-effective modes of transportation, especially for businesses that require the transportation of large quantities of goods. This is because cargo ships can transport large volumes of goods at a lower cost compared to other modes of transportation.</p>
                            <p className="wow animate__animated animate__fadeIn">Junk Dumpster forwarding is a reliable mode since it is not affected by traffic or weather conditions. Additionally, cargo ships are designed to withstand harsh weather conditions, which reduces the risk of damage or loss of goods.</p>
                           
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                           
                        </div>
                    </div>
                </section>







                <Faqs1 />
               
                <Newsletter1 />
            </Layout>
        </>
    )
}