import Link from "next/link";

export default function ComingSoonHeader() {
    return (
        <>
            <header className="header sticky-bar">
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/"><img alt="Ecom" src="assets/imgs/template/logo.svg" /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="#">Upcoming services</Link>
                                            <div className="sub-menu five-col">
                                                <div className="menu-col">
                                                    <h6 className="color-brand-2 mb-15">Sea Forwarding</h6>
                                                    <div className="menu-image"><img src="assets/imgs/page/homepage1/menu1.png" alt="transp" /></div>
                                                    <ul className="megamenu">
                                                        <li><Link href="/services">Container Shipping</Link></li>
                                                        <li><Link href="/services">Bulk Shipping</Link></li>
                                                        <li><Link href="/services">Roll-on/Roll-off Shipping</Link></li>
                                                        <li><Link href="/services">Break Bulk Shipping</Link></li>
                                                        <li><Link href="/services">Project Cargo Shipping</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="menu-col">
                                                    <h6 className="color-brand-2 mb-15">Air Freight Forwarding</h6>
                                                    <div className="menu-image"><img src="assets/imgs/page/homepage1/menu2.png" alt="transp" /></div>
                                                    <ul className="megamenu">
                                                        <li><Link href="/services">General Cargo</Link></li>
                                                        <li><Link href="/services">Express Shipping</Link></li>
                                                        <li><Link href="/services">Dangerous Goods</Link></li>
                                                        <li><Link href="/services">Oversized Cargo</Link></li>
                                                        <li><Link href="/services">Perishable Goods</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="menu-col">
                                                    <h6 className="color-brand-2 mb-15">Land Transportation</h6>
                                                    <div className="menu-image"><img src="assets/imgs/page/homepage1/menu3.png" alt="transp" /></div>
                                                    <ul className="megamenu">
                                                        <li><Link href="/services">Road Freight</Link></li>
                                                        <li><Link href="/services">Rail Freight</Link></li>
                                                        <li><Link href="/services">Intermodal Transportation</Link></li>
                                                        <li><Link href="/services">Less-than-Truckload (LTL) Shipping</Link></li>
                                                        <li><Link href="/services">Specialized Transportation</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="menu-col">
                                                    <h6 className="color-brand-2 mb-15">Railway Logistics</h6>
                                                    <div className="menu-image"><img src="assets/imgs/page/homepage1/menu4.png" alt="transp" /></div>
                                                    <ul className="megamenu">
                                                        <li><Link href="/services">Rail Freight Transportation</Link></li>
                                                        <li><Link href="/services">Rail Terminal Services</Link></li>
                                                        <li><Link href="/services">Rail Freight Forwarding</Link></li>
                                                        <li><Link href="/services">Intermodal Transportation</Link></li>
                                                        <li><Link href="/services">Rail Logistics Consulting</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="menu-col">
                                                    <h6 className="color-brand-2 mb-15">Warehouse</h6>
                                                    <div className="menu-image"><img src="assets/imgs/page/homepage1/menu5.png" alt="transp" /></div>
                                                    <ul className="megamenu">
                                                        <li><Link href="/services">Warehousing</Link></li>
                                                        <li><Link href="/services">Distribution Center Operations</Link></li>
                                                        <li><Link href="/services">E-Commerce Fulfillment</Link></li>
                                                        <li><Link href="/services">Reverse Logistics</Link></li>
                                                        <li><Link href="/services">Inventory Management</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white"><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-account"><span className="font-sm color-grey-900 arrow-down">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                                        </path>
                                    </svg>
                                    English</span></span>
                                    <div className="dropdown-account">
                                        <ul>
                                            <li><Link className="font-md" href="#"><img src="assets/imgs/template/icons/en.png" alt="transp" />
                                                English</Link></li>
                                            <li><Link className="font-md" href="#"><img src="assets/imgs/template/icons/fr.png" alt="transp" />
                                                French</Link></li>
                                            <li><Link className="font-md" href="#"><img src="assets/imgs/template/icons/cn.png" alt="transp" />
                                                Chiness</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-none d-sm-inline-block">
    <Link className="btn btn-default mr-10 hover-up" href="/login">Login</Link>
    
    {/* Online Booking link without plus icon */}
    <Link className="btn btn-brand-1 d-none d-xl-inline-block hover-up" href="/404" style={{ backgroundColor: '#FFA500', height:'40px',textAlign:'center'}}>
        Online Booking
    </Link>
</div>
</div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
