import { Link } from "react-router-dom";

const StickyCTA = () => {
  return (
    <div className="sticky bottom-0 z-50 w-full py-3 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          {/* Glassy background with animation */}
          <div className="absolute inset-0 bg-[#09081e] bg-opacity-90 backdrop-blur-md rounded-xl"></div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl p-[1px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9ec3f] to-[#f9ec3f80] opacity-70 rounded-xl animate-[pulse_3s_infinite]"></div>
          </div>

          {/* Content */}
          <div className="relative flex justify-between items-center px-6 py-4">
            <div className="flex items-center">
              <span className="text-[#f9ec3f] text-lg font-bold mr-2">✨</span>
              <span className="text-white font-semibold text-lg">
                Get free consultation now
              </span>
            </div>

            <Link
              to="/contact-us"
              className="relative z-10 bg-[#f9ec3f] text-[#09081e] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#f9ec3f]/30"
            >
              <span className="relative z-10">Book a free call</span>
              <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyCTA;
