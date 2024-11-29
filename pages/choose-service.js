import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

function ServiceCards() {
  const router = useRouter();

  const handleSelfServiceClick = () => {
    router.push("/DumpsterRental"); // Redirect to Dumpster Rental page
  };

  const handleFullServiceClick = () => {
    router.push("/BookingFullService"); // Redirect to Full Service Booking page
  };

  return (
    <Layout>
      <button className="back-button" onClick={() => router.back()}>
        ← Back
      </button>
      <div className="cards-container">
        {/* Full-Service Card */}
        <div className="service-card" onClick={handleFullServiceClick}>
          <img
            src="/assets/imgs/page/blog-single/bagi.png"
            alt="Full-Service"
            className="service-image"
          />
          <h3>Full-Service</h3>
          <ul>
            <li>
              This involves a team that comes into your home, does all the heavy
              lifting, and loads your unwanted items onto a truck, where they’re
              then hauled away.
            </li>
          </ul>
          <button style={buttonStyle}>Come Get My Items</button>
        </div>

        {/* Self-Service Card */}
        <div className="service-card" onClick={handleSelfServiceClick}>
          <img
            src="/assets/imgs/page/blog-single/bagi.png"
            alt="Self-Service"
            className="service-image"
          />
          <h3>Self-Service</h3>
          <ul>
            <li>
              We drop a dumpster at your property, and you fill it yourself.
              Once it’s full, junk removal is your go-to for large-scale
              cleanups and bulky items.
            </li>
          </ul>
          <button style={buttonStyle}>I'll Do it Myself</button>
        </div>
      </div>
      <style jsx>{`
        .back-button {
          background: none;
          border: none;
          color: #007bff;
          font-size: 1rem;
          cursor: pointer;
          display: block; /* Default to visible */
        }

        .back-button:hover {
          color: #0056b3;
        }

        .cards-container {
          display: flex;
          gap: 20px; /* Default gap for smaller screens */
          justify-content: center;
          padding: 20px;
          margin-bottom: 60px;
          margin-top: 80px;
          flex-wrap: wrap;
        }

        .service-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 300px;
          padding: 20px;
          text-align: center;
          background-color: #fff;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .service-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 20px;
          color: black;
          margin-bottom: 20px;
        }

        ul {
          text-align: left;
          font-size: 14px;
          margin-bottom: 20px;
        }

        /* Hide the back button on screens larger than 768px */
        @media (min-width: 768px) {
          .back-button {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .cards-container {
            margin-top: 20px;
            gap: 20px; /* Reduced gap for laptop screens */
          }
        }
      `}</style>
    </Layout>
  );
}

const buttonStyle = {
  marginBottom: "30px",
  marginTop: "40px",
  padding: "10px 20px",
  backgroundColor: "orange",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default ServiceCards;
