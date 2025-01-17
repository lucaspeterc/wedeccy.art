"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "/app/[locale]/components/Navbar";
import Footer from "/app/[locale]/components/Footer";

export const dynamic = "force-dynamic";

export default function Checkout({ params }) {
  const searchParams = useSearchParams();
  const encodedOrderData = searchParams.get("data");
  const [orderData, setOrderData] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
    country: "",
    additionalInfo: "",
  });
  const router = useRouter();
  const { artist, locale } = params;

  // Parse and Set Order Data
  useEffect(() => {
    try {
      if (!encodedOrderData) throw new Error("Missing order data.");
      const decodedOrderData = decodeURIComponent(encodedOrderData);
      const parsedOrderData = JSON.parse(decodedOrderData);
      if (!parsedOrderData || !parsedOrderData.cartItems?.length) {
        throw new Error("Invalid or empty order data.");
      }
      setOrderData(parsedOrderData);
    } catch (error) {
      console.error("Error parsing order data:", error);
      alert("Unable to load checkout information. Redirecting to the cart.");
      router.push("/cart");
    }
  }, [encodedOrderData, router]);

  // Handle User Input
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [id]: value }));
  };

  // Proceed to Stripe Payment
  const handleStripePayment = async () => {
    if (
      !orderData ||
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.phone ||
      !userDetails.street ||
      !userDetails.postalCode ||
      !userDetails.city ||
      !userDetails.country
    ) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    try {
      const response = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userDetails,
          cartItems: orderData.cartItems,
          total: orderData.total,
          shippingMethod: orderData.shippingMethod,
        }),
      });

      if (!response.ok) {
        console.error("Error creating Stripe session");
        alert("Unable to proceed with payment. Please try again later.");
        return;
      }

      const { sessionUrl } = await response.json();
      if (sessionUrl) {
        window.location.href = sessionUrl;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  if (!orderData) return <div>Loading...</div>;

  return (
    <>
      <Navbar artist={artist} locale={locale} />
      <div className="max-w-7xl mx-auto px-4 py-44 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* User Information Form */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-medium text-white">Shipping Information</h2>
            <form className="space-y-4 mt-4">
              {[
                { id: "firstName", label: "First Name", type: "text" },
                { id: "lastName", label: "Last Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone Number", type: "text" },
                { id: "street", label: "Address (Street and Number)", type: "text" },
                { id: "postalCode", label: "Postal Code", type: "text" },
                { id: "city", label: "City", type: "text" },
                { id: "country", label: "Country", type: "text" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-white">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={userDetails[id]}
                    onChange={handleInputChange}
                    className="block w-full p-2 rounded-sm border-black border-2 text-black"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-white">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  value={userDetails.additionalInfo}
                  onChange={handleInputChange}
                  className="block w-full p-2 rounded-sm border-black border-2 text-black"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleStripePayment}
                className="w-full p-3 bg-black text-white rounded-md"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-gray-100 p-6 rounded-md">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              <div className="mt-4">
                <p className="flex justify-between text-black">
                  <span>Subtotal</span>
                  <span>{orderData.subtotal.toFixed(2)} PLN</span>
                </p>
                <p className="flex justify-between text-black">
                  <span>Shipping</span>
                  <span>{orderData.shippingCost.toFixed(2)} PLN</span>
                </p>
                <p className="flex justify-between border-t pt-4 font-bold text-black">
                  <span>Total</span>
                  <span>{orderData.total.toFixed(2)} PLN</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer artist={artist} locale={locale} />
    </>
  );
}
