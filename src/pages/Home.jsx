import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="h-[calc(100vh-5rem)] bg-gray-900 text-white flex items-center justify-center px-6 md:px-12">
            <div className="max-w-6xl w-full text-center md:text-left">
                {/* Animated Text */}
                <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4">
                    Hello,{" "}
                    <motion.span
                        className="text-blue-500 inline-block"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Visitor 👋
                    </motion.span>
                </h1>

                <p className="text-lg md:text-2xl text-gray-300 max-w-3xl">
                    I’m Bhanu Sharma, a passionate Full-Stack Developer.
                    I specialize in building modern, scalable web applications using the MERN stack.
                </p>

                {/* Button (Kept as you wanted) */}
                <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <button onClick={() => window.open('https://drive.google.com/file/d/1Lk0euzpFP7JCnjmFmLA2klK587G93Gnw/view?usp=drivesdk', '_blank')} className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
                        Get My Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
