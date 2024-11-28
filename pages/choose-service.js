import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout"
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
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px",marginBottom:'60px' ,marginTop:'80px'}}>
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
                }}
                onClick={handleFullServiceClick}
           >
                <h3 style={{ fontSize: "20px", color: "black", marginBottom:'20px'}}>Full-Service</h3>
                <p> </p>
                <ul style={{ textAlign: "left", fontSize: "14px" }}>
                    <li>This involves a team that comes into your home,does all the heavy lifting, and loads your unwanted items onto a truck,where they’re then hauled away.   </li>
                    <li> </li>
                    <li> </li>
                    <li></li>
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
                }}
                onClick={handleSelfServiceClick}
            >
                <h3 style={{ fontSize: "20px", color: "black",marginBottom:'20px' }}>Self-Service</h3>
                <p></p>
                <ul style={{ textAlign: "left", fontSize: "14px" }}>
                    <li></li>
                    <li>We drop a dumpster at your property,  and,  you fill it yourself. Once it’s full,  junk removal is your go-to for large-scale cleanups and bulky items. . </li>
                    <li>
                     </li>
                    <li></li>
                </ul>
                <button style={buttonStyle}>I'll Do it Myself</button>
            </div>
        </div>
        </Layout>
    );
}

const buttonStyle = {
    marginBottom:'30px',
    marginTop:'40px',
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
};

export default ServiceCards;
