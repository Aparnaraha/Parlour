import React from 'react';
import { Phone, X } from 'lucide-react';

/**
 * A modal component for displaying a call-to-action to a phone number.
 * It appears as an overlay and can be closed by the user.
 *
 * @param {object} props - Component props.
 * @param {boolean} props.show - Controls the visibility of the modal.
 * @param {function} props.onClose - A function to call when the modal needs to be closed.
 */
const CallModal = ({ show, onClose }) => {
    // We use a conditional render here. If show is false, the component returns null and nothing is rendered.
    if (!show) return null;

    return (
        // The main modal overlay.
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            {/* The modal content container. */}
            <div className="bg-[#21242c] text-white rounded-xl p-8 max-w-sm w-full relative border border-gray-700 shadow-2xl text-center">
                {/* The close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                {/* Phone icon from Lucide React */}
                <Phone size={48} className="text-yellow-400 mb-4 mx-auto" />
                {/* Modal title */}
                <h2 className="text-2xl font-bold mb-2">Call Now</h2>
                {/* Modal description */}
                <p className="text-gray-400 mb-4">You can reach us at:</p>
                {/* The phone number, styled as a link for direct calling on mobile devices. */}
                <a href="tel:+91 9755536829" className="text-3xl font-bold text-yellow-400 hover:underline">+91 9755536829</a>
                {/* Instructions for the user */}
                <p className="text-sm text-gray-500 mt-2">Tap the number to call directly.</p>
            </div>
        </div>
    );
};

export default CallModal;
