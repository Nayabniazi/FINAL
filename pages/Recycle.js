import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function OurTeam() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <Layout> <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30"><span className="btn btn-tag wow animate__animated animate__fadeIn">Meet Our Team</span>
                                <h3 className="color-grey-900 mb-25 mt-15 wow animate__animated animate__fadeIn">BinBear’s Junk Recycling Service</h3>
                             
                    <p className="font-md color-grey-900 wow animate__animated animate__fadeIn" >With our planet facing increasing waste challenges, responsible junk recycling has never been more important. Every day, people are upgrading to new items, leaving behind outdated furniture, appliances, and electronics. For many, the easiest option is to throw these items away, but at BinBear, we believe there’s a better way.</p>
              
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>Our team is dedicated to recycling as much as possible. Currently, we successfully recycle about 60% of the junk we collect, making a positive impact one load at a time. Explore our recycling service to learn more about how we contribute to a cleaner, greener world.
                                .</p>
                                <div className="mt-70 wow animate__animated animate__fadeIn"><Link className="btn btn-brand-2 mr-20" href="/contact"style={{backgroundColor:'orange',color:'black'}}>Free Estimate</Link><Link className="btn btn-link-medium" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path srokelinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-img-testimonials-4"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage4/img-testimonial-4.png" alt="transp" />
                                    <div className="box-info-testimonial-4"style={{backgroundColor:'black'}}>
                                        <h3 className="color-white mb-10 wow animate__animated animate__fadeIn">Satisfied</h3>
                                        <p className="font-sm color- wow animate__animated animate__fadeIn"style={{color:'white'}}>We always strive to serve our customers in the best way.</p>
                                        <div className="box-button mt-30"><Link className="btn btn-link font-sm color-white wow animate__animated animate__fadeIn" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path srokelinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <section className="section mt-100">
                <div className="container">
                     <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <h3>Save $20 Off Your Next Service with Promo Code (#WHYWAIT)</h3>
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>Terms apply. Not valid below minimum charge or combined with other offers.
                               </p>
                               <h4 style={{marginTop:'30px'}}>Learn More About Our Recycling:</h4>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="/Booking" style={{backgroundColor: 'orange', }}>
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Online Booking</Link></div>
                    </div>
                    <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
                                   
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>What is Recycling?</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>The State of Recycling</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'black'}}>How to Dispose of Your Junk Responsibly</h5>
                                        <p className="font-sm color-grey-900 mb-35"> </p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                   
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Recycling E-Waste</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                  
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Recycling Appliances</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Recycling Furniture and Mattresses</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                        <div className="box-button-offer mb-30" ><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Junk Removal Costs for Recycling</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                        <div className="box-button-offer mb-30" ><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>


 <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Recycling FAQs</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                        <div className="box-button-offer mb-30" ><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Choosing a Junk Recycling Company</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                        <div className="box-button-offer mb-30" ><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>





            <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail"><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn"></strong>
                            
                           
                            <h5>What is Recycling?</h5>
                            <p className="wow animate__animated animate__fadeIn">
                            Recycling involves converting waste materials into new products, helping conserve resources and reduce emissions. Instead of throwing away junk, recycling breaks down items to reuse their raw materials. Most communities support recycling efforts by providing bins and curbside services for homes and businesses. At BinBear, we make recycling easy: just point to the items, and we’ll haul them away, ensuring they’re responsibly processed.
                            </p>
                         
                           <h5>The State of Recycling</h5>
                        
                           <p>
                           Recycling has changed significantly, especially since China’s 2018 ban on most plastic and recyclable imports. Despite these shifts, recycling remains essential to the U.S. economy, creating jobs and conserving resources. Here are some key benefits:


                           </p>

                           

 
                           <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Economic Growth</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Recycling is a $200 billion industry in the U.S. and generates more jobs than landfills or waste-to-energy plants.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Resource Conservation</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Recycling saves natural resources and water, prevents waste from reaching oceans, and reduces greenhouse gas emissions. </p>
                                        </div>
                                       




                                    </div>















                           
                            <h3 className="wow animate__animated animate__fadeIn"style={{color:'black'}}>Top 5 Waste-Producing Countries</h3>
                            <div className="row align-items-center">
                                <div className="col-lg-7 wow animate__animated animate__fadeIn">
                                    <p> 
                                   
Contrary to popular belief, the U.S. isn’t the world’s top producer of waste. In fact, the highest per capita waste producers include:


