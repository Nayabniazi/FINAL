import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import Link from "next/link"
export default function Faq() {

    return (
        <>
            <Layout>
                <section className="section d-block hero-faqs">
                    <div className="container position-relative">
                        <div className="banner-trackyourparcel" />
                        <div className="box-info-trackyourparcel">
                            <h2 className="color-black mb-25 wow animate__animated animate__fadeIn">About Pricing Frequently <br className="d-none d-lg-block" /> Asked Questions</h2>
                            <p className="color-grey-900 font-md wow animate__animated animate__fadeIn">Everything you need to know about the product and billing. Can not find the answer you are looking for? Please Contact our support team.</p>
                            <div className="form-trackparcel mb-0">
                                <form action="#">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Enter keyword" />
                                        <input className="btn btn-brand-1 btn-track" type="submit" defaultValue="Find the answer"style={{backgroundColor:'orange'}} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container position-relative">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Popular Topic</h2>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                        <div className="row mt-50">
                            <div className="col-lg-6">
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What is logistic cargo?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Logistic cargo refers to the process of planning, implementing, and controlling the movement of goods and materials from one place to another. This includes everything from transportation, storage, inventory management, and more.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What are the types of logistic cargo?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">There are several types of logistic cargo, including air freight, sea freight, road transport, rail transport, and intermodal transport.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What is the difference between freight and cargo?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Freight refers to the goods being transported, while cargo refers to the actual containers or vessels used to transport the freight.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What is the difference between LCL and FCL?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Some key factors to consider include the mode of transportation, the type of cargo being transported, the distance and route, the required delivery date, and any regulatory or customs requirements.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">How is logistic cargo priced?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Logistic cargo is typically priced based on the weight and volume of the cargo, as well as the distance and mode of transportation.</p>
                                </div>
                                <div className="item-faqs-2 mb-30"><Link href="#">
                                    <h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">What is a logistics provider?</h6></Link>
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">A logistics provider is a company that specializes in providing logistics services, including transportation, storage, inventory management, and more.</p>
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
                                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
                                    <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                    <div className="box-gallery-faqs">
                                        <div className="image-top wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/trackyourparcel/img-faqs1.png" alt="transp" /></div>
                                        <div className="image-bottom wow animate__animated animate__fadeIn">
                                            <div className="image-faq-1"><img src="/assets/imgs/page/trackyourparcel/img-faqs2.png" alt="transp" /></div>
                                            <div className="image-faq-2"><img src="/assets/imgs/page/trackyourparcel/img-faqs3.png" alt="transp" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-accordion">
                                    <Accordion />
                                    <div className="line-border mt-50 mb-50" />
                                    <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
                                    <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange'}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Pricing2/>
                <section className="section">
                    <div className="container position-relative">
                        <div className="box-cover-contactform"style={{backgroundColor:'orange'}}>
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="box-contactform-left"style={{backgroundColor:'black'}}>
                                        <h3 className="color-white mb-15 wow animate__animated animate__fadeIn">Still have question?</h3>
                                        <p className="font-md color-white mb-50 wow animate__animated animate__fadeIn">Can’t find the answer you are looking for? Please chat to our friendly team.</p>
                                        <form action="#">
                                            <div className="row wow animate__animated animate__fadeIn">
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
                                                        <input className="form-control" type="text" placeholder="Your phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={8} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" style={{backgroundColor:'orange'}}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 position-relative">
                                    <div className="box-contactform-right">
                                        <h5 className="color-brand-2 mb-35 wow animate__animated animate__fadeIn">Headquarters</h5>
                                        <div className="map-info"><img className="mb-25 wow animate__animated animate__fadeIn" src="/img/bear.png.png" width={180} height={100} alt="transp" />
                                            <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            <p className="color-grey-700 mb-10 wow animate__animated animate__fadeIn">
                                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>Phone: +01-246-357 (Any time 24/7)
                                            </p>
                                            <p className="color-grey-700 mb-30 wow animate__animated animate__fadeIn">
                                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>Email: contact@transp.eu.com
                                            </p>
                                            <div className="line-border mb-25" />
                                            <p className="color-grey-700 font-md-bold wow animate__animated animate__fadeIn">Hours: 8:00 - 17:00, Mon - Sat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-90" />
               
                <div className="section bg-map d-block">
                    <div className="container">
                       
                    </div>
                </div>
            </Layout>
        </>
    )
}