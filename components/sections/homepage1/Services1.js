import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Services1() {
    return (
        <>




<section className="section mt-100">
                <div className="container">
                    <h3 className=" mb-20 wow animate__animated animate__fadeIn">3 Quick Steps to Get Started:</h3>
                    
                    <div className="row align-items-end">
                   
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">That's It! You'll receive a text on service day to confirm.</p>
                           
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'orange'}}>
                       
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Get a quote</Link></div>
                    </div>
              



                    <div className="container">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination-banner',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage">
                                <img src="/assets/imgs/page/blog-single/step1.png" alt="transp"style={{height:'200px'}} />
                            </div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">1. Click Book Online</h5>
                                <p className="font-xs color-grey-500">Click book online & provide us with your information</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage">
                                <img src="/assets/imgs/page/blog-single/step2.png" alt="transp"style={{height:'200px'}} />
                            </div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">2. Use Our Calculator </h5>
                                <p className="font-xs color-grey-500">Use our proprietary calculator to choose your items</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage" >
                                <img src="/assets/imgs/page/blog-single/step3.png" alt="transp"style={{height:'200px'}} />
                            </div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">3. Choose a Date for Pickup</h5>
                                <p className="font-xs color-grey-500"> Choose a Date for Pickup</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="row align-items-end">
                    <p
                        className="font-md color-grey-700 wow animate__animated animate__fadeIn"
                        style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}
                    >
                       
                    </p>
                    <p
                        className=""
                        style={{ marginBottom: '0px', marginTop: '0px', fontSize: '13px', color: 'red', textAlign: '' }}
                    >
                        Disclaimer: If your load differs greatly from the information you provided, your price of service may
                        increase by 10%-20%
                    </p>
                </div>
                
            </div>















                  </div>  
             
         



    

    

</section>






        <div className="row align-items-center">
          
               
               

                </div>
           
          
        
    










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



<p className="font-sm color-grey-900 mb-35"
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
                                   
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/planey.png" alt="transp" />
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
                                    
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-shipy.png" alt="transp"style={{borderRadius:"50px",}} />
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
                                    
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/deliveryy.png" alt="transp"style={{width:'120px'}} />
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
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/forklifty.png" alt="transp" />
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
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/worldwidey.png  "alt="transp" /></div>
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
