import Layout from "@/components/layout/Layout"
import Pricing2 from "@/components/sections/homepage2/Pricing2"
import ServiceSlider from "@/components/slider/ServiceSlider"
import Link from "next/link"
export default function ServiceDetail() {

    return (
        <>
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 box-pageheader-services text-center"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange',color:'black'}}>Our Services</span>
                            <h2 className="color- mt-15 mb-10 wow animate__animated animate__fadeIn"style={{color:'black'}}>What We Take</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Junk Removal solutions! Whether it’s full containers, consolidations, roll-on/roll-<br className="d-none d-lg-block" />off equipment or entire projects, moving shipments by sea is our “flagship” service.</p>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/wetake.png"height={500}width={1000} alt="transp" /></div>
                             <div className="col-lg-6 position-relative wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp"height={500}width={1000} />
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
</div>
                </div>
                <section className="section mt-50">
                    <div className="container">
                        <div className="content-detail"><strong className="font-md-bold color-grey-900 mb-25 d-block wow animate__animated animate__fadeIn">Old appliances often contain chemicals like Freon, which can be harmful to the environment. BinBear provides an eco-friendly appliance removal service, handling items  </strong>
                            <h3 className="color- wow animate__animated animate__fadeIn"style={{color:'black'}}>Terms apply, Not valid below minimum charge or combined with other offers</h3>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Not all junk needs to go to waste. Usable items can be repurposed, sold, or donated. Once you’ve handled what you can, BinBear is here to help with the rest, offering:
                            Electronic waste (e-waste) includes items like computers, TVs, and phones, which contain valuable and potentially harmful materials. Disposing of these items in landfills releases toxic metals into the environment. BinBear offers safe, eco-friendly e-waste removal, ensuring that your electronics are recycled responsibly.                    </p>
                            <p className="wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img3.png" alt="transp" /></p>
                            <p className="wow animate__animated animate__fadeIn">While many recyclables can be disposed of for free, larger items may come with fees. BinBear offers transparent, upfront pricing with free estimates. We show up on time, provide a written estimate, and, if you’re happy, we can often take your items on the spot..</p>
                            <p className="wow animate__animated animate__fadeIn">While many recyclables can be disposed of for free, larger items may come with fees. BinBear offers transparent, upfront pricing with free estimates. We show up on time, provide a written estimate, and, if you’re happy, we can often take your items on the spot..</p>
                            <h3 className="wow animate__animated animate__fadeIn"style={{color:'black'}}>Big Trucks, Big Value</h3>
                            <div className="row align-items-center">
                                <div className="col-lg-7 wow animate__animated animate__fadeIn">
                                    <p>Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.</p>
                                    <p>Cost-Effectiveness: Sea freight forwarding is one of the most cost-effective modes of transportation, especially for businesses that require the transportation of large quantities of goods. This is because cargo ships can transport large volumes of goods at a lower cost compared to other modes of transportation.</p>
                                    <p>Junk Dumpster forwarding is a reliable mode since it is not affected by traffic or weather conditions. Additionally, cargo ships are designed to withstand harsh weather conditions, which reduces the risk of damage or loss of goods.</p>
                                </div>
                                <div className="col-lg-5 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
               

              
                <div className="line-border" />
                <section className="section pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                            <h2 className="color-mb-15 wow animate__animated animate__fadeIn"style={{color:'black'}}>Other Services</h2>
                            <p className="font-md color-grey-700 mb-35 wow animate__animated animate__fadeIn">You choose the cities where you’d like to deliver. All deliveries are within a specific service area<br className="d-none d-lg-block" />and delivery services vary by location. Whatever the mode or requirement, we will find and book<br className="d-none d-lg-block" />the ideal expedited shipping solution to ensure a timely delivery.</p>
                        </div>
                        <div className="box-slider-homepage2 box-slider-homepage-4 box-slider-service-4">
                            <div className="container">
                                <div className="box-swiper">
                                    <ServiceSlider />

                                </div>
                            </div>
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
                                                    <input className="btn btn-brand-1-big" type="button" defaultValue="Submit"style={{backgroundColor:'orange',color:'black'}} />
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