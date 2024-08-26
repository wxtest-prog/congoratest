'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import Link from "next/link";

export default function SignIn() {


    const [ result,showresult ] = useState(false);

    const Result = () => {
        return (
            <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_1p0sr2u', 
            'template_91knf7t', 
            e.target,
             'BJhvAmcZrPtgQr8Ji'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


  return (

    
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold content-center">Sign Up For Our Waitlist</h1>
        </div>
        {/* Form */}
        <form className="grid gap-6 mb-6 md:grid-cols-1 px-20" action="" onSubmit={sendEmail}> 
        <div className="form-group">
                <input className="rounded-lg"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="rounded-md">
                <input className="rounded-lg"
                type="text"
                name="company"
                placeholder="Company"
                required
                />
            </div>

            <div className="rounded-md">
                <input className="rounded-lg"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="">
                <input className="rounded-lg"
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                />
            </div>

            <div className="form-group">
                <button className="btn-sm bg-gray-300 text-gray-800 shadow hover:bg-gray-50 mx-16" >Submit Now</button>
            </div>
        </form>

        <div className="text-green-500">
                {result ? <Result /> : null}
            </div> 
      </>
    </>
  );
  }
