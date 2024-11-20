import Layout from "@/components/layout/Layout"
import { useState } from "react";
import Brand1Slider from "@/components/slider/Brand1Slider"
import Link from "next/link"
export default function Login() {
    const [zipCode, setZipCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        // Clear the error message when the input becomes valid
        if (e.target.value.length === 5 && !isNaN(e.target.value)) {
            setErrorMessage(""); // Clear error if input becomes valid
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the zip code
        if (zipCode.length !== 5 || isNaN(zipCode)) {
            setErrorMessage("Sorry, please enter a valid 5-digit zip code.");
        } else {
            setErrorMessage(""); // Clear the error
            alert(`Zip code ${zipCode} submitted successfully!`);
        }
    };

    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <Layout>
                <section className="section box-login">
                    <div className="row align-items-center m-0">
                        <div className="col-lg-6">
                            <div className="box-login-left">
                                <h2 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Booking Now</h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Access to all features. No credit card required.</p>
                                <div className="box-btn-signin mt-55 wow animate__animated animate__fadeIn"><Link className="btn btn-signin mb-10" href="#"><img src="/assets/imgs/page/login/Google.svg" alt="Transp" />Sign in with Google</Link><Link className="btn btn-signin" href="#"><img src="/assets/imgs/page/login/apple.svg" alt="Transp" />Continue with Apple ID</Link></div>
                                <div className="box-or-login wow animate__animated animate__fadeIn"><span className="text-or font-xs color-grey-500">Or continue with</span></div>
                                <div className="box-form-login wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Email Address *" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="password" placeholder="Enter Your Password" />
                                        </div>







                                        <div className="form-group">
                                            <div className="d-flex justify-content-between">
                                                <div className="box-remember">
                                                    <label className="font-xs color-grey-900" htmlFor="rememberme">
                                                        <input id="rememberme" type="checkbox" />Remember me
                                                    </label>
                                                </div>
                                                <div className="box-forgotpass"><Link className="font-xs color-brand-2" href="#">Forgot your password?</Link></div>
                                            </div>
                                        </div>




                                        <div  onSubmit={handleSubmit}
            style={{
                maxWidth: "400px",
                margin: "20px auto",
                textAlign: "center",
                position: "relative",
            }}
        >

      
<label
                htmlFor="zip-code"
                style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}
            >
              
            </label>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:'450px',}}>
           

                <input 
                    type="text"
                    id="zip-code"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="ZIP Code"
                    style={{
                   
                        border: `1px solid ${isHovered ? 'black' : '#ccc'}`,
                
                        marginRight:'1000px',
                        height:'50px',
                        width: "500px",
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        marginRight: "10px",
                        transition: "border-color 0.3s ease"
                    }}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
               


                />
                <button
                    type="submit"
                    style={{
                        height:'45px',
                        padding: "10px",
                        backgroundColor: "#FFA500", // Orange color
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.5 8a.5.5 0 0 1 .5-.5h10.793L9.146 4.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708L12.793 8.5H2a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </button>
            </div>
            <p
                style={{
                   marginRight:'500px',
                    color: "red",
                    marginTop: "10px",
                    fontSize: "14px",
                    height: "14px", // Added fixed height to avoid layout shift
                }}
            >
                {errorMessage}
            </p>      
               
</div>













                                        <div className="form-group mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="box-button-form-login">
                                                    <input className="btn btn-brand-1-big mr-20" type="submit" defaultValue="Sign In" />
                                                </div>
                                                <div className="box-text-form-login"><span className="font-xs color-grey-500">Don't Have an Account?</span><Link className="font-xs color-brand-2" href="/register">Sign up</Link></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-login-right">
                                <div className="quote-shape shape-1" />
                                <div className="box-info-bottom-img box-info-bottom-img-3"style={{backgroundColor:'black'}}>
                                    <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                    <div className="info-play wow animate__animated animate__fadeIn">
                                        <h4 className="color-white mb-15">We have 25 years experience in this passion</h4>
                                        <p className="font-sm color-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section bg-2 pt-65 pb-35">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 mb-30 text-center text-lg-start wow animate__animated animate__fadeIn">
                                <p className="font-2xl-bold color-brand-2">We are<span className="color-brand-1"> trusted</span> by major global brands</p>
                            </div>
                            <div className="col-lg-9 mb-30">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-6 pb-0">
                                        <Brand1Slider />
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