"use client";

import { Footer } from "@/components/sections/footer";
import {
  Building2,
  Users,
  Target,
  Clock,
  DollarSign,
  Rocket,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { WhyReferralsWork } from "@/components/sections/why-referrals-work";
import { WaitlistForm } from "@/components/waitlist-form";

export default function AboutUsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className='py-12 sm:py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
              <h1 className='text-3xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl text-center'>
                <span className='block mb-2'>Why we created</span>
                <span className='block mb-4'>Walnut Exchange</span>
              </h1>
              <div className='mt-12 text-left space-y-4'>
                <p className='text-lg sm:text-xl text-gray-600 leading-relaxed'>
                  Remember the last time you were looking for a new job—did you
                  get hired through a personal introduction? Did you reach out
                  to past coworkers, friends, or industry contacts? The best
                  opportunities often come through trusted connections.
                </p>
                <p className='text-lg sm:text-xl text-gray-600 leading-relaxed'>
                  Hiring has always been one of the most critical decisions a
                  company makes. But in today's world, it has become
                  increasingly complex and frustrating.
                </p>
                <p className='text-lg sm:text-xl text-gray-600 leading-relaxed'>
                  AI-driven applications, recruiter spam, and rising hiring
                  costs have created an environment where finding the right
                  talent feels harder than ever.
                </p>
                <p className='text-lg sm:text-xl text-gray-600 leading-relaxed'>
                  We built Walnut Exchange because we've been in those shoes,
                  and we know there's a better way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-12 sm:py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto space-y-12 sm:space-y-16'>
              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                  1. Hiring Should Be Efficient and Cost-Effective
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Think about the last few roles you've hired for.{" "}
                  <span className='font-medium text-gray-900'>
                    How much time, energy, and money did it take?
                  </span>
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Between job boards flooded with{" "}
                  <span className='font-medium text-gray-900'>
                    unqualified applicants
                  </span>
                  , internal recruiters juggling multiple priorities, and agency
                  fees reaching{" "}
                  <span className='font-medium text-gray-900'>
                    $30K+ per hire
                  </span>
                  , it feels like hiring has become a numbers game—one where
                  companies pay the price.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  But hiring shouldn't be about who can afford the highest
                  recruiting fees—it should be about who can{" "}
                  <span className='font-medium text-gray-900'>
                    access the right talent, quickly and efficiently
                  </span>
                  .
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                  2. AI and Mass Applications Have Overwhelmed Recruiters
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  If you talk to any in-house recruiter today, they'll tell you
                  the same thing:{" "}
                  <span className='font-medium text-gray-900'>
                    they're drowning in resumes
                  </span>
                  .
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  <span className='font-medium text-gray-900'>
                    AI-driven job applications
                  </span>{" "}
                  and{" "}
                  <span className='font-medium text-gray-900'>
                    mass "one-click apply"
                  </span>{" "}
                  have made it easier than ever for unqualified candidates to
                  apply, leaving hiring teams with the impossible task of
                  filtering through hundreds of irrelevant resumes.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  The irony? While recruiters are stuck in this cycle,{" "}
                  <span className='font-medium text-gray-900'>
                    the best candidates aren't applying at all
                  </span>
                  .
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                  3. Top Talent Rarely Applies to Jobs
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  The truth is,{" "}
                  <span className='font-medium text-gray-900'>
                    the most valuable professionals in any industry don't
                    actively look for jobs
                  </span>
                  . They aren't scrolling job boards or replying to recruiter
                  emails. They're too busy excelling in their current roles.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  But they do listen to the people they trust—
                  <span className='font-medium text-gray-900'>
                    former colleagues, mentors, and industry peers
                  </span>
                  . That's why referrals have always been the most effective way
                  to hire top talent.
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Walnut Exchange takes this principle and{" "}
                  <span className='font-medium text-gray-900'>scales it</span>,
                  so companies get connected to{" "}
                  <span className='font-medium text-gray-900'>
                    high-quality, pre-vetted candidates
                  </span>{" "}
                  without relying solely on their internal networks.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                  4. Traditional Recruiting Firms Still Have a Place—But
                  Companies Need More Options
                </h2>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Recruiting firms play an important role in hiring, especially
                  for executive searches and highly specialized roles. But does
                  every hire justify a{" "}
                  <span className='font-medium text-gray-900'>
                    $30K–$40K placement fee
                  </span>
                  ?
                </p>
                <p className='text-lg text-gray-600 leading-relaxed'>
                  Most companies don't need to pay high contingency fees for
                  every hire—they just need a{" "}
                  <span className='font-medium text-gray-900'>
                    smarter way to access top talent
                  </span>{" "}
                  when they need it. That's why we created Walnut Exchange.
                </p>
                <div className='mt-6 space-y-2'>
                  <p className='text-xl font-semibold text-gray-900'>
                    A referral-driven hiring platform that connects companies
                    with trusted industry professionals who introduce top
                    talent.
                  </p>
                  <p className='text-xl font-semibold text-gray-900'>
                    It's not just hiring—it's hiring the way it should be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyReferralsWork />

        <div className='pb-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
              <p className='text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 text-left'>
                Hiring doesn't have to be expensive, time-consuming, or
                unpredictable. Walnut Exchange gives you instant access to
                pre-vetted, referral-based talent—without the traditional
                recruiting fees.
              </p>
              <div className='flex flex-col items-center'>
                <div className='w-full sm:max-w-md flex flex-col items-center'>
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
