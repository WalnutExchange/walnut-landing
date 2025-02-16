import { ArrowRight, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { WaitlistFormContext } from "@/components/waitlist-form-context";

export function HowItWorks() {
  const waitlistFormRef = useContext(WaitlistFormContext);

  const handleJoinWaitlist = () => {
    waitlistFormRef?.current?.openForm();
  };

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Hiring Process Side */}
          <div className='bg-gray-50 rounded-xl p-8 relative flex flex-col'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                Hire on Walnut Exchange
              </h2>
              <div className='space-y-6'>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    1
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Post Your Hard-to-Fill Positions
                    </h3>
                    <p className='text-gray-600 mt-1'>
                      No upfront cost to get started.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    2
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Let Industry-Specific Connectors Introduce Candidates
                    </h3>
                    <p className='text-gray-600 mt-1'>
                      Trusted professionals with deep networks refer top talent.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    3
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Receive Interview-Ready, Pre-Vetted Talent
                    </h3>
                    <p className='text-gray-600 mt-1'>
                      Get highly qualified candidates ready for your hiring
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleJoinWaitlist}
              className='w-full mt-27 py-6 text-lg bg-gray-900 hover:bg-gray-800'
            >
              Join the waitlist
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>

          {/* Talent Connector Side */}
          <div className='bg-gray-50 rounded-xl p-8 flex flex-col'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-8'>
                For Talent Connectors
              </h2>
              <div className='space-y-6'>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    1
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Apply to Become a Talent Connector
                    </h4>
                    <p className='text-gray-600 mt-1'>
                      We are very selective about who can join the platform to
                      ensure the quality of referrals.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    2
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Start Making Referrals
                    </h4>
                    <p className='text-gray-600 mt-1'>
                      We've streamlined the process to save you time. As a
                      referrer, you also have the option to submit candidate
                      referrals anonymously, ensuring privacy and discretion.
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center'>
                    3
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Track & Get Paid
                    </h4>
                    <p className='text-gray-600 mt-1'>
                      Monitor your referral's interview progress within the
                      platform and earn between $5,000-$10,000 per successful
                      hire.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleJoinWaitlist}
              className='w-full mt-16 py-6 text-lg bg-gray-900 hover:bg-gray-800'
            >
              Join the waitlist
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