.</p>
                                    <p>-Kuwait</p>
                                    <p>-Antigua and Barbuda</p>
                                    <p> -St. Kitts and Nevis</p>
                                    <p>-Guyana </p>
                                    <p>-Sri Lanka</p>
                                    </div>
                                <div className="col-lg-5 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
                            </div>
                            <p style={{marginTop:'30px'}}>However, the U.S. can do better when it comes to recycling. Increasing recycling rates could have a huge impact on reducing emissions and conserving resources.</p>
                        </div>
                    </div>
                </section>














               
                <section className="section mt-50 position-relative">
                    <div className="container">
                        <div className="banner-786"style={{backgroundColor:'black'}}>
                            <div className="box-banner-ads box-banner-ads-team">
                                <div className="box-banner-left"style={{backgroundColor:'orange'}}>
                                    <h6 className="color-black wow animate__animated animate__fadeIn">Fast shipping with the<br className="d-none d-lg-block" />most modern technology</h6>
                                </div>
                                <div className="box-banner-right wow animate__animated animate__fadeIn"/>
                            </div>
                        </div>
                    </div>
                </section>
               



                

                <section className="section mt-100">
                    <div className="container position-relative">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">How to Get Rid of Your Recyclable Junk</h2>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Not all junk needs to go to waste. Usable items can be repurposed, sold, or donated. Once you’ve handled what you can, BinBear is here to help with the rest, offering: </p>
                       



                        <div className="row"style={{marginTop:'20px'}}>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">1:Bulk Junk Hauling for oversized items.</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">2:Home Cleanouts for moving, seasonal cleaning, and downsizing</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                       

                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">3:Trash Removal for yard waste, construction debris, and more.</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">4:Property Cleanouts for landlords, real estate agents, and more.
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                       
                                       


                                    </div>













                        
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our experienced team makes it easy to declutter responsibly, handling all items with care and attention </p>
                      
                        

                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Recycling E-Waste</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> Electronic waste (e-waste) includes items like computers, TVs, and phones, which contain valuable and potentially harmful materials. Disposing of these items in landfills releases toxic metals into the environment. BinBear offers safe, eco-friendly e-waste removal, ensuring that your electronics are recycled responsibly.</p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">  We accept a wide range of e-waste, including:</p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> Computers
,Monitors
,Printers
,Copy machines
, Shredders
, Televisions
 </p>
             <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Don’t let e-waste harm the environment—let BinBear handle it for you.</p>                  
                     

                                </div>
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Recycling Furniture and Mattresses</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Disposing of large items like furniture and mattresses can be difficult, especially as they’re often not accepted at landfills. However, most furniture and up to 90% of mattress materials are recyclable. BinBear offers hassle-free furniture and mattress removal, recycling these items whenever possible to keep them out of landfills.</p>
                                </div>
                               
                            </div>
                            <div className="col-lg-6">
                            
                                   
                            <div className="item-faqs-2 mb-30">
                            
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Recycling Appliances</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Old appliances often contain chemicals like Freon, which can be harmful to the environment. BinBear provides an eco-friendly appliance removal service, handling items like:</p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>  Refrigerators
,Dishwashers
, Stoves
, Washers and dryers
, Heating and cooling units
</p>
<p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>We ensure that appliances are disposed of safely and responsibly, with careful handling of hazardous components.</p>
                                 
                                 </div>
                                 
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Costs of Junk Removal for Recycling</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">While many recyclables can be disposed of for free, larger items may come with fees. BinBear offers transparent, upfront pricing with free estimates. We show up on time, provide a written estimate, and, if you’re happy, we can often take your items on the spot.
With insured operators and fair pricing, BinBear delivers great value and eco-friendly services.
</p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>  </p>
                                 
                                 </div>
                                 
                              
                                <div className="item-faqs-2 mb-30">
                            
                                       </div>
                            </div>
                        </div>





                    </div>
                </section>



                 
            <section className="section pt-80 mb-70 bg-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Recycling FAQs</h2>
                                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">
                                    </p>
                                <div className="box-gallery-faqs">
                                    <div className="image-top"><img src="/assets/imgs/page/homepage3/dump.png" alt="transp" />
                                    </div>
                                    <div className="image-bottom">
                                        <div className="image-faq-1"><img src="/assets/imgs/page/homepage1/img-faq2.png" alt="transp" /></div>
                                        <div className="image-faq-2"><img src="/assets/imgs/page/homepage1/img-faq3.png" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="box-accordion">
                               

                            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body"> 


                            .</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn"style={{marginTop:'150px'}}>
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>What Items Aren’t Recyclable?
                            </button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                            <p >Garden hoses</p>
<p style={{marginTop:'10px'}}> Sewing needles</p>
<p style={{marginTop:'10px'}}> Bowling balls</p>
 <p style={{marginTop:'10px'}}>Food waste or soiled paper</p>
