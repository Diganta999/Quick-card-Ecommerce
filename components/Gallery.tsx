"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptop } from "react-icons/fa"; // React Icon
import {
  CardFlip,
  CardFlipBack,
  CardFlipContent,
  CardFlipFront,
  CardFlipHeader,
  CardFlipTitle,
} from "./ui/card-flip";

const gadgets = [
  { id: 1, name: "Bose QuietComfort 45", description: "Powerful performance for creators and developers.", price: "$1999", image: "/assets/bose_headphone_image.png" },
  { id: 2, name: "ASUS ROG Zephyrus G16", description: "Top-tier noise cancellation with premium comfort.", price: "$399", image: "/assets/asus_laptop_image.png" },
  { id: 3, name: "Samsung Galaxy S23", description: "Built for adventure with advanced tracking.", price: "$799", image: "/assets/samsung_s23phone_image.png" },
  { id: 4, name: "PlayStation 5", description: "Titanium build with A17 Pro chip.", price: "$1199", image: "/assets/playstation_image.png" },
  { id: 5, name: "MacBook Pro 16", description: "Flagship Android tablet for productivity.", price: "$999", image: "/assets/macbook_image.png" },
  { id: 6, name: "Garmin Venu 2", description: "Capture your adventures in 5.3K HDR video.", price: "$499", image: "/assets/venu_watch_image.png" },
  { id: 7, name: "PlayStation 5", description: "Next-gen gaming with stunning graphics.", price: "$499", image: "/assets/cannon_camera_image.png" },
  { id: 8, name: "Canon EOS R5", description: "Lightweight drone with 4K cinematic capture.", price: "$899", image: "/assets/product_details_page_apple_earphone_image1.png" },
];

export default function CardFlipGallery() {
  const [visibleCount, setVisibleCount] = useState(8);
  const filteredGadgets = gadgets.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prev => prev + 4);

  return (
    <div className="min-h-screen py-16 mt-5 ">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-3"
          >
            <FaLaptop className="text-indigo-500" />
            Explore the Future of Tech
          </motion.h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover Cool Gadgets
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredGadgets.map((gadget) => (
              <motion.div
                key={gadget.id}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex justify-center"
              >
                <CardFlip>
                  {/* Front */}
                  <CardFlipFront>
                    <CardFlipHeader>
                      <CardFlipTitle>{gadget.name}</CardFlipTitle>
                    </CardFlipHeader>
                    <CardFlipContent>
                      <img
                        src={gadget.image}
                        alt={gadget.name}
                        className="w-full h-64 object-contain rounded-xl"
                      />
                    </CardFlipContent>
                  </CardFlipFront>

                  {/* Back */}
                  <CardFlipBack>
                    <CardFlipHeader>
                      <CardFlipTitle>{gadget.name}</CardFlipTitle>
                    </CardFlipHeader>
                    <CardFlipContent>
                      <p className="text-gray-700 mb-2">{gadget.description}</p>
                      <p className="text-gray-900 font-bold text-lg">{gadget.price}</p>
                    </CardFlipContent>
                  </CardFlipBack>
                </CardFlip>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < gadgets.length && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#eef2ff", borderColor: "#6366f1" }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Load More Gadgets 🎴
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
