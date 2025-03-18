import { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, formData);
            setStatus(res.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-6 md:mb-10">
                Contact Me
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 px-6 md:px-10 py-8 md:py-12 rounded-2xl shadow-lg border border-gray-700 w-full max-w-lg flex flex-col gap-5 md:gap-6"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 text-lg bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 text-lg bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 md:p-4 text-lg bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 md:py-4 rounded-lg transition"
                >
                    Send Message
                </button>
            </form>
            {status && <p className="mt-4 text-green-400">{status}</p>}
        </div>
    );
};

export default Contact;
