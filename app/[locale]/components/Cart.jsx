"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "/app/[locale]/components/CartContext.js";
import { useTranslation } from "react-i18next";

export default function Cart({ artist, locale, id }) {
  const router = useRouter();

  const { t } = useTranslation("cart"); // Use 'cart' namespace

  const {
    cartItems,
    removeFromCart,
    shippingMethod,
    shippingCost,
    calculateSubtotal,
    calculateTotal,
    updateShippingMethod,
  } = useContext(CartContext);

  // Debugging cartItems
  useEffect(() => {
    console.log("DEBUG: cartItems in Cart page (on render):", cartItems);
  }, []);

  useEffect(() => {
    console.log("DEBUG: cartItems updated:", cartItems);
  }, [cartItems]);

  // Handle shipping method change
  const handleShippingChange = (e) => {
    updateShippingMethod(e.target.value);
    console.log("DEBUG: Shipping method changed to:", e.target.value);
  };

 // Go to Checkout
 const handleCheckout = () => {
  console.log("DEBUG: Checkout button clicked.");
  if (!cartItems.length) {
    alert("Your cart is empty. Please add items to proceed.");
    console.error("DEBUG: Checkout attempted with an empty cart.");
    return;
  }
  console.log("DEBUG: Proceeding to checkout with cart items:", cartItems);

  router.push(`/${locale}/${artist}/checkout`);
};

return (
  <>
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("cart_title")}
        </h1>

        <form className="mt-12">
          {/* Cart Items */}
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              {t("cart_items")}
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
                        {t("size")}: {item.size}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-white">
                        {t("quantity")}: {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="text-sm font-medium text-red-600 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        {t("remove")}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order Summary */}
          <section className="mt-10">
            <h2 className="text-lg font-medium text-white">
              {t("order_summary")}
            </h2>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-white">{t("subtotal")}</dt>
                <dd className="text-sm font-medium text-white">
                  {calculateSubtotal().toFixed(2)} PLN
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-white">{t("shipping")}</dt>
                <dd className="text-sm font-medium text-white">
                  {shippingCost.toFixed(2)} PLN
                </dd>
              </div>
              <div className="flex justify-between border-t pt-4">
                <dt className="text-base font-medium text-white">{t("total")}</dt>
                <dd className="text-base font-medium text-white">
                  {calculateTotal().toFixed(2)} PLN
                </dd>
              </div>
            </dl>

            {/* Shipping Method */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-white">
                {t("shipping_method")}
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
                    {t("shipping_standard")}
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
                    {t("shipping_express")}
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
                    {t("shipping_pickup")}
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
                {t("checkout")}
              </button>
            </div>

            {/* Go back */}
            <div className="mt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
              >
                &larr; {t("go_back")}
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  </>
);
}

