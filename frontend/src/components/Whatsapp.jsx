import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const phoneNumber = "+918660890531"; // Replace with your WhatsApp number (e.g., 919876543210)
    const message = encodeURIComponent("Hello, I'm interested in your services!. Can i receive a ball back?");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
            style={{ width: "60px", height: "60px", zIndex: 9999 }}
        >
            <FaWhatsapp size={32} />
        </a>
    );
};

export default Whatsapp;
