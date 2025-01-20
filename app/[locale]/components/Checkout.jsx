"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "/app/[locale]/components/CartContext";
import { useTranslation } from "react-i18next";

export default function Checkout({ artist, locale, id }) {
  const { cartItems, shippingCost, calculateSubtotal, calculateTotal } = useContext(CartContext);
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

  const { t } = useTranslation("checkout"); // Use 'cart' namespace

  const router = useRouter();

  // Debugging cart state
  useEffect(() => {
    console.log("DEBUG: cartItems on Checkout page:", cartItems);
  }, [cartItems]);

  // Redirect if cart is empty
  useEffect(() => {
    if (!cartItems.length) {
      alert("Your cart is empty. Please add items to proceed.");
      router.push("/store");
    }
  }, [cartItems, router]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleStripePayment = async () => {
    if (
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
          cartItems,
          total: calculateTotal(),
          shippingCost,
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

  if (!cartItems.length) {
    return (
      <div>
        <h1>Your cart is empty.</h1>
        <button onClick={() => router.push("/cart")}>Go Back to Cart</button>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-44 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-medium text-white">{t("shipping_information")}</h2>
            <form className="space-y-4 mt-4">
              {/* User Info Form */}
              {[
                { id: "firstName", label: t("first_name"), type: "text" },
                { id: "lastName", label: t("last_name"), type: "text" },
                { id: "email", label: t("email"), type: "email" },
                { id: "phone", label: t("phone"), type: "text" },
                { id: "street", label: t("address"), type: "text" },
                { id: "postalCode", label: t("postal_code"), type: "text" },
                { id: "city", label: t("city"), type: "text" },
                { id: "country", label: t("country"), type: "text" },
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
              <button
                type="button"
                onClick={handleStripePayment}
                className="w-full p-3 bg-black text-white rounded-md"
              >
                {t("proceed_to_payment")}
              </button>
            </form>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-gray-100 p-6 rounded-md text-black">
              <h2 className="text-lg font-medium text-black">{t("order_summary")}</h2>
              <p>
                {t("subtotal")}: {calculateSubtotal().toFixed(2)} PLN
              </p>
              <p>
                {t("shipping")}: {shippingCost.toFixed(2)} PLN
              </p>
              <p>
                {t("total")}: {calculateTotal().toFixed(2)} PLN
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}