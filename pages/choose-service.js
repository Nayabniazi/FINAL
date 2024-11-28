import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

function ServiceCards() {
    const router = useRouter();

    const handleSelfServiceClick = () => {
        router.push("/DumpsterRental"); // Redirect to Dumpster Rental page
    };

    const handleFullServiceClick = () => {
        router.push("/BookingFullService"); // Redirect to Dumpster Rental page
    };

    return (
        <Layout>
            <button className="back-button" onClick={() => router.back()}>
          ← Back
        </button>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    padding: "20px",
                    marginBottom: '60px',
                    marginTop: '80px',
                    flexWrap: "wrap", // Allow cards to wrap on smaller screens
                    justifyContent: "space-evenly", // Align cards evenly on small screens
                }}
            >
                
                {/* Full-Service Card */}
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "300px",
                        padding: "20px",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        marginBottom: "20px", // Add spacing between cards
                    }}
                    onClick={handleFullServiceClick}
                >
                    {/* Image at the top of the card */}
                    <img
                        src="/assets/imgs/page/blog-single/bagi.png" // Update with the correct image path
                        alt="Full-Service"
                        style={{
                            width: "100%", // Ensure the image takes full width of the card
                            height: "200px", // Set a fixed height for the image
                            objectFit: "cover", // Make sure the image covers the space without distortion
                            borderRadius: "8px", // Round the corners of the image
                            marginBottom: "15px", // Space between image and text
                        }}
                    />
                    <h3 style={{ fontSize: "20px", color: "black", marginBottom: '20px' }}>Full-Service</h3>
                    <ul style={{ textAlign: "left", fontSize: "14px", marginBottom: "20px" }}>
                        <li>This involves a team that comes into your home, does all the heavy lifting, and loads your unwanted items onto a truck, where they’re then hauled away.</li>
                    </ul>
                    <button style={buttonStyle}>Come Get My Items</button>
                </div>

                {/* Self-Service Card */}
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "300px",
                        padding: "20px",
                        textAlign: "center",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        marginBottom: "20px", // Add spacing between cards
                    }}
                    onClick={handleSelfServiceClick}
                >
                    {/* Image at the top of the card */}
                    <img
                        src="/assets/imgs/page/blog-single/bagi.png" // Update with the correct image path
                        alt="Self-Service"
                        style={{
                            width: "100%", // Ensure the image takes full width of the card
                            height: "200px", // Set a fixed height for the image
                            objectFit: "cover", // Make sure the image covers the space without distortion
                            borderRadius: "8px", // Round the corners of the image
                            marginBottom: "15px", // Space between image and text
                        }}
                    />
                    <h3 style={{ fontSize: "20px", color: "black", marginBottom: '20px' }}>Self-Service</h3>
                    <ul style={{ textAlign: "left", fontSize: "14px", marginBottom: "20px" }}>
                        <li>We drop a dumpster at your property, and you fill it yourself. Once it’s full, junk removal is your go-to for large-scale cleanups and bulky items.</li>
                    </ul>
                    <button style={buttonStyle}>I'll Do it Myself</button>
                </div>
            </div>
            <style jsx>
            {`
            
           
          .back-button {
          
            
            
            background: none;
            border: none;
            color: #007bff;
            font-size: 1rem;
            cursor: pointer;
          }
          .back-button:hover {
            color: #0056b3;
          } 
            
            
            
            
            `}
        </style>
        </Layout>
    );
}

const buttonStyle = {
    marginBottom: '30px',
    marginTop: '40px',
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

export default ServiceCards;
