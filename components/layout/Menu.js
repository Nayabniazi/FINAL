import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Menu() {
    const router = useRouter()
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Function to toggle mobile menu visibility
    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    // Check if the current route is active
    const isActive = (path) => router.pathname === path ? 'active' : ''

    return (
        <>
            <ul className={`main-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {/* "What We Do" Menu */}
                <li className="has-children">
                    <Link className={`active ${isActive('/')}`} href="/" style={{ color: 'white' }}>What We Do</Link>
                    <ul className="sub-menu">
                        <li><Link href="/service-detail">Item we take</Link></li>
                        <li><Link href="/services">Dumpster Rentals</Link></li>
                        <li><Link href="/index-3">JK Dumpster Bag</Link></li>
                        <li><Link href="/our-team">Recycle</Link></li>
                        <li><Link href="/trackyourparcel">JK Junk Removal</Link></li>
                        <li><Link href="/index-4">Jk Same Day Junk Removal</Link></li>
                    </ul>
                </li>

                {/* "How it Works" Menu */}
                <li className="has-children">
                    <Link className={isActive('/workprocess')} href="/workprocess" style={{ color: 'white' }}>How it Works</Link>
                    <ul className="sub-menu">
                        <li><Link href="/workprocess">Residential</Link></li>
                        <li><Link href="/request-a-quote">Commercial</Link></li>
                        <li><Link href="/our-team">National Accounts</Link></li>
                    </ul>
                </li>

                {/* "Pricing" Menu */}
                <li className="has-children">
                    <Link className={isActive('/blog')} href="/blog" style={{ color: 'white' }}>Pricing</Link>
                    <ul className="sub-menu">
                        <li><Link href="/index-2">Estimate Pricing</Link></li>
                        <li><Link href="/faqs">Jk Removal Pricing</Link></li>
                        <li><Link href="/index-2">Dumpster Pricing</Link></li>
                    </ul>
                </li>

                {/* "More" Menu */}
                <li className="has-children">
                    <Link className={isActive('/about')} href="/about" style={{ color: 'white' }}>More</Link>
                    <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Our Location</Link></li>
                        <li><Link href="/register">Contact us</Link></li>
                        <li><Link href="/comingsoon">Events</Link></li>
                        <li><Link href="/newsletter">Resources</Link></li>
                        <li><Link href="/blog-single">Blog</Link></li>
                    </ul>
                </li>
            </ul>

            {/* Mobile menu toggle button */}
            <button className="burger-icon" onClick={handleMobileMenuToggle}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
            </button>
        </>
    )
}
