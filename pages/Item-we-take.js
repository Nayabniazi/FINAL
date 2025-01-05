import Layout from "@/components/layout/Layout"

import Link from "next/link"
export default function ServiceDetail() {

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 box-pageheader-services text-center"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange',color:'black'}}>Our Services</span>
                       
                            <h2 className="color- mt-15 mb-10 wow animate__animated animate__fadeIn"style={{color:'black'}}> Items We Take</h2>
                          
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">At BinBear, we can handle just about ANYTHING and EVERYTHING—except hazardous waste Here are examples of the types of junk we haul away:<br className="d-none d-lg-block" /> </p>
                           




                            <div className="d-flex align-items-center justify-content-center">
  <div className="col-lg-6 mb-60">
    <div className="wow animate__animated animate__fadeIn">
      <img src="/assets/imgs/page/service-detail/img4.png" alt="transp"style={{marginTop:'20px',width:'500px'}} />
    </div>
  </div>
  <div className="col-lg-6 mb-60">
    <div className="wow animate__animated animate__fadeIn">
      <img src="/assets/imgs/page/service-detail/wetake.png" alt="transp2" style={{width:'400px',marginTop:'20px'}} />
    </div>
  </div>
</div>








                        </div>
                    </div>
                </section>
                
                        

                









                      
   
       

                <div className="mt-20 box-background-black">
    <div className="bg-under" />
    <div className="row"style={{marginLeft:"30px",marginRight:"20px"}}>
        {[
            { title: "Furniture Removal" },
            { title: "TV Disposal & Recycling" },
            { title: "Yard Waste Removal" },
            { title: "Foreclosure Cleanouts" },
            { title: "Tire Disposal" },
            { title: "Appliance Removal" },
            { title: "Hot Tub Disposal" },
            { title: "E-Waste Disposal" },
            { title: "Trash Removal" },
            { title: "Mattress Disposal" },
            { title: "Refrigerator Disposal & Recycling" },
            { title: "Construction Waste Removal" },
            { title: "Garbage Removal" },
            { title: "Shed Removal" },
        ].map((service, index) => (
            <div
                key={index}
                className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn"
            >
                <div
                    className="card-offer hover-up"
                    style={{
                        backgroundColor: "orange",
                        borderBottom: "4px solid black",
                    }}
                >
                    <div className="card-info">
                        <h5
                            className="color- mb-15"
                            style={{ color: "black" }}
                        >
                            {service.title}
                        </h5>
                        <p className="font-sm color-grey-900 mb-35"></p>
                        <div className="box-button-offer mb-30">
                            <a
                                className="btn btn-link font-sm color-"
                                style={{ color: "black" }}
                            >
                                View Details
                                <span>
                                    <svg
                                        className="w-6 h-6 icon-16"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>




            <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail"><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn"><h3>Enjoy a Clutter-Free Life with BinBear Junk Removal!**</h3></strong>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">    Is clutter piling up in your home? Want to reclaim your space? Searching for a reliable junk removal service you can trust? You're not alone! Many homeowners struggle with these same challenges, and BinBear is here to help.
                            </p>
                            <p className="wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img3.png" alt="transp" /></p>
                            <p className="wow animate__animated animate__fadeIn"></p>
                            <h3>We Haul It All</h3>
                            <h5>Furniture Removal, Disposal, Recycling, or Donation</h5>
                            <p className="wow animate__animated animate__fadeIn">Examples: Couches, sofas, beds, chairs, tables, desks, and more.
  - Need to get rid of old furniture that’s too bulky to handle on your own? BinBear can take care of it, ensuring items are disposed of responsibly, whether through recycling or donation to local charities.
 </p>
 <h5>TV Disposal & Recycling</h5>
 <p>Old televisions and monitors piling up? We’ll handle it all, from CRTs to flat screens, recycling or disposing of them responsibly.</p>
                           
                           <h5>Yard Waste Removal</h5>
                        
                           <p>
                           - Got yard debris like branches, clippings, or stumps? We take care of waste from landscaping projects, including old fencing, firewood, and lumber.

                           </p>
                           <h5>
                           Clean Out Services** (Foreclosure, Estate, Home, Garage Cleanouts)
                           </h5>
                           
                        <p>
                        Moving out, managing an estate, or dealing with property cleanouts? We handle it all efficiently and courteously.

                        </p>
                         <h5>Appliance Removal</h5>

<p>
Examples: Air conditioners, dishwashers, fridges, washing machines, stoves, water heaters, and more. Don’t worry about the heavy lifting—BinBear has it covered.
 
</p>
<h5>Hot Tub Disposal</h5>
<p>
Dismantling and removing hot tubs is hard work, but we’ll break it down and haul it away for you.
 
</p>
<h5>E-Waste Disposal, Removal, or Recycling</h5>
<p>
Computers, printers, shredders, and more. We ensure electronic waste is handled in an eco-friendly manner.
</p>
<h5>
Mattress Disposal, Removal, Donation, or Recycling  
</h5>
<p>
Old mattresses gathering dust? Let BinBear remove and responsibly recycle or donate them
</p>
<h5>
Trash Removal
</h5>
<p>
Whether you need a one-time trash removal or ongoing cleanup, BinBear provides fast, friendly service with a focus on recycling wherever possible.
</p>
                           
    

<div className="col-lg-6 mb-30">











                                    



</div></div>




<section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn"style={{marginBottom:'30px'}}>What BinBear Can’t Take</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginBottom:'20px'}}>While we handle almost anything, we do not collect hazardous waste, including:
                                </p>
                                
                                <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">1:Paints and solvents</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">2:Pesticides and fertilizers</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn"> 3:Chemical cleaners
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">4:Lead-acid and lithium-ion batteries
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>

                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">5:Flammable liquids</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">6:Ammunition and explosives</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> </p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn"> 7:Medical waste
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className=" font-md-bold color-grey-700 wow animate__animated animate__fadeIn">8:Materials containing asbestos or mercury
                                            </h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"></p>
                                        </div>




                                    </div>

                                   


                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>
                               
                               </div>
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></Link></div>
                        </div>
                        



                    
                        </div>
                        </section>























</div>

</section>                     






                
                   











               
               

              
                <div className="line-border" />
                <section className="section pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center"><img className="mb-15 wow animate__animated animate__fadeIn" src="/img/bear.png.png"style={{height:'60px'}} alt="transp" />
                            <h2 className="color-mb-15 wow animate__animated animate__fadeIn"style={{color:'black'}}>How Our Service Works</h2>
                            <p className="font-md color-grey-700 mb-35 wow animate__animated animate__fadeIn"style={{marginTop:'30px'}}>Let me know if there’s anything specific you’d like to add or change! <br className="d-none d-lg-block" /><br className="d-none d-lg-block" /></p>
                        </div>
                        <div className="box-slider-homepage2 box-slider-homepage-4 box-slider-service-4">
                            <div className="container">
                                <div className="box-swiper">



                                <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
                                   
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Book Your Appointment</h5>
                                        <p className="font-sm color-grey-900 mb-35">Get a price,Use our proprietary junk cost calculator to determine your services Charge.
                                        </p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Schedule Pickup</h5>
                                        <p className="font-sm color-grey-900 mb-35">Choose a date and time that best suite your availablility for junk pickup.</p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Leave the Heavy Lifting to Us</h5>
                                        <p className="font-sm color-grey-900 mb-35">
   Just point out what you want gone, and we’ll handle the rest, from lifting to loading.
 </p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Eco-Friendly Disposal</h5>
                                        <p className="font-sm color-grey-900 mb-35">BinBear is committed to green practices. We sort through items to recycle or donate wherever possible, ensuring minimal landfill impact.
                                        </p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Enjoy Your Clutter-Free Space</h5>
                                        <p className="font-sm color-grey-900 mb-35">With BinBear, reclaim your space without the hassle. You’ll feel good knowing your items were disposed of responsibly</p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Full-Service Junk Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35">Our team will arrive on time in our big Black trucks. We’ll confirm your estimate and take care of your junk on the spot.
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
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section pt-70 pb-70 bg-get-quote"style={{marginBottom:'30px'}}>
                    <div className="container">
                        <div className="box-get-quote">
                            <div className="get-quote-left">
                                <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">Get Started Today! </p>
                                <h5 className="color-brand-1 wow animate__animated animate__fadeIn">Ready to reclaim your space? Schedule your junk removal with BinBear today! Call us or book online for a hassle-free experience and enjoy a cleaner, clutter-free home.</h5>
                            </div>
                            <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="Booking" style={{ backgroundColor: '#FFA500', textAlign: 'center',
    display: 'block', // Ensures the element behaves like a block for text alignment
    padding: '10px', }}>
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Contact us</Link></div>
                        </div>
                    </div>
                </section>






                <div className="section bg-orange d-block">
                    <div className="container">
                        <div className="box-newsletter"style={{backgroundColor:'black',marginBottom:'70px'}}>
                            <h3 className="color- mb-20 wow animate__animated animate__fadeIn"style={{color:'white'}}>Get in Touch</h3>
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
                                                    <input className="btn btn-brand-1-big" type="button" defaultValue="Submit" href="Booking" style={{backgroundColor:'orange',color:'black'}} />
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