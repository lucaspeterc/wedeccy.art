"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "/app/[locale]/components/CartContext.js";
import { Navbar } from "/app/[locale]/components/Navbar";
import Footer from "/app/[locale]/components/Footer";

export default function Cart({ params }) {
  const router = useRouter();
  const { locale, artist } = params;

  const {
    cartItems,
    removeFromCart,
    shippingMethod,
    shippingCost,
    calculateSubtotal,
    calculateTotal,
    updateShippingMethod,
  } = useContext(CartContext);

  // Handle shipping method change
  const handleShippingChange = (e) => {
    updateShippingMethod(e.target.value);
  };

  // Go to Checkout
  const handleCheckout = () => {
    if (!cartItems.length) {
      alert("Your cart is empty. Please add items to proceed.");
      return;
    }
    router.push("/checkout");
  };

  return (
    <>
      <Navbar artist={artist} locale={locale} />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12">
            {/* Cart Items */}
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {cartItems.map((item) => (
                  <li key={`${item.id}-${item.size}`} className="flex py-6">
                    <div className="shrink-0">
                      <img
                        alt={item.imageAlt || item.name}
                        src={item.imageSrc}
                        className="size-24 rounded-md object-cover sm:size-32"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-white">
                            {item.name}
                          </h4>
                          <p className="text-sm font-medium text-white">
                            {(item.price * item.quantity).toFixed(2)} PLN
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-white">
                          Size: {item.size}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-white">
                          Quantity: {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="text-sm font-medium text-red-600 hover:text-red-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order Summary */}
            <section className="mt-10">
              <h2 className="text-lg font-medium text-white">Order Summary</h2>
              <dl className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <dt className="text-sm text-white">Subtotal</dt>
                  <dd className="text-sm font-medium text-white">
                    {calculateSubtotal().toFixed(2)} PLN
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-white">Shipping</dt>
                  <dd className="text-sm font-medium text-white">
                    {shippingCost.toFixed(2)} PLN
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <dt className="text-base font-medium text-white">Total</dt>
                  <dd className="text-base font-medium text-white">
                    {calculateTotal().toFixed(2)} PLN
                  </dd>
                </div>
              </dl>

              {/* Shipping Method */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-white">
                  Shipping Method
                </h3>
                <fieldset className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="kurier-standard"
                      name="shipping-method"
                      type="radio"
                      value="Kurier Standard"
                      checked={shippingMethod === "Kurier Standard"}
                      onChange={handleShippingChange}
                      className="h-4 w-4 text-white border-gray-300 focus:ring-yellow-600"
                    />
                    <label
                      htmlFor="kurier-standard"
                      className="ml-3 text-sm text-white"
                    >
                      Kurier Standard (600.00 PLN)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="kurier-express"
                      name="shipping-method"
                      type="radio"
                      value="Kurier Express"
                      checked={shippingMethod === "Kurier Express"}
                      onChange={handleShippingChange}
                      className="h-4 w-4 text-white border-gray-300 focus:ring-yellow-600"
                    />
                    <label
                      htmlFor="kurier-express"
                      className="ml-3 text-sm text-white"
                    >
                      Kurier Express (800.00 PLN)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="odbior-osobisty"
                      name="shipping-method"
                      type="radio"
                      value="Odbiór osobisty"
                      checked={shippingMethod === "Odbiór osobisty"}
                      onChange={handleShippingChange}
                      className="h-4 w-4 text-white border-gray-300 focus:ring-yellow-600"
                    />
                    <label
                      htmlFor="odbior-osobisty"
                      className="ml-3 text-sm text-white"
                    >
                      Odbiór osobisty (Free)
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Checkout Button */}
              <div className="mt-10">
                <button
                  type="button"
                  className="w-full rounded-md bg-white px-4 py-3 text-base font-medium text-black shadow hover:bg-yellow-600"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>

              {/* Go back */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
                >
                  &larr; Back to Previous Page
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer artist={artist} locale={locale} />
    </>
  );
}
