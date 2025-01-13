"use client";

import { useContext, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { CartContext } from "/app/[locale]/components/CartContext.js"; // Adjust the path as necessary

export default function Checkout() {
  const params = useParams(); 
  const id = params.id;

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
  const [files, setFiles] = useState({});

  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (id) {
      let decodedOrderDataString;
      try {
        decodedOrderDataString = decodeURIComponent(id);
      } catch (error) {
        console.error("Error decoding order data:", error);
        return;
      }

      let orderData;
      try {
        orderData = JSON.parse(decodedOrderDataString);
      } catch (error) {
        console.error("Error parsing order data:", error);
        return;
      }

      setSubtotal(parseFloat(orderData.subtotal) || 0);
      setShippingCost(parseFloat(orderData.shippingCost) || 0);
      setTax(parseFloat(orderData.tax) || 0);
      setTotal(parseFloat(orderData.total) || 0);
      setPromoCode(orderData.promoCode || "");
      setShippingMethod(orderData.shippingMethod || "InPost Paczkomat");
      setDiscount(parseFloat(orderData.discount) || 0);

      if (orderData.cartItems) {
        const updatedCartItems = orderData.cartItems.map((item) => ({
          ...item,
          fileUrls: item.fileUrls || [], // Ensure fileUrls are attached to each product
        }));
        setFiles(updatedCartItems); // Use updated cart items with fileUrls
      }
    }
  }, [id]);

  // Function to handle PayU payment initiation
  const handlePayUPayment = async (orderInformation, cartItems) => {
    try {
      const response = await fetch('/api/payments/payu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderInformation,
          cartItems,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error in payment initiation:', errorData.error || 'Server error');
        return;
      }
  
      const data = await response.json();
  
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl; // Redirect to PayU checkout page
      } else {
        console.error('Error in payment initiation:', data.error || 'No redirect URL provided');
      }
    } catch (error) {
      console.error('Error processing PayU payment:', error.message);
    }
  };

  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    let fileUrls = [];
  
    const orderInformation = {
      email,
      firstName,
      lastName,
      phone,
      street,
      buildingNumber,
      postalCode,
      city,
      notes,
      shippingMethod,
      promoCode,
      subtotal,
      shippingCost,
      tax,
      total,
      discount,
      fileUrls: files.map((item) => ({
        productId: item.id,
        urls: item.fileUrls, // Map file URLs for each product
      })),
    };
  
    console.log('Submitting order:', orderInformation);
  
    try {
      const response = await fetch('/api/checkout-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderInformation,
          cartItems: files, // Ensure cartItems is included
        }),
      });
  
      const result = await response.json();
  
      if (response.ok && result.status === 'success') {
        console.log('Emails sent successfully');
      } else {
        console.error('Error sending emails:', result.error || 'Server error');
      }
    } catch (error) {
      // Handle the case where email fails to send but proceed with the PayU process
      console.error('Error sending email:', error.message);
    } finally {
      // Proceed to payment even if email fails
      await handlePayUPayment(orderInformation, files);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-medium text-gray-900">Dane zamawiającego</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black">Imię</label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black">Nazwisko</label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">Numer telefonu</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="street" className="block text-sm font-medium text-black">Ulica</label>
                <input
                  id="street"
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="buildingNumber" className="block text-sm font-medium text-black">Numer budynku i lokalu</label>
                <input
                  id="buildingNumber"
                  type="text"
                  required
                  value={buildingNumber}
                  onChange={(e) => setBuildingNumber(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-black">Kod pocztowy</label>
                <input
                  id="postalCode"
                  type="text"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-black">Miejscowość</label>
                <input
                  id="city"
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full p-2 rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-black">Uwagi do zamówienia</label>
                <textarea
                  id="notes"
                  rows="4" // You can adjust the number of rows to fit your design
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Wpisz tutaj swoje uwagi do zamówienia, numer paczkomatu jeżeli wybrałeś tę opcje wysyłki oraz dane do faktury jeżeli potrzebujesz fakturę z numerem NIP"
                  className="block w-full rounded-sm px-2 py-2 border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full rounded-sm border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-300 px-4 py-3 text-base font-medium text-black hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Zamawiam i płacę
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-5">
            <section
              aria-labelledby="summary-heading"
              className="bg-red-300 px-4 py-6 sm:p-6 lg:p-8 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            >
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Podsumowanie zamówienia
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-black">Suma zamówienia</dt>
                  <dd className="text-sm font-medium text-gray-900">{subtotal.toFixed(2)} zł</dd>
                </div>
                <div className="flex items-center justify-between border-t border-black pt-4">
                  <dt className="text-sm text-black">Koszt dostawy</dt>
                  <dd className="text-sm font-medium text-gray-900">{shippingCost.toFixed(2)} zł</dd>
                </div>
                <div className="flex items-center justify-between border-t border-black pt-4">
                  <dt className="text-sm text-black">W tym podatek (23% VAT)</dt>
                  <dd className="text-sm font-medium text-gray-900">{tax.toFixed(2)} zł</dd>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between border-t border-black pt-4">
                    <dt className="text-sm text-black">Rabat</dt>
                    <dd className="text-sm font-medium text-red-600">- {discount.toFixed(2)} zł</dd>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-black pt-4">
                  <dt className="text-base font-medium text-gray-900">Łączna suma do zapłaty</dt>
                  <dd className="text-base font-medium text-gray-900">{total.toFixed(2)} zł</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}