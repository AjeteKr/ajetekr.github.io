import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactPage = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_64rcr3g', 'template_ddw0d4h', form.current, 'jC5bQ3Z0snuT2lOae')
            .then(() => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error.text);
            });
    };
    return (
        <div id='contact' className="min-h-screen bg-gradient-to-r from-purple-900 to-black  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-[#a484c7] p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-4xl font-bold text-[#2c2544] mb-6">Contact</h2>
                <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="user_name" className="block text-sm font-medium text-[#b8eac7]">Name</label>
                        <input id="user_name" name="user_name" type="text" required className="mt-1 block w-full border border-[#ff7062] rounded-md shadow-sm p-2 focus:ring-[#fc8b79] focus:border-[#fc8b79]" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="user_email" className="block text-sm font-medium text-[#b8eac7]">Email</label>
                        <input id="user_email" name="user_email" type="email" required className="mt-1 block w-full border border-[#ff7062] rounded-md shadow-sm p-2 focus:ring-[#fc8b79] focus:border-[#fc8b79]" placeholder="Email address" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#b8eac7]">Message</label>
                        <textarea id="message" name="message" required className="mt-1 block w-full border border-[#ff7062] rounded-md shadow-sm p-2 focus:ring-[#fc8b79] focus:border-[#fc8b79]" placeholder="Your Message" rows="5"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#660f53] hover:bg-[#442342] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fc8b79]">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ContactPage;
