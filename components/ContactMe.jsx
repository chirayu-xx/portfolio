import React, { InputHTMLAttributes } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from 'emailjs-com'
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactMe({}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();
  const [done, setDone] = useState(false)  

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.querySelector('#user_name').value;
    const email = form.current.querySelector('#user_email').value;
    const subject = form.current.querySelector('#subject').value;
    const message = form.current.querySelector('#message').value;
    try{
      
      if(!name || !email || !subject || !message){
        toast.error("Fill all the fields")
      }
      else if(!email.includes('@')){
        toast.error("Email not valid")
      }
      else{
      const loadingToast = toast.loading('Sending email...');
    // const loadingToast = toast.loading('Sending email...');
    emailjs.sendForm('service_5y1rroh', 'template_wb2o67x', form.current, 'Rz6bzaygqNZJLIE1l')
      .then((result) => {
        toast.dismiss(loadingToast);
        toast.success(`Thanks for contacting ${name}!`, {
          style: {
            border: '1px solid #F7AB0A',
            padding: '16px',
            borderRadius: '40px',
            color: '#F7AB0A',
          },
          iconTheme: {
            primary: '#F7AB0A',
            secondary: '#FFFAEE',
          },
        });
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
        });
      }
    }catch(err){
      toast.error(`Error sending email: ${error.message}`);
    }
    finally{
     
    }
  };
  return (
    
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <h3 className="absolute hidden md:inline top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col md:mt-20 space-y-10">
        <h4 className="text-xl md:text-4xl font-semibold text-center">
          Got You!!{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>+91 9586700639</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>cboss1436@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Chandigarh, India</p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-2 w-fit">
          <div className="flex space-x-2 w-80 md:w-full">
            <input name="user_name" id="user_name" placeholder="Name" className="contactInput" type="text" />
            <input name="user_email" id="user_email" placeholder="Email" className="contactInput" type="text"/>
          </div>
          <input placeholder="Subject" id="subject" className="contactInput w-96 md:w-full mx-auto" type="text" />
          <textarea {...register('message')}
            placeholder="Message"
            id="message"
            className="contactInput resize-none"
          />
          <button type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form> 
      </div>
    </div>
  );
}
