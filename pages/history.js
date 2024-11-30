// /pages/history.js or /pages/history/index.js
import Layout from "@/components/layout/Layout";
import Brand1Slider from "@/components/slider/Brand1Slider";
import News2Slider from "@/components/slider/News2Slider";
import Testimonial2Slider from "@/components/slider/Testimonial2Slider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import React from 'react';

const HistoryPage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
             <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 text-center">
                            <h2 className="color-white mt-15 mb-10 wow animate__animated animate__fadeIn">Quick Junk Removal History</h2>
                            <p className="font-md color-white wow animate__animated animate__fadeIn"><br className="d-none d-lg-block" /></p>
                            <form action="#">
    <div className="form-group">
        <div
            style={{
                display: "flex",
                flexDirection: "column", // Stack buttons vertically
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                gap: "15px", // Add space between buttons
                marginTop: "20px",
                width: "100%", // Full-width for responsiveness
            }}
        >
            {/* Button: Free Estimate */}
            <a
                href="Booking"
                style={{
                    backgroundColor: "orange",
                    color: "black",
                    border: "none",
                    padding: "15px 20px",
                   
                    textDecoration: "none", // Remove underline
                    textAlign: "center",
                    width: "90%", // Ensure responsiveness
                    maxWidth: "250px", // Limit max width for larger screens
                }}
            >
                Free Estimate
            </a>

            {/* Button: Learn More */}
           
        </div>
    </div>
</form>


                        </div>
                    </div>
                </section>
                <section className="section mt-100 mb-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                               
                                <h2 className="color-black mb-25 wow animate__animated animate__fadeIn">What Is Junk Removal?</h2><p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" >Junk removal is a specialized service focused on helping people declutter and remove items they can’t dispose of through standard trash pickup. Unlike regular trash services that provide bins for weekly garbage collection, junk removal services cater to larger, bulkier disposal needs.  </p>
                               
                               
                               <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" style={{marginTop:'20px'}} >Imagine you’re cleaning out your basement and end up with far more waste than your typical bin can handle. Or maybe you have large items like old furniture or broken appliances that you want to get rid of. This is where junk removal companies, like BinBear, come in. We handle those oversized items and extensive cleanup projects, providing you with an efficient, hassle-free way to clear out your space.</p>
                               <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" style={{marginTop:'20px'}}>Junk removal can also benefit contractors and renovators who often generate substantial debris, such as drywall pieces and old flooring. These professionals often rely on junk removal companies to keep their workspaces clean and organized.</p>
                                 </div>
                            <div className="col-lg-6 position-relative mb-30">
                                <div className="row align-items-end">
                                    <div className="col-lg-5 col-md-5 col-sm-5"><img className="mb-20 wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-1.png" alt="transp" /><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/blog-single/bagi.png" alt="transp" /></div>
                                    <div className="col-lg-7 col-md-7 col-sm-7"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
                                </div>
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 mb-50">
                    <div className="container">
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage3/dump.png" alt="transp" /></div>
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Mission</span>
                                    <h2 className="color-black mt-15 mb-25 wow animate__animated animate__fadeIn">Types of junk removal services</h2>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">There are two main types of junk removal services:</p>
                                    <div className="box-button mt-40">
                                        <div className="row">
                                            <div className="col-lg-6 mb-30">
                                                <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Full-Service Junk Removal</h6>
                                                <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">  This involves a team that comes into your home, does all the heavy lifting, and loads your unwanted items onto a truck, where they’re then hauled away.</p>
                                            </div>
                                            <div className="col-lg-6 mb-30">
                                                <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Self-Service Dumpster Rental</h6>
                                                <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">We drop a dumpster at your property, and you fill it yourself. Once it’s full, we return to take it away.</p>
                                            </div>
                                           
<p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"style={{marginTop:'20px',textAlign:'center'}}>In short, junk removal is your go-to for large-scale cleanups and bulky items.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center item-about-2 item-about-2-revert">
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>History</span>
                                    <h2 className="color-black mt-15 mb-25 wow animate__animated animate__fadeIn">The History of Junk Removal</h2>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
Junk removal traces its roots to the evolution of waste management, a practice that has been around since the 18th century. Back then, waste piled up in city streets, posing health risks. In London, organized waste management began as a way to collect and repurpose coal ash for brick-making, eventually leading to sanitation reforms that removed waste from populated areas.

In the United States, as waste production grew, so did the need for efficient disposal strategies. By the 1960s, the U.S. established national waste management policies with the **Solid Waste Disposal Act of 1965**, laying the foundation for modern junk removal. BinBear continues this legacy by offering responsible, eco-friendly junk removal solutions.</p>
                                    <div className="box-button mt-40"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'orange',color:'black',}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-2.png" alt="transp" /></div>
                        </div>
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" /></div>
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Our Partners</span>
                                    <h2 className="color-black mt-15 mb-25 wow animate__animated animate__fadeIn">Landfill Stress in the United States</h2>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">Today, landfills face increasing pressure due to the amount of waste produced. The U.S. generates around 728,000 tons of garbage daily, leading to overcrowded landfills. While modern landfills are designed with safety measures, the growing volume poses environmental concerns, such as greenhouse gas emissions from decomposing waste. BinBear is committed to reducing landfill waste by recycling and donating as much as possible from each junk removal job.
                                    </p>
                               </div>
                            </div>
                        </div>




                        <div className="row align-items-center item-about-2 item-about-2-revert">
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}></span>
                                    <h2 className="color-black mt-15 mb-25 wow animate__animated animate__fadeIn">Recycling and Junk</h2>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">Recycling has become a critical part of waste management, with the U.S. recycling over 30% of its waste. Recycling not only reduces landfill strain but also conserves resources. BinBear supports these efforts by sorting through collected items to recycle or donate usable materials whenever possible.

