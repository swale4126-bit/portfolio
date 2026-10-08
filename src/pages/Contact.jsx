import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (status === 'loading') return;
        
        setStatus('loading');

        emailjs.sendForm(
            "service_72mmmpq",
            "template_2fyzdz6",
            form.current,
            "w2A2lsW-6OH1PzfmK"
        )
            .then(() => {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            })
            .catch(() => {
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            });
    };

    const contactMethods = [
        {
            title: "Email",
            value: "swale4126@gmail.com",
            icon: <FaEnvelope className="text-2xl text-blue-500" />,
            link: "mailto:swale4126@gmail.com",
            buttonText: "Send Email"
        },
        {
            title: "Telegram",
            value: "Available for chat",
            icon: <FaTelegramPlane className="text-2xl text-blue-400" />,
            link: "https://t.me/wsm51921",
            buttonText: "Message Me"
        },
        {
            title: "Phone",
            value: "Available for calls",
            icon: <FaPhoneAlt className="text-2xl text-green-500" />,
            link: "tel:+251963621997",
            buttonText: "Call Now"
        }
    ];

    return (
        <section id="contact" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        I'm open to discussing web development projects, collaboration, and opportunities to build useful software solutions. Feel free to get in touch.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Contact Methods */}
                    <div className="lg:col-span-5 space-y-6">
                        {contactMethods.map((method, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shrink-0">
                                    {method.icon}
                                </div>
                                <div className="flex-grow w-full">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                                    <p className="text-gray-500 mb-4 text-sm">{method.value}</p>
                                    <a 
                                        href={method.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block w-full sm:w-auto text-center bg-gray-50 border border-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 hover:border-gray-300 transition-colors duration-200"
                                    >
                                        {method.buttonText}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>
                        
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all duration-200"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all duration-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows="5"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all duration-200 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full text-white px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-sm ${
                                    status === 'loading' 
                                        ? 'bg-blue-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5'
                                }`}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center font-medium border border-green-100">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center font-medium border border-red-100">
                                    Failed to send message. Please try again or use direct contact methods.
                                </div>
                            )}

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Contact;