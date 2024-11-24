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
<h5 className="color-brand-1"style={{marginTop:'10px'}}></h5>

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
                                <Link href="/Item-we-take">Item we take</Link>
                            </li>
                            <li>
                                <Link href="/JK-Removal">
                                    Junk removal
                                </Link>
                            </li>
                            <li>
                                <Link href="/Dumpster-Rental">Dumpster Rental</Link>
                            </li>
                            <li>
                                <Link href="/JK-bags">Jk Dumpster Bag</Link>
                            </li>
                            <li>
                                <Link href="/Estimate">National Accounts</Link>
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
                                <Link href="Event">Events</Link>
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
          
          <div
    style={{
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        // Align to the right on large screens
        marginRight: '27%', // Add space from the right edge
        marginLeft: 'auto', // Ensure alignment to the right
        textAlign: 'right',
        padding: '10px', // Add padding for better appearance
    }}
>
   
   
   
</div>


<div
    style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', // Space between buttons
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    }}
>
    <a href="/Booking" style={{ textDecoration: 'none', width: '100%' }}>
        <button
            style={{
                backgroundColor: 'orange',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '200px',
                
                marginLeft:'30px', // Optional: Rounded corners
            }}
        >
            Online Booking
        </button>
    </a>
    <a href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
        <button
            style={{
                backgroundColor: 'orange',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '200px',
                
                marginLeft:'30px', // Optional: Rounded corners
            }}
        >
            Our Location
        </button>
    </a>
    <a href="/register" style={{ textDecoration: 'none', width: '100%' }}>
        <button
            style={{
                backgroundColor: 'orange',
                color: 'black',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '200px',
               
                marginLeft:'30px', // Optional: Rounded corners
            }}
        >
            Franchise
        </button>
    </a>
</div>




        </div>


        <div className="footer-2">
                    <div className="container-sub">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-sm-5 text-center text-sm-start"><span className="color-grey-300 font-xs">©Transp
                                    Official {new Date().getFullYear()}. All right reversed.</span></div>
                                <div className="col-sm-7 text-center text-sm-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Privacy policy</Link>
                                        </li>
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Terms of service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    </footer>
</>

    



    )
}
