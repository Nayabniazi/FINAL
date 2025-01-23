import Layout from "@/components/layout/Layout";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Quote() {




    const [clickedCardIndex, setClickedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      // Set the clicked card index or reset if clicked again
      setClickedCardIndex(clickedCardIndex === index ? null : index);
    };
  



    const cards = [
        {
          title: "Office Junk Removal",
          backgroundColor:'red',
          description:
            "When office furniture becomes obsolete, removing it can be more than most people want to handle alone. BinBear offers efficient, eco-friendly office furniture removal to keep your workspace clear and organized. We’ll even ensure that usable items are donated, and the rest is recycled responsibly.",
          image: "/assets/imgs/page/contact/branch1.png",
          icon: "/assets/imgs/page/homepage1/truck.png",
        },
        {
          title: "Commercial Equipment Removal",
          description:
            "Old equipment can be difficult to dispose of, especially when dealing with large, heavy, or unwieldy items. Outsourcing equipment removal to BinBear is often the most cost-effective choice, freeing up your team to focus on their work while we handle the disposal..",
          image: "/assets/imgs/page/contact/branch2.png",
          icon: "/assets/imgs/page/homepage1/truck.png",
        },
        {
          title: "Commercial Scrap Pick-Up",
          description:
            "Disposing of scrap metal like iron, copper, aluminum, or construction metal can be challenging. BinBear will safely pick up and recycle your scrap metal, keeping your workplace clutter-free and environmentally friendly.",
          image: "/assets/imgs/page/contact/branch3.png",
          icon: "/assets/imgs/page/homepage1/truck.png",
        },
        {
          title: "Property Management Clean-Out",
          description:
            "Rental properties often require cleanouts between tenants. BinBear’s property management junk removal service helps property managers quickly clear out abandoned junk, minimizing downtime and getting your property ready for the next occupant..",
          image: "/assets/imgs/page/contact/branch4.png",
          icon: "/assets/imgs/page/homepage1/truck.png",
        },
       
        {
            title: "Foreclosure Clean-Out",
            description:
              "Foreclosed properties are often left with junk that needs to be cleared before they can be sold. BinBear’s team can handle all the heavy lifting and disposal, making the property market-ready in no time.",

            image: "/assets/imgs/page/contact/branch4.png",
            icon: "/assets/imgs/page/homepage1/truck.png",
          },
         
          {
            title: "Storage Facility Clean-Out",
            description:
              "When storage units are abandoned or left filled with junk, BinBear helps facility managers clear out these units quickly and efficiently, ensuring they’re ready for new tenants.",
            image: "/assets/imgs/page/contact/branch4.png",
            icon: "/assets/imgs/page/homepage1/truck.png",
          },
          {
            title: "Construction Debris Removal",
            description:
              "Managing construction debris can be a time-consuming task. BinBear offers hassle-free construction debris removal, giving contractors and project managers peace of mind that their waste is being handled responsibly.",

            image: "/assets/imgs/page/contact/branch4.png",
            icon: "/assets/imgs/page/homepage1/truck.png",
          },
         

       
      ];
    
     



   
    return (
        <>
            <Layout>




















                <section className="section box-requestaquote-4"style={{marginBottom:'100px'}}>
                    <div className="box-bg-requestaquote-4" style={{height:'400px'}}/>
                    <div className="container">
                        <div className="text-center mt-100">
                            <h2 className="color-black wow animate__animated animate__fadeIn">Commercial Junk Removal Services by BinBear<br className="d-none d-lg-block" /></h2>
                            <div className="box-button mt-30"><Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'orange',color:'black',marginLeft:'17px'}}>Book Now</Link>    </div>
                       </div>
                    </div>
                </section>





                <section className="section pt-85">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h6 className="color- mb-15 wow animate__animated animate__fadeIn"></h6>
                                <h2 className="color-mb-25 wow animate__animated animate__fadeIn"style={{color:'black',marginBottom:'30PX'}}>Commercial Junk Removal Process</h2>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.</p>
                                    </div>

                                    <div className="col-lg-9"style={{marginTop:'20px'}}>
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Whether you’re dealing with outdated office furniture, discarded electronics, or leftover construction materials, we have the expertise and equipment to handle it all. Trust BinBear, North America’s top choice for commercial junk removal.</p>
                                    </div>

                                </div>
                                <h5 style={{marginTop:'30px'}}>Why Choose BinBear for Commercial Junk Removal?</h5>
                                <div className="row mt-50">
                                <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Top-Rated Service</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Our commitment to reliability and professionalism ensures exceptional value for your business.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Flexible Payment Plans</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> BinBear offers business accounts with convenient payment options.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Fully Insured</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">You’re protected, and so are we, as our team performs junk removal on your property.</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/trackyourparcel/img-info-7.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                          <div className="info-play wow animate__animated animate__fadeIn"style={{backgroundColor:"black"}}>
                                            <h4 className="color-white mb-15">We have 8 years passion and reputation</h4>
                                            <p className="font-sm color-white">What started as small,locally owned junk hauling business has quickly grown into a trusted name in our community </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>












                <section className="section mt-100">
      <div className="container">
        <h2 className="color-black mb-20 wow animate__animated animate__fadeIn">
          Types of Commercial Junk Removal Services
        </h2>
        <div className="row mt-50">
          {cards.map((card, index) => (
            <div className="col-xl-3 col-md-6 mb-50" key={index}>
              <div
                className={`cardService ${
                  clickedCardIndex === index ? "clicked" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="cardImage wow animate__animated animate__fadeIn ">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="cardInfo wow animate__animated animate__fadeIn">
                  <img src={card.icon} alt={card.title} />
                  <h6 className="color-black mb-15 ">{card.title}</h6>
                  <p className="font-xs color-grey-900">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>


    <style jsx>{`
    
    .cardService {
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: white; /* Default background */
  color: inherit; /* Default content color */
}

.cardService .cardInfo {
height:300px;
  color:white;
}

.cardService:hover {
   /* Change background on hover */
}
.cardInfo:hover{
background-color:black;}
.cardService:hover .cardInfo h6,
.cardService:hover .cardInfo p,
.cardService:hover .cardInfo img {

  color: orange; /* Change content color on hover */
}

.cardService:hover .cardInfo img {
 
  /* Optional: Adjust icon color */
}

    
    
    `}</style>






                <section className="section pt-85 bg-worldmap">
                    <div className="container">
                        <div className="text-start">
                            <h2 className="color-black mb-20 wow animate__animated animate__fadeIn">Benefits of Outsourcing Your Commercial </h2>
                            <h2 className="color-black mb- wow animate__animated animate__fadeIn" style={{marginBottom:'40px'}}>Junk Removal to BinBear</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"></p>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage1/how-it-work.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"></div>
                                        <div className="info-play">
                                            <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">We have 8 years passion and reputation</h4>
                                            <p className="font-sm color-white wow animate__animated animate__fadeIn">What started as small,locally owned junk hauling business has quickly grown into a trusted name in our community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <ul className="list-how-works">
                                    <li>
                                        <div className="image-how"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Peace  of Mind</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Professional Environment</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Clear out excess equipment and furniture, improving the safety and appearance of your workspace.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" style={{height:'35px'}}/></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Convenience</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Free up time by letting BinBear handle all your junk removal needs..</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Cost Savings</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                                        </div>
                                    </li>


                                    
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Health and Safety</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our team is equipped to handle heavy and bulky items safely, minimizing risks for your staff.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

               

                <div className="line-border" />
                <section className="section mt-50"/>
                   
                <div className="container">


                <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn">BinBear: A Green Approach to Commercial Junk Removal </h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> BinBear is committed to eco-friendly practices, leading the way with recycling-based junk removal. We sort each load to separate metals, electronics, paper, and more, aiming to recycle or repurpose as much as possible. Usable items are donated to local charities, helping reduce landfill waste while benefiting the community.</p>
                              
                           
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}> </p>      
                                <div className="mt-20 wow animate__animated animate__fadeIn"><Link className="btn btn-link font-sm color-black" href="#">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link></div>
                            </div>
                        </div>





                        <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn"style={{marginBottom:'30px'}}>Ready for Commercial Junk Removal?</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginBottom:'20px'}}>Getting started with BinBear is easy. Just follow these steps:</p>
                                <ul className="list-how-works">
                                <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Schedule Your Appointment</h5>
                                            <p className="font-md color-grey-700">Book online or call us to set up a time that works for you.</p>
                                        </div>
                                    </li>

                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Get a Free Estimate</h5>
                                            <p className="font-md color-grey-700">Our team will arrive on time, assess the volume of junk, and provide an upfront estimate.</p>
                                        </div>
                                    </li>


                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Sit Back and Relax</h5>
                                            <p className="font-md color-grey-700">We handle all the heavy lifting, loading, and hauling, so you can focus on what you do best</p>
                                        </div>
                                    </li>

</ul>


<p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}} >Our professional team is insured and dedicated to providing top-notch service with no hidden fees. Whether it’s old office furniture, construction debris, or unwanted electronics, BinBear has you covered.</p>



                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>
                               
                               </div>
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        </div>
                        



                    
                        </div>
                        </section>





                                   
                       </div>
                   




                <section className="section mt-100">
                <div className="container">
                    <h2 className=" mb-20 wow animate__animated animate__fadeIn"style={{color:'black',}} >Our Comprehensive Junk Removal Services</h2>
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                               </p>
                               <p className="font-md color-gray-700 wow animate__animated animate__fadeIn"style={{marginTop:'10px'}}>In addition to commercial junk removal, BinBear specializes in:</p>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Television Disposal & Recycling</h5>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Yard Waste Removal</h5>
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
                                        <h5 className="color- mb-15"style={{color:'black'}}>Hot Tub Removal</h5>
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

                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                   
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Refrigerator Disposal & Recycling</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-0"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                  
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>E-Waste Disposal</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn"style={{marginBottom:'70px'}}>
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>General Garbage Removal</h5>
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

            <section className="section pt-70 pb-70 bg-"style={{backgroundColor:'black',marginBottom:'50px'}}>
           
           <div className="container">
               <div className="box-get-quote">
                   <div className="get-quote-left">
                       <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">When you think Junk, think BinBear!
                           </p>
                       <h3 className="color-brand-1 wow animate__animated animate__fadeIn"> With a few quick clicks, your waste is our commands!
                       </h3>
                   </div>
                   <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/register" style={{ backgroundColor: '#FFA500', textAlign: 'center',
display: 'block', // Ensures the element behaves like a block for text alignment
padding: '10px', }}>
                       <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                           </path>
                       </svg>Contact us</Link></div>
               </div>
           </div>
       </section>


                <div className="mt-50" />




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
  <a
    href="/Booking"
    className="btn btn-brand-1-big"
    style={{ backgroundColor: 'orange', color: 'black', textDecoration: 'none', padding: '18px 20px', display: 'inline-block', textAlign: 'center',width:'100px',height:'50px' }}
  >
    Submit
  </a>
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
                                                    <p className="font-sm color-white">Headquarters in Frisco,Texas</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Email</h6>
                                                    <p className="font-sm color-white">contact@binbears.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Telephone</h6>
                                                    <p className="font-sm color-white">214 901 4769</p>
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