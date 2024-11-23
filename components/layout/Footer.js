import Link from "next/link";

export default function Footer1({ }) {
    return (


<>
    <footer className="footer" style={{ marginTop: '0px' }}>
        <div
            className="footer-1"
            style={{
                
                height: 'auto',
                padding: '20px 0', 
                backgroundColor: 'black',
                
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 width-23 mb-30">
                        <div className="mb-20">
                            <img
                                src="/img/bear.png.png"
                                width={150}
                                height={60}
                                alt="transp"
                            />
                        </div>
                        <p className="font-xs mb-20 color-white">
                            We fuse our global network with our depth of
                            expertise in air freight, ocean freight, railway
                            transportation, trucking, and multimode
                            transportation, also we are providing sourcing,
                            warehousing, E-commercial fulfillment, and
                            value-added service to our customers including
                            kitting, assembly, customized package and business
                            inserts, etc.
                        </p>
                        <h6 className="color-brand-1">View our Details</h6>
                    </div>
                    <div
                        className="col-lg-3 width-16 mb-30"
                        style={{
                            backgroundColor: 'black', // Set black background
                        }}
                    >
                        <h5 className="mb-10 color-brand-1">Services</h5>
                        <ul className="menu-footer">
                            <li>
                                <Link href="/index-2">Item we take</Link>
                            </li>
                            <li>
                                <Link href="/trackyourparcel">
                                    Junk removal
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">Dumpster Rental</Link>
                            </li>
                            <li>
                                <Link href="/index-3">Jk Dumpster Bag</Link>
                            </li>
                            <li>
                                <Link href="/our-team">National Accounts</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-3 width-16 mb-30"
                        style={{
                            backgroundColor: 'black', // Set black background
                        }}
                    >
                        <h5 className="mb-10 color-brand-1">Company</h5>
                        <ul className="menu-footer">
                            <li>
                                <Link href="/about"> About us</Link>
                            </li>
                            <li>
                                <Link href="comingsoon">Events</Link>
                            </li>
                            <li>
                                <Link href="#">Apply Locally</Link>
                            </li>
                            <li>
                                <Link href="#">Neighbory</Link>
                            </li>
                            <li>
                                <Link href="/register">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-3 width-16 mb-30"
                        style={{
                            backgroundColor: 'black', // Set black background
                        }}
                    >
                        <h5 className="mb-10 color-brand-1">Other Links</h5>
                        <ul className="menu-footer">
                            <li>
                                <Link href="#">Terms of use</Link>
                            </li>
                            <li>
                                <Link href="#">Accesibility</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">California Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Notice</Link>
                            </li>
                            <li>
                                <Link href="#">Disclaimer</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-3 width-20 mb-30"
                        style={{
                            backgroundColor: 'black', // Set black background
                        }}
                    >
                        <h5 className="mb-10 color-brand-1">Gallery</h5>
                        <div className="galleries-footer">
                            <ul className="list-imgs">
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal1.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal2.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal3.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal4.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal5.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal6.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal7.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal8.png"
                                        alt="transp"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="/assets/imgs/page/homepage1/gal9.png"
                                        alt="transp"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            className="footer-2"
            style={{
                paddingTop: '0px',
                backgroundColor: 'black',
                paddingBottom: '50px',
            }}
        >
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 text-center text-lg-start">
                            <span className="color-grey-300 font-md"> </span>
                        </div>

                        <div
                            className="col-lg-6 col-md-12 text-center text-lg-end"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginLeft: '300px',
                            }}
                        >
                            <a href="/Booking" style={{ textDecoration: 'none' }}>
                                <button
                                    style={{
                                        backgroundColor: 'orange',
                                        color: 'black',
                                        border: 'none',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    Online Booking
                                </button>
                            </a>
                            <a
                                href="/contact"
                                style={{ textDecoration: 'none' }}
                            >
                                <button
                                    style={{
                                        backgroundColor: 'orange',
                                        color: 'black',
                                        border: 'none',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    Our Location
                                </button>
                            </a>
                            <a
                                href="/register"
                                style={{ textDecoration: 'none' }}
                            >
                                <button
                                    style={{
                                        backgroundColor: 'orange',
                                        color: 'black',
                                        border: 'none',
                                        padding: '10px 20px',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    Franchise
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
    /* For larger screens (tablet and desktop) */
    .col-lg-6.col-md-12.text-center.text-lg-end {
        display: flex;  /* Flexbox for the buttons */
        justify-content: center;  /* Center the buttons horizontally */
        align-items: center;  /* Center the buttons vertically */
        gap: 10px;  /* 10px gap between buttons */
        flex-wrap: wrap;  /* Allow buttons to wrap if necessary */
    }

    /* For mobile screens */
    @media (max-width: 768px) {
        .col-lg-6.col-md-12.text-center.text-lg-end {
            flex-direction: column;  /* Stack buttons vertically on smaller screens */
            justify-content: center;  /* Center the buttons horizontally */
              /* Center the buttons vertically */
            gap: 10px;  /* 10px gap between buttons */
            height: auto;  /* Ensure there’s no fixed height causing clipping */
            min-height: 50px;  /* Minimum height to prevent content overlap */
        }
    }
`}</style>





        </div>
    </footer>
</>

    



    )
}