We recycle a wide range of materials, including paper, cardboard, glass, metal, and certain plastics. To make a meaningful impact, we encourage clients to partner with us for eco-friendly disposal, ensuring that items don’t end up in landfills unnecessarily.


</p>
                                    <div className="box-button mt-40"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'orange',color:'black',}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-2.png" alt="transp" /></div>
                        </div>
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" /></div>
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Our Partners</span>
                                    <h2 className="color-black mt-15 mb-25 wow animate__animated animate__fadeIn">Hazardous Waste and Junk Removal</h2>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn"> While BinBear can handle almost any type of junk, we can’t accept hazardous waste. Hazardous items include anything that’s corrosive, explosive, flammable, or poisonous, like certain chemicals, paints, automotive fluids, and batteries. These materials require special handling and disposal through dedicated facilities to ensure safety and environmental protection.
                                    </p>
                               </div>
                            </div>
                        </div>















                    </div>
                </section>
                <section className="section mt-55  position-relative pt-90 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>History</span>
                               
                                <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">The Junk Removal Process</h3>
                                <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn" style={{marginTop:'20px'}}>At BinBear, we simplify the junk removal process for you:</p>
                                <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                                </p>





                                <ul className="list-how-works">
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Schedule Your Appointment</h5>
                                            <p className="font-md color-grey-700"> Book a time that works for you, either online or over the phone.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Get a Free Estimate</h5>
                                            <p className="font-md color-grey-700">Our team will assess your junk and provide an upfront, no-obligation quote.</p>
                                        </div>
                                    </li>

                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">We Do the Heavy Lifting</h5>
                                            <p className="font-md color-grey-700"> Once you approve the quote, our team will load everything for you.</p>
                                        </div>
                                    </li>


                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Eco-Friendly Disposal</h5>
                                            <p className="font-md color-grey-700">We sort items to recycle or donate as much as possible, reducing waste in landfills.</p>
                                        </div>
                                    </li>



                                    <li className="wow animate__animated animate__fadeIn">
                                        
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Enjoy a Clutter-Free Space</h5>
                                            <p className="font-md color-grey-700">Relax in your newly cleared space, knowing that your junk was handled responsibly.
                                            </p>
                                        </div>
                                    </li>
                                </ul>















                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn"></h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                                        </p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn"></h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="box-image-touch box-image-info-2-2" />
                </section>
               
                <div className="mt-50" />






                <section
  className="section pt-100"
  style={{
    backgroundColor: 'black',
    marginTop: '50px',
    marginBottom: '50px',
  }}
>
  <div className="container">
    <div className="text-center">
      <span
        className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn"
        style={{ backgroundColor: 'orange' }}
      >
        Our Features
      </span>
      <h2 className="color-mb-15 mt-20 wow animate__animated animate__fadeIn" style={{ color: 'white' }}>
        Why Choose BinBear?
      </h2>
    </div>
    <div className="row mt-60">
      <p style={{ color: 'white', marginLeft: '250px' }}>
      BinBear is more than just a junk removal company; we are a partner in your efforts to keep your home and community clean
      </p>
      <p style={{ marginTop: '10px', marginLeft: '150px', color: 'white' }}>
      With full-service removal and self-service dumpster rental options, we provide a flexible solution tailored to your needs Whetheryou’re cleaning out your home  
      </p>
      <p style={{ marginTop: '10px', marginLeft: '50px', color: 'white', textAlign: 'center' }}>
      handling an estate cleanout, or working on a renovation, BinBear offers reliable, professional, and eco-conscious junk removal.
      </p>
      <p style={{ marginTop: '30px', color: 'white', marginLeft: '200px', marginBottom:'10px'}}>
      We help you declutter responsibly—keeping items out of landfills, reducing plastic waste, and contributing to local donation centers whenever possible
      </p>
      <p style={{ marginTop: '2px', color: 'white', marginLeft: '350px' }}>
      BinBear, you’re not just clearing your space; you’re making a positive impact on the planet.

      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '230px' }}>

      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '400px' }}>
      
      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '400px', marginBottom: '100px' }}>
      
      </p>
    </div>
  </div>
</section>

<style jsx>{`
  @media (max-width: 768px) {
    .section {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .row {
      margin-left: 0 !important;  /* Remove left margin */
    }
    p {
      margin-left: 0 !important; /* Remove the large left margins for text */
      margin-right: 0 !important; /* Remove any right margin */
      text-align: center !important; /* Center-align text */
    }
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`}</style>















               
                <section className="section pt-70 pb-70 bg-get-quote">
                    <div className="container">
                        <div className="box-get-quote">
                            <div className="get-quote-left">
                                <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">Ready to reclaim your space? </p>
                                <h4 className="color-brand-1 wow animate__animated animate__fadeIn">BinBear Junk Removal today to get started with your hassle-free junk removal solution.</h4>
                            </div>
                            <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="Booking" style={{ backgroundColor: '#FFA500', textAlign: 'center',
    display: 'block', // Ensures the element behaves like a block for text alignment
    padding: '10px', }}>
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>ContacT us</Link></div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
               
                <div className="section bg- d-block">
                    <div className="container">
                        <div className="box-newsletter"style={{backgroundColor:"black",marginBottom:'70px'}}>
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
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now"style={{backgroundColor:'orange'}} />
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
       
    );
};

export default HistoryPage; // Make sure to export it as default
