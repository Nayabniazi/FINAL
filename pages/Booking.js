import Layout from "@/components/layout/Layout"
import { useState } from "react"; // Import useState
import { useRouter } from "next/router"; // Import useRouter for navigation
import Brand1Slider from "@/components/slider/Brand1Slider"
export default function Login() {
    const [zipCode, setZipCode] = useState(""); // Initialize state for zip code
    const [message, setMessage] = useState(""); // State to manage success or error messages
    const router = useRouter(); // Initialize router

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        setMessage(""); // Clear message when typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the zip code
        if (zipCode === "90001") {
            setMessage("Good news! We've got you covered.");
            setTimeout(() => {
                router.push("/choose-service"); // Redirect after 3 seconds
            }, 3000);
        } else if (zipCode.length === 5 && !isNaN(zipCode)) {
            setMessage("Sorry, we don't have coverage for this zip code.");
        } else {
            setMessage("Sorry, please enter a valid 5-digit zip code.");
        }
    };

    return (
        <Layout>
        <section className="section box-login">
            <div className="row align-items-center m-0">
                <div className="col-lg-6" style={{ marginBottom: '150px',marginLeft:'400px' }}>
                    <div className="box-login-left">
                        <h2 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn" style={{ marginLeft: '70px' }}>Booking Now</h2>
                        <p className="font-md color-grey-500 wow animate__animated animate__fadeIn" style={{ marginLeft: '70px' }}>Access to all features. No credit card required.</p>

                        <div className="box-form-login wow animate__animated animate__fadeIn">
                   


        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center", position: "relative" }}>
            <label htmlFor="zip-code" style={{ display: "block", marginBottom: "10px", fontSize: "16px" }}>Enter Your Zip Code</label>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <input
                    type="text"
                    id="zip-code"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="ZIP Code"
                    style={{
                        flex: "1",
                        minWidth: "250px",
                        maxWidth: "500px",
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        height: "50px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        height: "50px",
                        padding: "10px",
                        backgroundColor: "#FFA500",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        minWidth: "100px",
                        maxWidth: "150px",
                        flexShrink: 0,
                    }}
                >
                    Submit
                </button>
            </div>

            {/* Conditional Message Rendering */}
            <p
                style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    color: message === "Good news! We've got you covered." ? "green" : "red",
                    textAlign: "center",
                }}
            >
                {message}
            </p>
        </form>
         </div>
         </div>
     </div>
 </div>
</section>
</Layout>
    );
}
