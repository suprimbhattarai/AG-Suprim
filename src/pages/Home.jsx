import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import image1 from "../assets/image1.png";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#e5e5e5] overflow-hidden relative font-semibold">
      <nav className="flex justify-between items-center px-16 py-6">
        <Link to="/" className="flex flex-col items-center cursor-pointer">
          <img src={logo} className="w-10" />
          <p className="text-xs tracking-wide mt-1">SUPRIM CLOTHING</p>
        </Link>

        <div className="flex items-center gap-12 text-lg">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">CONTACT</p>
          <p className="cursor-pointer">ABOUT</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-2 rounded-full cursor-pointer"
          >
            SHOP
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-between h-[80%] px-20 relative">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-[80px] leading-[85px]">
            SUPREME <br /> TO THE <br /> REAL OGS
          </h1>
          <Link
            to="/products"
            className="bg-black text-[40px] text-white px-6 py-2 rounded-full cursor-pointer"
          >
            SHOP NOW
          </Link>
        </motion.div>

        <motion.img
          src={image1}
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[500px] object-contain z-10"
        />

        <div
          className="absolute left-0 bottom-0 w-[55%] h-[75%] z-0"
          style={{
            background: "#cbcf0a",
            clipPath: "polygon(0 100%, 0 0, 70% 100%)",
          }}
        />

        <div
          className="absolute right-0 top-0 w-[35%] h-full z-0"
          style={{
            background: "#cbcf0a",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%)",
          }}
        />
      </div>
    </div>
  );
}
