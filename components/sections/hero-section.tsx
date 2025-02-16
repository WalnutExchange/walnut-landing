import { WaitlistForm } from "@/components/waitlist-form";
import { useContext } from "react";
import { WaitlistFormContext } from "@/components/waitlist-form-context";

export function HeroSection() {
  const formRef = useContext(WaitlistFormContext);

  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left'>
            <h1 className='text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl'>
              Expand Your Hiring Reach Beyond <br />
              Internal Referrals
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              Finding top talent is easy—getting them to engage is the real
              challenge.
            </p>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              We connect companies with industry-specific connectors and
              experienced professionals with deep networks who bring pre-vetted
              candidates directly to you.
            </p>
            <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
              <WaitlistForm ref={formRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
