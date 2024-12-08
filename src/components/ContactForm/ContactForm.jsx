import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { FaSpinner, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [buttonText, setButtonText] = useState("SUBMIT");

    const [state, handleSubmit] = useForm("xdkozlar");

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Thank you for your message!");

            // Reset the form and change button to success state
            setFormData({ name: "", email: "", phone: "", message: "" });
            setFormErrors({});
            setButtonText("Submitted");

            // Change button back to normal after a few seconds
            setTimeout(() => {
                setButtonText("SUBMIT");
            }, 2000);
        }
    }, [state.succeeded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) errors.email = "Email is required";
        else if (!emailPattern.test(formData.email))
            errors.email = "Please enter a valid email address";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.message) errors.message = "Message is required";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e); // Calls Formspree's submit handler if validation passes
        }
    };

    return (
        <div className="w-full bg-white rounded-[12px] border border-gray-200 p-[20px] md:p-[44px]">
            <h1 className="heading-4 w-700 mb-8">Send Us Message</h1>

            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        required
                        disabled={state.submitting}
                    />
                    {formErrors.name && (
                        <p className="text-red-500 text-sm">
                            {formErrors.name}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        required
                        disabled={state.submitting}
                    />
                    {formErrors.email && (
                        <p className="text-red-500 text-sm">
                            {formErrors.email}
                        </p>
                    )}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        required
                        disabled={state.submitting}
                    />
                    {formErrors.phone && (
                        <p className="text-red-500 text-sm">
                            {formErrors.phone}
                        </p>
                    )}
                </div>

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                        required
                        disabled={state.submitting}
                    />
                    {formErrors.message && (
                        <p className="text-red-500 text-sm">
                            {formErrors.message}
                        </p>
                    )}
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary-golden w-full !justify-center flex items-center gap-2"
                    disabled={state.submitting}
                >
                    {state.submitting ? (
                        <>
                            <FaSpinner className="animate-spin" /> Sending...
                        </>
                    ) : buttonText === "Submitted" ? (
                        <>
                            <FaCheckCircle /> Submitted!
                        </>
                    ) : (
                        buttonText
                    )}
                </button>
            </form>
        </div>
    );
}