<p style={{marginTop:'10px'}}>Non-empty aerosol cans</p>
<p style={{marginTop:'10px'}}> Certain plastics and glass types</p>
<p style={{marginTop:'10px'}}>Batteries</p>
<p style={{marginTop:'10px'}}>Light bulbs</p>

                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>
                        Items That Are Recyclable?  </button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Furniture
<p style={{marginTop:'10px'}}>Appliances</p>
<p style={{marginTop:'10px'}}>Electronics</p>
<p style={{marginTop:'10px'}}>Mattresses</p>
<p style={{marginTop:'10px'}}>Hot tubs</p>
<p style={{marginTop:'10px'}}>Construction debris</p>

                           </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black',color:'white'}}>Do We Handle Hazardous Materials
                           ?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">
                        No. Hazardous materials should be disposed of through specialized services. Typical household hazardous items include certain chemicals, paints, and automotive fluids.
                        </div>
                    </div>
                </div>
               
            </div>








                                <div className="line-border mt-50 mb-50" />
                                <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
                                <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange'}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn
                                    More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                   




            <section className="section mt-100">
                    <div className="container position-relative">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Choosing a Junk Recycling Company</h2>
                        
                          
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> When selecting a junk recycling company, consider the following factors:</p>
                      
                        

                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Customer Service</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> Look for positive reviews and referrals from trusted sources</p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">  </p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> 

 </p>
             <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">.</p>                  
                     

                                </div>
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Eco-Friendly Practices</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Ensure the company prioritizes recycling and sustainable practices.</p>
                                </div>

                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Our Commitment to Recycling and the Planet</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">At BinBear, we’re committed to reducing waste and preserving the environment. Every truckload is carefully sorted to recycle as much as possible. Our goal is to operate efficiently, reduce landfill contributions, and support a sustainable future.
                                    </p>
                                    <h4 style={{marginTop:'20px'}}>BinBear specializes in:</h4>
                                    


                                 
      </div>                      

 </div>









                            <div className="col-lg-6">
                              
                            <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Transparent Pricing</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"></p>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}> Don’t just choose the cheapest option—look for a company that offers fair pricing with no hidden fees.

</p>
<p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>
                                 
                                 </div>
                                 
                                <div className="item-faqs-2 mb-30">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Professionalism and Insurance</h6>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                     Choose an experienced, insured company for peace of mind.
</p>     

                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>  </p>
                              
                                 </div>
                                 








                              
                                <div className="item-faqs-2 mb-30">
                            
                                       </div>
                            </div>
                        </div>





                    </div>
                </section>

               




<div className="row"style={{marginLeft:'20px',marginRight:'20px'}}>
<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">


<div className="card-info">
   <h5 className="color- mb-15"style={{color:'black'}}>Appliance Removal</h5>
   <p className="font-sm color-grey-900 mb-35"></p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
<div className="card-offer hover-up">


<div className="card-info">


   <h5 className="color- mb-15"style={{color:'black'}}>Furniture Removal</h5>
   <p className="font-sm color-grey-900 mb-35">

   </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>Yard Waste Removal</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>


<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
<div className="card-offer hover-up">


<div className="card-info">
   <h5 className="color- mb-15"style={{color:'black'}}>Hot Tub Removal</h5>
   <p className="font-sm color-grey-900 mb-35">

   </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>Trash Removal</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>


<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>Mattress Disposal</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>E-Waste Recycling</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>

<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>Construction Waste Removal</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>


<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
<div className="card-offer hover-up">

<div className="card-info" >
   <h5 className="color- mb-15"style={{color:'black'}}>Property Cleanouts</h5>
   <p className="font-sm color-grey-900 mb-35"> </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>









<div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
<div className="card-offer hover-up">

<div className="card-info">
   <h5 className="color- mb-15"style={{color:'black'}}>And more!</h5>
   <p className="font-sm color-grey-900 mb-35">
   </p>
   <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
       <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
       </svg></span></a></div>
</div>
</div>
</div>







</div>














                <div className="mt-90" />
                <div className="section bg- d-block">
                    <div className="container">
                        <div className="box-newsletter"style={{backgroundColor:'black',marginBottom:'70px'}}>
                            <h3 className="color-white mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Weight" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Height" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" style={{backgroundColor:'orange',color:'black'}}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Address</h6>
                                                    <p className="font-sm color-white">65 Allerton Street 901 N Pitt Str, USA</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Email</h6>
                                                    <p className="font-sm color-white">contact@transp.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Telephone</h6>
                                                    <p className="font-sm color-white">(+380) 50 318 47 07 - (+182) 50 318 47 07</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}