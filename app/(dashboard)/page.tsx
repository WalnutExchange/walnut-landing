import {
  Building2,
  Users,
  Award,
  PiggyBank,
  Heart,
  Target,
  Mail,
  Linkedin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <main>
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <h1 className='text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl'>
                Talent Referral Done Right
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Walnut Exchange makes talent referrals simple, rewarding, and
                effective.
              </p>
              <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50 w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <div>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-gray-50'>
                <Building2 className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Our Platform
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  Walnut Exchange is a private, peer-to-peer talent referral
                  platform connecting top companies with pre-vetted candidates
                </p>
              </div>
            </div>

            <div className='mt-10 lg:mt-0'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-gray-50'>
                <Users className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>Employers</h2>
                <p className='mt-2 text-base text-gray-600'>
                  Access to an exclusive ecosystem of trusted professionals to
                  streamline talent referrals
                </p>
              </div>
            </div>

            <div className='mt-10 lg:mt-0'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-gray-50'>
                <Award className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Connectors
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  Earn top rewards for your valuable introductions
                </p>
              </div>
            </div>

            <div className='mt-10 lg:mt-0'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-gray-50'>
                <PiggyBank className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Cost saving
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  Employers discover pre-qualified candidates and save an
                  average of 50% on hiring costs compared to traditional
                  agencies
                </p>
              </div>
            </div>

            <div className='mt-10 lg:mt-0'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-gray-50'>
                <Heart className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Human Element
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  AI sourcing tools can automate tasks, Walnut Exchange
                  emphasizes the power of warm introductions and personal
                  connections
                </p>
              </div>
            </div>

            <div className='mt-10 lg:mt-0'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-gray-50'>
                <Target className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Win-Win-Win
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  Employers find top talent at a lower cost, referrers earn
                  rewards, and candidates discover better opportunities through
                  trusted connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-bold text-center mb-12 text-gray-900'>
            Frequently Asked Questions
          </h2>

          <div className='max-w-3xl mx-auto'>
            <Accordion type='single' collapsible className='space-y-4'>
              <AccordionItem
                value='guarantees'
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Do you offer any guarantees?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>
                    We offer a risk-free solution with our 60-day guarantee. If
                    your new hire doesn't work out, receive a full refund or use
                    the credit to hire a replacement
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='who-should-use'
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Who should use Walnut Exchange?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>
                    Common challenge for growing businesses: you need top
                    talent, but traditional methods aren't delivering, and your
                    budget is tight. Walnut Exchange is designed precisely for
                    companies like yours
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='cost'
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    What's the cost?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>
                    Walnut Exchange saves employers an average of 50% or more
                    compared to traditional recruiting firms. We use a flat-fee
                    structure tiered by salary range, so you only pay when you
                    hire
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='quality'
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    How do you ensure the quality of the referrals?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>
                    Walnut Exchange takes the guesswork out of hiring. We
                    actively recruit "super-connectors" – individuals with
                    extensive networks of top talent in your industry. Combined
                    with our rigorous qualification process, we ensure that you
                    only receive referrals who meet your specific requirements
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='join'
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Can anyone join to make a referral?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>
                    To maintain the highest quality referrals, Walnut Exchange
                    carefully selects "super-connectors" with proven track
                    records and extensive networks in their industries. This
                    ensures that employers receive top-tier candidates and
                    referrers have access to relevant, high-value opportunities
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                Ready to transform your hiring?
              </h2>
              <p className='mt-3 max-w-3xl text-lg text-gray-600'>
                Join our network of top companies and talent connectors. Be the
                first to know when Walnut Exchange launches and start making
                meaningful connections.
              </p>
            </div>
            <div className='mt-8 lg:mt-0 flex justify-center lg:justify-end'>
              <div className='w-full max-w-md'>
                <WaitlistForm />
              </div>
            </div>
          </div>

          <div className='mt-12 pt-8 border-t border-gray-200'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <div className='flex items-center gap-2 text-gray-600'>
                <Mail className='h-5 w-5' />
                <span>Contact us: </span>
                <a
                  href='mailto:hello@walnutexchange.com'
                  className='text-gray-900 hover:text-gray-700 font-medium'
                >
                  hello@walnutexchange.com
                </a>
              </div>
              <div className='flex items-center gap-4'>
                <a
                  href='https://www.linkedin.com/company/walnut-exchange'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-gray-900 transition-colors'
                >
                  <Linkedin className='h-6 w-6' />
                  <span className='sr-only'>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
