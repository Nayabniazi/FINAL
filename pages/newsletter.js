import Layout from "@/components/layout/Layout";
import Pricing1 from "@/components/sections/homepage1/Pricing1";
import Pricing2 from "@/components/sections/homepage2/Pricing2";
import NewsletterSlider from "@/components/slider/NewsletterSlider";
import Link from "next/link";
export default function Newsletter() {
    return (
        <>
            <Layout headerStyle="newsletter" footerStyle="newsletter">
                <section className="section d-block newsletter-style">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-1 swiper-banner-1">
                            <NewsletterSlider />
                        </div>
                    </div>
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">What We Offer</h4>
                        <div className="row CardServiceStyleNewsletter">
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Sea Forwarding</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                  
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Air Freight Forwarding</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Land Transportation</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 newsletter-style">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-sm-6 mb-30">
                                <div className="box-images-pround-newsletter">
                                    <div className="box-images"> <img className="img-main" src="/assets/imgs/page/homepage1/img1.png" alt="transp" />
                                        <div className="image-2 shape-3"> <img src="/assets/imgs/page/homepage1/icon1.png" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-sm-6 mb-30">
                                <div className="box-info-pround-newsletter">
                                   
                                    <h6 className="font-md-bold color-brand-2 mb-10">Fast shipping with the most modern technology</h6>
                                    <p className="font-xs color-grey-500">Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li className="font-xxs">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Track time spent
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-30 text-start d-flex"> <Link className="hover-up mr-10" href="#"> <img src="/assets/imgs/template/appstore-btn.png" alt="transp" /></Link><Link className="hover-up" href="#"> <img src="/assets/imgs/template/google-play-btn.png" alt="transp" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Why Choose Us</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/container.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Over 1200 couriers</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/24-hours.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Automatic courier</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/stopwatch.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Real-time alert</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/pallet.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Email alerts</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-55 bg- position-relative newsletter-style block-info-3"style={{backgroundColor:'red',}}>
                    <div className="container-sub position-relative">
                        <div className="row">
                            <div className="col-sm-6 pt-25 pb-25"> <span className="btn btn-tag"style={{backgroundColor:'orange'}}>Get in touch</span>
                                <h6 className="color-brand-2 font-16-bold mb-15 mt-10">Proud to Deliver <br className="d-none d-lg-block" />Excellence Every Time</h6>
                                <p className="font-xxs color-grey-900 mb-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="row">
                                    <div className="col-lg-6 mb-20">
                                        <h6 className="chart-title font-xxs-bold color-grey-900">Boost your sale</h6>
                                        <p className="font-xxs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-20">
                                        <h6 className="feature-title font-xxs-bold color-grey-900">Introducing New Features</h6>
                                        <p className="font-xxs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="mt-0"> <Link className="btn btn-brand-2 font-xxs mr-20" href="/contact"style={{backgroundColor:'orange',color:'black'}}>Contact Us</Link><Link className="btn btn-link-medium font-xxs" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="box-image-touch" />
                </section>
               
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Testimonials</h4>
                        <div className="row">
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between"style={{backgroundColor:'black'}}>
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author2.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Eleanor Pena</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between"style={{backgroundColor:'black'}}>
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white"style={{backgroundColor:'black'}}>For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author3.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Cody Fisher</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between"style={{backgroundColor:'black'}}>
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white"style={{backgroundColor:'black'}}>For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author3.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Cody Fisher</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between"style={{backgroundColor:'black'}}>
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white"style={{backgroundColor:'black'}}>For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Our Blog &amp; Insights</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-single"><img src="/assets/imgs/page/homepage2/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog"style={{backgroundColor:'orange'}}>Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-single">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-single"><img src="/assets/imgs/page/homepage2/news2.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog"style={{backgroundColor:'orange'}}>Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-single">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}