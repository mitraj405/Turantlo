import React, {useState, useRef} from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
// require('dotenv').config();


function Contact() {
  const form = useRef();

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    
    if (!message || !name || !mobile || !email) {
      toast.error('Please fill all the fields');
      return;
    }
    console.log("Button clicked");
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
      toast.error('Name should contain only alphabets and spaces');
      return;
    }
    const mobileRegex = /^[789]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error('Mobile number should be 10 digits and start with 7, 8 or 9');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
    const messageRegex = /^[\x20-\x7E]{1,250}$/;
    if (!messageRegex.test(message)) {
      toast.error('Message should be less than 250 characters');
      return;
    }
    //These attributes has to be given for email to 
    emailjs
    .sendForm("Service_ID", "Template_ID", form.current, {
      publicKey: "Public_Key",
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        toast.success('Message sent successfully');
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Failed to send message');
      },
    );
  }

  return (
    <div className='bg-[#F7F9FF] text-black flex flex-col justify-center items-center space-y-6 p-6 md:p-12 rounded-2xl'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-[#4C4CDB] font-bold text-[30px] md:text-[40px] leading-[40px] md:leading-[52px]'>
          Contact Us
        </h1>
        <p className='text-[#6F6FDC] font-medium text-[16px] md:text-[18px] leading-[22px] md:leading-[24px]'>
          If you have a query, please get in touch with us, we will revert back quickly
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between md:space-x-6 w-full max-w-4xl'>
        <div className='w-full md:w-1/2 bg-[#FFFFFF] p-6 mb-6 md:mb-0'>
          <div>
            <h1 className='text-[#4C4CDB] font-bold text-[24px] leading-[32px]'>Leave a Message</h1>
            <p className='text-[#868686] font-normal text-[18px] leading-[28px]'>
              Fill up form below, our team will get back soon
            </p>
          </div>
          <form className='space-y-4 my-6' ref={form}>
            <div className="relative mb-4">
              <label htmlFor="name" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="mobile" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                name="user_phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="absolute -top-3 left-2 bg-white px-1 text-sm text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                maxLength="250"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="text-right text-sm text-gray-500">{message.length}/250</div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='w-full md:w-1/2'>
          <div>
            <h1 className='text-[#4C4CDB] font-bold text-[24px] leading-[32px]'>Have any Questions</h1>
            <p className='text-[#868686] font-normal text-[18px] leading-[28px]'>
              If you have any question about our product, service, payment or company, feel free to contact us.
            </p>
          </div>
          <div className="my-10 space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-full">
                <FaEnvelope className="text-purple-600" size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-medium leading-[24px]">Email</h3>
                <p className="text-[#868686] font-normal text-[16px] leading-[24px]">support123@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-100 p-4 rounded-full">
                <FaPhone className="text-red-600" size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-medium leading-[24px]">Call Us</h3>
                <p className="text-[#868686] font-normal text-[16px] leading-[24px]">+91 8998578397</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-teal-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-teal-600" size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-[18px] font-medium leading-[24px]">Visit Us</h3>
                <p className="text-[#868686] font-normal text-[16px] leading-[24px]">
                  123 Healthcare Drive, Suite 456,<br />
                  Bangalore, Karnataka, India - 560001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
