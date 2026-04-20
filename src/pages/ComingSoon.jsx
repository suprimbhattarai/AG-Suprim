import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function ComingSoon() {
  return (
    <div className="h-screen w-full bg-[#e5e5e5] relative font-semibold overflow-hidden">
      <nav className="flex justify-between items-center px-16 py-6">
        <Link to="/" className="flex flex-col items-center cursor-pointer">
          <img src={logo} className="w-10" />
          <p className="text-xs mt-1">SUPRIM CLOTHING</p>
        </Link>
      </nav>

      <div className="flex flex-col items-center justify-center h-[75%] text-center z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[70px] leading-tight"
        >
          COMING <br /> SOON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg"
        >
          This page is under development
        </motion.p>

        <Link
          to="/"
          className="mt-8 bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition"
        >
          GO BACK
        </Link>
      </div>

      <div
        className="absolute left-0 bottom-0 w-[55%] h-[75%]"
        style={{
          background: "#cbcf0a",
          clipPath: "polygon(0 100%, 0 0, 70% 100%)",
        }}
      />

      <div
        className="absolute right-0 top-0 w-[35%] h-full"
        style={{
          background: "#cbcf0a",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%)",
        }}
      />
    </div>
  );
}
