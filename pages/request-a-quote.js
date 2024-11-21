import Layout from "@/components/layout/Layout";
import Pricing2 from "@/components/sections/homepage2/Pricing2";
import Project1Slider from "@/components/slider/Project1Slider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Quote() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section box-requestaquote-4"style={{marginBottom:'100px'}}>
                    <div className="box-bg-requestaquote-4" style={{height:'400px'}}/>
                    <div className="container">
                        <div className="text-center mt-100">
                            <h2 className="color-black wow animate__animated animate__fadeIn">Commercial Junk Removal Services by BinBear<br className="d-none d-lg-block" />Service</h2>
                            <div className="box-button mt-30"><Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeIn" href="#"style={{backgroundColor:'orange',color:'black'}}>Calculate Package</Link><a className="btn btn-play popup-youtube hover-up color-brand-2 wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}><img src="/assets/imgs/template/icons/play.svg" alt=""style={{ backgroundColor: 'orange', borderRadius: '50%', padding: '2px' ,color:'black'}} />How it work ?</a></div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                       
                    </div>
                </section>


                <section className="section pt-85">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h6 className="color-black mb-15 wow animate__animated animate__fadeIn">Commercial Junking process</h6>
                                <h2 className="color-black mb-25 wow animate__animated animate__fadeIn">Why Choose BinBear for Commercial Junk Removal?</h2>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.
                                        .</p>
                                    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Boost your sale</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Boost your sale</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature3-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                            <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/trackyourparcel/img-info-7.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                        <div className="info-play wow animate__animated animate__fadeIn">
                                            <h4 className="color-white mb-15">We have 25 years experience in this passion</h4>
                                            <p className="font-sm color-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>







                <section className="section mt-100">
                    <div className="container">
                      
                        <h2 className="color-black mb-20 wow animate__animated animate__fadeIn">We have branches in many<br className="d-none d-lg-block" />regions of the world</h2>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">We has experience in handling the formalities and documentation required for your imports and exports. We work with all international station to guarantee that your load will safely reach without any delays.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote"style={{backgroundColor:'orange'}}>
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Online Booking</Link></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch1.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-black mb-15">Transp Shipping Co. USA</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-black">Address:</strong>123 Main Street, Suite 500, New York, NY 10001, USA</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-black">Phone Number:</strong>+1-555-555-5555</p>
                                        <p className="font-xs color-grey-900"><strong className="color-black">Email:</strong>contact@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch2.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-black mb-15">Shipping Co. Europe</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>25 Avenue des Champs-Élysées, Paris, France</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+33 1 55 73 70 00</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact.eu@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch3.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Shipping Co. Asia Pacific</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>1-2-1 Otemachi, Chiyoda-ku, Tokyo, Japan</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+81 3 5251 5300</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact.jp@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch4.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-black mb-15">Shipping Co. Middle East</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>Dubai Logistics City, Building B, Office 203, Dubai, UAE</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+971 4 887 8000</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-85 bg-worldmap">
                    <div className="container">
                        <div className="text-start"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                            <h2 className="color-black mb-20 wow animate__animated animate__fadeIn">How It Works</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">You choose the cities where you’d like to deliver. All deliveries are within a specific service area and delivery services vary by location. Whatever the mode or requirement, we will find and book the ideal expedited shipping solution to ensure a timely delivery.</p>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage1/how-it-work.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                        <div className="info-play">
                                            <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">We have 25 years experience in this passion</h4>
                                            <p className="font-sm color-white wow animate__animated animate__fadeIn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <ul className="list-how-works">
                                    <li>
                                        <div className="image-how"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/order.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Customer places order</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Inspection and quality check of goods</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Payment successful</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Payoneer, Paypal, or Visa master card</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Recycle Services</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">make the accuracy of the goods.</p>
                                        </div>
                                    </li>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Dumpster Rentals</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Update order status on the system</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

               

                <div className="line-border" />
                <section className="section pb-5 pt-110">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Have Done</h2>
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Check out some of the projects we've completed with our amazing partners</p>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="#"style={{backgroundColor:'orange'}}>
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
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" style={{backgroundColor:'orange'}}/>
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