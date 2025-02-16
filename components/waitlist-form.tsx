"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

export function WaitlistForm() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);

    // Show success message
    setShowWaitlist(false);
    setShowSuccess(true);

    // Reset form
    setEmail("");

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className='relative'>
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          showWaitlist || showSuccess
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
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
        className={`absolute top-0 left-0 w-full transform transition-all duration-300 ease-in-out ${
          showWaitlist
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <Input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='rounded-full py-4 px-6 flex-1 border-gray-300 focus:border-gray-900 focus:ring-gray-900'
          />
          <Button
            type='submit'
            className='bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-4 inline-flex items-center justify-center transition-colors'
          >
            Submit
          </Button>
        </form>
      </div>

      <div
        className={`absolute top-0 left-0 w-full transform transition-all duration-300 ease-in-out ${
          showSuccess
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
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
}
