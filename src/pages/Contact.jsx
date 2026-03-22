import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_72mmmpq",
            "template_2fyzdz6",
            form.current,
            "w2A2lsW-6OH1PzfmK"
        )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch(() => {
                alert("Failed to send message.");
            });

        e.target.reset();
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Contact Me
            </motion.h1>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-2xl mx-auto space-y-6"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full border p-3 rounded-lg"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full border p-3 rounded-lg"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full border p-3 rounded-lg"
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Send Message
                </button>

            </form>

        </div>
    );
}

export default Contact;