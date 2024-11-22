import Layout from "@/components/layout/Layout"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import Project1Slider from "@/components/slider/Project1Slider"
import Link from "next/link"
export default function WorkProcess() {

    return (
        <>
            <Layout>
                <section className="section d-block position-relative">
                    <div className="banner-howitwork3">
                        <div className="container">
                            <div className="box-info-trackyourparcel"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                                <h2 className="color-mb-25 wow animate__animated animate__fadeIn"style={{color:'black'}}>BinBear Full-Service Junk Removal: Texas’ #1 Junk Company</h2>
                                <p className="color-grey-700 font-md wow animate__animated animate__fadeIn">At BinBear Junk Removal, we pride ourselves on being the top-rated junk removal service in in the state. .</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-110">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage1/how-it-work.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                        <div className="info-play wow animate__animated animate__fadeIn">
                                            <h4 className="color-white mb-15">We have 25 years experience in this passion</h4>
                                            <p className="font-sm color-white">Our team provides a professional level of service that’s unmatched in the industry. We’re so confident in our service that we guarantee to meet or beat any written estimate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <ul className="list-how-works">
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Fast Friendly Service</h5>
                                            <p className="font-md color-grey-700">Inspection and quality check of goods</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Free, Upfront Estimates</h5>
                                            <p className="font-md color-grey-700">Inpect freely with upfront estimations</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Pay Only for the Space You Use</h5>
                                            <p className="font-md color-grey-700">make the accuracy of the goods.</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">We Handle All the Heavy Lifting</h5>
                                            <p className="font-md color-grey-700">Update order status on the system</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-80">
                    <div className="container">
                        <div className="text-center"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                            <h2 className="color-black mb-25 wow animate__animated animate__fadeIn">Our Process</h2>
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <p className="color-grey-700 font-md wow animate__animated animate__fadeIn"> From garage cleanouts to major construction debris removal, BinBear handles jobs of every size. When you choose us, you can expect friendly, professional service aimed at making your life easier with fast, reliable junk removal..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn">What is Junk Removal?</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Junk removal is an on-demand service for disposing of nearly any type of waste from your home or business. BinBear hauls away large items like furniture and appliances, handles full home cleanouts, provides light demolition in many areas, and clears construction debris from real estate cleanouts. Whether it’s an old couch or piles of post-renovation debris, BinBear can take it (just no hazardous waste)..</p>
                                <div className="mt-20"><Link className="btn btn-link font-sm color-black wow animate__animated animate__fadeIn" href="#">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link></div>
                            </div>
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn"> BinBear’s Approach to Junk Removal</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">At BinBear, we emphasize friendly service and a commitment to eco-friendly practices. Our goal is to recycle or donate as much as possible, reducing waste and helping our community. We operate with local sorting facilities, aiming to recycle 60% or more of every job!</p>
                                <div className="mt-20 wow animate__animated animate__fadeIn"><Link className="btn btn-link font-sm color-black" href="#">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link></div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/plane.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn">What Makes BinBear Different</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">BinBear has earned its #1 rating by offering exceptional customer service. Our team of friendly professionals is trained, uniformed, licensed, and insured, equipped with vehicles built for efficient junk removal. You’ll notice the BinBear difference as our crew handles everything with care and courtesy..</p>
                                <div className="mt-20"><Link className="btn btn-link font-sm color-brand-2 wow animate__animated animate__fadeIn" href="#">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link></div>
                            </div>
                            <div className="col-lg-6 mb-60 wow animate__animated animate__fadeIn"><Link href="#"><img src="/assets/imgs/page/workprocess/img3.png" alt="transp" /></Link></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60 wow animate__animated animate__fadeIn"><Link href="#"><img src="/assets/imgs/page/workprocess/img4.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/cardboard.png" alt="transp" />
                                <h3 className="color-black mb-15 wow animate__animated animate__fadeIn">Our Simple Junk Removal Process</h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">From the moment you contact us, BinBear makes junk removal easy. We offer fair, upfront pricing—no hidden fees, no surprises. About 15-30 minutes before your appointment, we call to confirm our arrival. Once we’re on-site, just show us what needs to go, and our insured team will handle it all, respecting your property every step of the way..</p>
                                <div className="mt-20 wow animate__animated animate__fadeIn"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="line-border mt-50" />

               
                <section className="section bg-what-done pb-95 pt-110">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Have Done</h2>
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Check out some of the projects we've completed with our amazing partners</p>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="#"style={{backgroundColor:'orange'}}>
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>View All Projects</Link></div>
                        </div>
                        <div className="mt-35">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-4 pb-50">
                                    <Project1Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-110 pb-110">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                        <div className="item-reason wow animate__animated animate__fadeIn">
                                            <div className="card-offer cardServiceStyle3 hover-up">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                                                <div className="card-info">
                                                    <h5 className="color-black mb-15">Fair and Transparent Pricing</h5>
                                                    <p className="font-sm color-grey-900">BinBear offers clear pricing with no hidden fees, ensuring you know exactly what to expect..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-reason wow animate__animated animate__fadeIn">
                                            <div className="card-offer cardServiceStyle3 hover-up">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                                                <div className="card-info">
                                                    <h5 className="color-black mb-15">Eco-Friendly Practices</h5>
                                                    <p className="font-sm color-grey-900">We’re committed to green practices, recycling materials whenever possible to minimize landfill waste.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-12 col-md-6">
                                        <div className="item-reason mt-30 wow animate__animated animate__fadeIn">
                                            <div className="card-offer cardServiceStyle3 hover-up">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage4/stopwatch.png" alt="transp" /></div>
                                                <div className="card-info">
                                                    <h5 className="color-black mb-15">Professional, Insured Team</h5>
                                                    <p className="font-sm color-grey-900">Our experienced crew is licensed, insured, and equipped to handle any job safely and efficiently..</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-reason wow animate__animated animate__fadeIn">
                                            <div className="card-offer cardServiceStyle3 hover-up">
                                                <div className="card-image"><img src="/assets/imgs/page/homepage4/pallet.png" alt="transp" /></div>
                                                <div className="card-info">
                                                    <h5 className="color-black mb-15">Tracking Systems</h5>
                                                    <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-info-pround box-whychooseus-3"><span className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Our Features</span>
                                    <h2 className="color-black mb-15 mt-20 wow animate__animated animate__fadeIn">Why Choose BinBear?</h2>
                                    <p className="font-md color-grey-900">Sustainability is an increasingly important factor for many customers when choosing a shipping company. Your shipping company can stand out by demonstrating a commitment to sustainable practices, such as using energy-efficient vehicles, reducing waste, and offsetting carbon emissions.</p>
                                    <div className="mt-30">
                                        <ul className="list-ticks">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Air Conditioner Disposal
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>DIY Construction Debris
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Yard Waste Removal
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>E-Waste Recycling
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>  Refrigerator and Freezer Disposal                                          </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Furniture Removal
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Flexibility and Customization
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Insurance and Liability Coverage
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-30 text-start"><Link className="btn btn-black mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{color:'black'}}>Contact Us</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now"style={{backgroundColor:'orange',color:'black'}} />
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