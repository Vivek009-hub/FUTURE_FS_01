import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="w-full min-h-[90vh] bg-black text-white px-8 md:px-20 py-20">

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold mb-10">
                Contact <span className="text-cyan-400">Me</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
                    <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                        Interested in collaborating or have a project in mind? Reach out today to discuss
                        how we can work together to achieve your goals. Dedicated to providing high-quality
                        solutions and responsive communication — let’s build something exceptional together.
                    </p>

                    {/* CONTACT DETAILS */}
                    <div className="flex items-center gap-3 mb-3">
                        <FaEnvelope size={22} className="text-cyan-400" />
                        <p className="text-gray-200">vivekbarwal1982@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <FaPhoneAlt size={20} className="text-cyan-400" />
                        <p className="text-gray-200">+91 7454943117</p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-5 mt-4">
                        <a
                            href="https://facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-cyan-500 hover:bg-cyan-500 
               hover:shadow-[0_0_20px_#00eaff] transition-all cursor-pointer"
                        >
                            <FaFacebookF size={20} />
                        </a>

                        <a
                            href="https://x.com/VivekKu19822022"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-cyan-500 hover:bg-cyan-500 
               hover:shadow-[0_0_20px_#00eaff] transition-all cursor-pointer"
                        >
                            <FaTwitter size={20} />
                        </a>

                        <a
                            href="https://instagram.com/choudhary._.vivek/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-cyan-500 hover:bg-cyan-500 
               hover:shadow-[0_0_20px_#00eaff] transition-all cursor-pointer"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vivekkumar-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-cyan-500 hover:bg-cyan-500 
               hover:shadow-[0_0_20px_#00eaff] transition-all cursor-pointer"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>

                </div>

                {/* RIGHT FORM SIDE */}
                <div>
                    <form className="bg-black p-8 rounded-xl shadow-[0_0_20px_white] backdrop-blur-lg">
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full mb-4 p-3 rounded-md bg-black border border-white
                         focus:outline-none focus:ring-2 focus:ring-offset-white"
                        />

                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full mb-4 p-3 rounded-md bg-black border border-white
                         focus:outline-none focus:ring-2 focus:ring-offset-white"
                        />

                        <input
                            type="text"
                            placeholder="Enter Your Contact Number"
                            className="w-full mb-4 p-3 rounded-md bg-black border border-white
                         focus:outline-none focus:ring-2 focus:ring-offset-white"
                        />

                        <textarea
                            placeholder="Enter Your Message"
                            rows="4"
                            className="w-full mb-4 p-3 rounded-md bg-black border border-white
                         focus:outline-none focus:ring-2 focus:ring-offset-white"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-md 
                         hover:bg-cyan-300 hover:shadow-[0_0_25px_#00eaff] transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* FOOTER */}
            <p className="text-center text-gray-400 mt-16">
                Developed with ❤️ by Vivek Kumar © 2025
            </p>
        </div>
    );
};

export default Contact;
