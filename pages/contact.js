import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout>
                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                <div className="mt-110" />
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
                                <div className="col-xl-4 col-lg-5 position-relative">
                                    <div className="box-contactform-right">
                                        <h5 className="color-brand-2 mb-35 wow animate__animated animate__fadeIn">Headquarters</h5>
                                        <div className="map-info"><img className="mb-25 wow animate__animated animate__fadeIn" src="/img/bear.png.png"width={150} height={70} alt="transp" />
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
               
            </Layout>
        </>
    )
}