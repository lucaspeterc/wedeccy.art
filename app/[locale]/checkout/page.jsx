"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const params = useParams();
  const encodedOrderData = params.id;
  const [orderData, setOrderData] = useState(null);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [shippingMethod, setShippingMethod] = useState("InPost Paczkomat");
  const [shippingCost, setShippingCost] = useState(19.0);

  const router = useRouter();

  useEffect(() => {
    try {
      const decodedOrderData = decodeURIComponent(encodedOrderData);
      const parsedOrderData = JSON.parse(decodedOrderData);
  
      if (!parsedOrderData || !parsedOrderData.cartItems?.length) {
        throw new Error("Invalid order data.");
      }
  
      setOrderData(parsedOrderData);
    } catch (error) {
      console.error("Error parsing order data:", error);
      alert("Unable to load checkout information. Redirecting to the cart.");
      router.push("/cart");
    }
  }, [encodedOrderData]);

  const calculateTotal = () => {
    return orderData?.subtotal + shippingCost;
  };

  const handleShippingChange = (e) => {
    const method = e.target.value;
    setShippingMethod(method);

    if (method === "Kurier") {
      setShippingCost(600);
    } else if (method === "Kurier Express") {
      setShippingCost(800);
    } else if (method === "Odbiór osobisty") {
      setShippingCost(0.0);
    }
  };

  const handleStripePayment = async () => {
    if (!orderData) return;

    try {
      const response = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...orderData,
          shippingMethod,
          shippingCost,
          total: calculateTotal(),
        }),
      });

      if (!response.ok) {
        console.error("Error creating Stripe session");
        return;
      }

      const { sessionUrl } = await response.json();
      if (sessionUrl) {
        window.location.href = sessionUrl; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-medium text-gray-900">Shipping Information</h2>
          <form className="space-y-4 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 rounded-sm border-black border-2"
              />
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-black">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block w-full p-2 rounded-sm border-black border-2"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-black">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block w-full p-2 rounded-sm border-black border-2"
              />
            </div>

            <div>
              <label htmlFor="shippingMethod" className="block text-sm font-medium text-black">
                Shipping Method
              </label>
              <select
                id="shippingMethod"
                value={shippingMethod}
                onChange={handleShippingChange}
                className="block w-full p-2 rounded-sm border-black border-2"
              >
                <option value="InPost Paczkomat">InPost Paczkomat - 19 PLN</option>
                <option value="Kurier">Kurier - 600 PLN</option>
                <option value="Kurier Express">Kurier Express - 800 PLN</option>
                <option value="Odbiór osobisty">Odbiór osobisty - Free</option>
              </select>
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

        {/* Order Summary Section */}
        <div className="lg:col-span-5">
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-4">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>{orderData.subtotal.toFixed(2)} PLN</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost.toFixed(2)} PLN</span>
              </p>
              <p className="flex justify-between border-t pt-4 font-bold">
                <span>Total</span>
                <span>{calculateTotal().toFixed(2)} PLN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
