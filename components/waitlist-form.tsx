"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

export type WaitlistFormRef = {
  openForm: () => void;
};

export const WaitlistForm = forwardRef<WaitlistFormRef>((props, ref) => {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    linkedinUrl: "",
  });

  useImperativeHandle(ref, () => ({
    openForm: () => {
      setShowWaitlist(true);
      document
        .getElementById("waitlist-form")
        ?.scrollIntoView({ behavior: "smooth" });

      // Focus the first name input after the scroll animation completes
      setTimeout(() => {
        document
          .querySelector<HTMLInputElement>('input[name="firstName"]')
          ?.focus();
      }, 800);
    },
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Submitted data:", formData);

    // Show success message
    setShowWaitlist(false);
    setShowSuccess(true);

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      linkedinUrl: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id='waitlist-form' className='space-y-4 scroll-mt-32'>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          showWaitlist || showSuccess ? "hidden" : "block"
        }`}
      >
        <Button
          onClick={() => setShowWaitlist(true)}
          className='bg-gray-900 hover:bg-gray-800 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center transition-colors w-full sm:w-auto'
        >
          Join the waitlist
          <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>

      <div
        className={`transform transition-all duration-300 ease-in-out ${
          showWaitlist ? "block" : "hidden"
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-3 sm:max-w-md'
        >
          <div className='grid grid-cols-2 gap-3'>
            <Input
              type='text'
              name='firstName'
              placeholder='First name'
              value={formData.firstName}
              onChange={handleChange}
              required
              className='rounded-full py-4 px-6 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
            />
            <Input
              type='text'
              name='lastName'
              placeholder='Last name'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='rounded-full py-4 px-6 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
            />
          </div>
          <Input
            type='text'
            name='companyName'
            placeholder='Company name'
            value={formData.companyName}
            onChange={handleChange}
            required
            className='rounded-full py-4 px-6 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
          />
          <Input
            type='email'
            name='email'
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
            required
            className='rounded-full py-4 px-6 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
          />
          <Input
            type='url'
            name='linkedinUrl'
            placeholder='LinkedIn profile URL'
            value={formData.linkedinUrl}
            onChange={handleChange}
            required
            className='rounded-full py-4 px-6 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
          />
          <Button
            type='submit'
            className='bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-4 inline-flex items-center justify-center transition-colors w-full'
          >
            Submit
          </Button>
        </form>
      </div>

      <div
        className={`transform transition-all duration-300 ease-in-out ${
          showSuccess ? "block" : "hidden"
        }`}
      >
        <div className='flex items-center gap-2 text-gray-900'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-900'>
            <Check className='h-5 w-5 text-white' />
          </div>
          <p className='text-lg'>
            Thanks! We'll let you know when Walnut Exchange is ready.
          </p>
        </div>
      </div>
    </div>
  );
});
