"use client";

import { useContext } from "react";
import { CartContext } from "/app/[locale]/components/CartContext.js"; // Adjust the path as necessary
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";

export default function Cart( {params}) {
const { artist } = params;
const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const handleCheckout = async (event) => {
    event.preventDefault();
    
    // Convert the orderData to JSON string
    const orderDataString = JSON.stringify(orderData);

    // Encode the orderDataString to make it URL-safe
    const encodedOrderData = encodeURIComponent(orderDataString);

    // Push to the dynamic route with the encoded parameters
    router.push(`/checkout/${encodedOrderData}`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          {/* Cart Items */}
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            {cartItems.length > 0 ? (
              <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
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
                          <h4 className="text-sm font-medium text-gray-700">
                            {item.name}
                          </h4>
                          <p className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Size: {item.size}
                        </p>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                              updateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            className="text-indigo-600 hover:text-indigo-500"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
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
            ) : (
              <p className="text-center text-sm text-gray-500">Your cart is empty.</p>
            )}
          </section>

          {/* Order Summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    ${calculateSubtotal().toFixed(2)}
                  </dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={() => handleCheckout()}
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p>
                or{" "}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
