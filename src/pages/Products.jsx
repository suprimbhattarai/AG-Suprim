import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((item) => item.category === "men's clothing")
          .slice(0, 4);
        setProducts(filtered);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen w-full bg-[#e5e5e5] px-16 py-6 relative font-semibold">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center cursor-pointer">
          <img src={logo} className="w-10" />
          <p className="text-xs mt-1">SUPRIM CLOTHING</p>
        </Link>

        <h1 className="text-3xl">OUR PRODUCTS</h1>
      </div>

      <div className="flex items-center justify-center h-[75%] relative">
        <div
          className="absolute right-0 top-0 w-[40%] h-full"
          style={{
            background: "#cbcf0a",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%)",
          }}
        />

        <div className="grid grid-cols-4 gap-16 z-10">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse text-center">
                <div className="h-40 w-32 bg-gray-300 mx-auto"></div>
                <div className="h-4 bg-gray-300 mt-4 w-24 mx-auto"></div>
                <div className="h-4 bg-gray-300 mt-2 w-16 mx-auto"></div>
              </div>
            ))}

          {!loading &&
            products.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.08 }}
                className="text-center cursor-pointer"
              >
                <img src={item.image} className="h-40 mx-auto object-contain" />
                <h2 className="mt-4 text-sm">{item.title}</h2>
                <p className="mt-2">Rs.{item.price}</p>
              </motion.div>
            ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button className="bg-black text-white px-8 py-2 rounded-full cursor-pointer hover:scale-105 transition">
            MORE
          </button>
        </div>
      </div>
    </div>
  );
}
