import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Services1() {
    return (
        <>










<section className="section mt-10">
    <div className="container">







    <section className="section mt-20">

    
                    <div className="row align-items-end">
                    <div className="col-lg-8 col-md-8 mb-0">
                        <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                        </p>
                        
    <h3 className="  wow animate__animated animate__fadeIn" >3 Quick Steps to Get Started:</h3>
                        </div>

                        
           

                       




                        <div className="col-lg-4 col-md-4 mb-0 text-md-end text-start"style={{paddingRight:'30px'}}><Link className="btn btn-brand-1 hover-up" href="/Booking"style={{backgroundColor:'orange'}}>
                            <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                </path>
                            </svg>Get quotes</Link></div>
                    </div>

                <div className="container">
                <h3 className="color-black wow animate__animated animate__fadeIn"style={{marginBottom:'40px',marginLeft:'450px'}}><br className="d-none d-lg-block" /></h3>
                           




                <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >

                <SwiperSlide className="wow animate__animated animate__fadeIn"style={{marginLeft:'200px'}}>
                    <div className="cardGrid">
                        <div className="cardImage"> <img src="/assets/imgs/page/blog-single/step1.png" alt="transp" /></div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">1. Click Book Online</h5>
                            <p className="font-xs color-grey-500">Click book online & provide us with your informations</p>
                            <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage"> <img src="/assets/imgs/page/blog-single/step2.png" alt="transp" /></div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">2. Use Our Calculator</h5>
                            <p className="font-xs color-grey-500">Use our proprietary calculator to choose your items</p>
                            <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="cardGrid">
                        <div className="cardImage"style={{height:'240px'}}> <img src="/assets/imgs/page/blog-single/step3.png" alt="transp" /></div>
                        <div className="cardInfo">
                            <h5 className="color-brand-2 mb-10">3. Choose a Date for Pickup</h5>
                            <p className="font-xs color-grey-500">Choose a Date for Pickup</p>
                            <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
           






































                    <div className="row align-items-end">
                        <div className="">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                             </p>


                             <p 
style={{marginTop:'10px'}}
>

</p>



<p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
 
  
  
</p>
<p
  style={{
    marginLeft:'0px',
      marginTop:'10px',
    fontSize: 'clamp(14px, 2.5vw, 8px)',
    maxWidth: '90%',
    lineHeight: '1.6',
  }}
>

</p>




                               </div>
                        
                    </div>
                    <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        
                           
                          
                          

                        
                    </div>
                </div>
            </section>
      












        <div className="row align-items-center">
          
               
               

                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{marginBottom:'20px',marginTop:"20px",marginLeft:"200px"}}>
                   That's It! You'll receive a text on service day to confirm.
                </p>
                <p className=" " style={{marginBottom:'0px',marginTop:"0px",fontSize:"13px",color:'red',marginLeft:'200px'}}>
            Disclaimer: If you load differs greatly from the information you provided, your price of service may increase by 10%-20%
                </p>
            </div>
           
          
        
    </div>
</section>












            <section className="section mt-100">
                <div className="container">
                <h3 className="color-black wow animate__animated animate__fadeIn">We don't Say We are Different<br className="d-none d-lg-block" />We Show You!</h3>
                           
                    <div className="row align-items-end">
                        <div className="">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                             </p>


                             <p 
style={{marginTop:'10px'}}
>

</p>



<p className="font-md color-gray-700 wow animate__animated animate__fadeIn"
  style={{marginTop:'30px'}}
>
 At BinBear, we take pride in offering top-tier customer service while ensuring consistent,high-quality results.Our missions is not just to remove Junk,
but to make a positive impact on our environment.We do this by prioritizing recycle and donations,we strive to divert as much waste as possible from
landfills.With trusted relationship with local landfills,we work hard to recycle a significant portion of every job, aiming for 50% of all recycle eligible
   trash.At BinBear,We belive in making the junk removal process simple eficient and eco-conscious, all while delivering a service that make you feel valued every steps of the way</p><p
 style={{marginTop:'10px'}} 
>
  
  
</p>
<p
  style={{
    marginLeft:'0px',
      marginTop:'10px',
    fontSize: 'clamp(14px, 2.5vw, 8px)',
    maxWidth: '90%',
    lineHeight: '1.6',
  }}
>

</p>




                               </div>
                        
                    </div>
                    <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up">
                                   
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>#1 Junk removal company in Texas </h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30 "style={{marginTop:'80px'}}><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{borderRadius:"50px",}} />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Lowest  Price  Guaranteed! </h5>
                                        <h5 className="color- "style={{color:'black'}}> 100% Price Matching</h5>
                                     
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"style={{marginTop:'65px'}}><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp"style={{width:'120px'}} />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black',}}>UnBearable junk problems solved at an unBEARlievable Value!</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"style={{marginTop:'50px'}}><a className="btn btn-link font-sm color-"style={{color:'black'}}>View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>


                           
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/forklift.png" alt="transp" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Click!Schedule We Pickup It's Easy as 1, 2, 3!</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-40"style={{marginTop:'100px'}}><a className="btn btn-link font-sm color-brand-2">view Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/train.png" alt="transp" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Free quotes & you'll never have to someone , When Booking Online</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-30"style={{marginTop:'80px'}}><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/worldwide.png  "alt="transp" /></div>
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'black'}}>Choose BinBear and do your part by saving the planet 1 load at a time!</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                        <div className="box-button-offer mb-30" style={{marginTop:'80px'}}><a className="btn btn-link font-sm color-brand-2">View Details<span>
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
        </>
    )
}
