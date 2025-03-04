"use client";

import { useState, useEffect, useContext } from "react";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { CartContext } from "./CartContext";
import { useTranslation } from 'react-i18next';

export default function ProductPage({ params }) {
  const { t } = useTranslation('productPage');
  const { artist, locale, id } = params;
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 1) Destructure cartItems for debugging and addToCart for adding items
  const { cartItems, addToCart } = useContext(CartContext);

  // 2) Debug whenever cartItems changes
  useEffect(() => {
    console.log("DEBUG: cartItems updated:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/paintingStore.json");
        const paintings = await res.json();
        const selectedPainting = paintings.find((p) => p.id === parseInt(id));

        if (selectedPainting) {
          // Transform painting data to match product template structure
          const transformedProduct = {
            id: selectedPainting.id,
            name: selectedPainting.name,
            price: parseFloat(selectedPainting.price), // Ensure price is a number
            rating: 5, // Default rating
            images: Object.keys(selectedPainting)
              .filter((key) => key.startsWith("imageSrc"))
              .map((key, index) => ({
                id: `${selectedPainting.id}-${index + 1}`,
                name: selectedPainting.name,
                src: selectedPainting[key],
                alt: selectedPainting.imageAlt || "Painting image",
              })),
            colors: [
              {
                name: selectedPainting.paintingSize,
                bgColor: "bg-gray-700",
                selectedColor: "ring-gray-700",
              },
            ],
            description: `<p>${selectedPainting.name} by ${selectedPainting.artist}</p>
                          <p>${t('size')}: ${selectedPainting.paintingSize}</p>`,
            details: [
              {
                name: "Details",
                items: [
                  `Dimensions: ${selectedPainting.width} x ${selectedPainting.height} px`,
                  `Material: ${
                    selectedPainting.paintingMaterial || "Not specified"
                  }`,
                ],
              },
            ],
          };
          setProduct(transformedProduct);
          setSelectedColor(transformedProduct.colors[0]);
        } else {
          console.error("Painting not found");
        }
      } catch (error) {
        console.error("Error fetching painting:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // 3) Debug inside the addToCart handler
  const handleAddToCart = () => {
    if (!selectedColor) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price, // Pass price as a number
      imageSrc: product.images[0]?.src, // Use the first image as default
      size: selectedColor.name,
      quantity: 1,
    };

    console.log("DEBUG: Attempting to add item to cart:", cartItem);
    addToCart(cartItem);
    console.log("DEBUG: cartItems length immediately after add:", cartItems.length);

    // Optionally, navigate to cart
    router.push(`/${locale}/${artist}/cart`);
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Painting not found.</div>;
  }
  
  return (
    <div className="bg-black max-w-7xl px-6 py-60 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium text-white uppercase hover:bg-gray-50 focus:ring-3 focus:ring-indigo-500/50 focus:ring-offset-4 focus:outline-hidden"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img alt={image.alt} src={image.src} className="size-full object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-selected:ring-indigo-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    alt={image.alt}
                    src={image.src}
                    className="aspect-square w-full object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-white">{product.name}</h1>
            <p className="mt-1 text-lg">{product.price.toFixed(2)} PLN</p>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="mt-1 text-sm text-white"
            />

            <button
              type="submit"
              className="mt-10 flex max-w-xs items-center justify-center rounded-md bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500"
              onClick={handleAddToCart}
            >
            {t('cart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
