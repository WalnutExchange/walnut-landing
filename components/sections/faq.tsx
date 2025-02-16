import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Do you offer any guarantees?",
      answer:
        "We offer a risk-free solution with our 60-day guarantee. If your new hire doesn't work out, receive a full refund or use the credit to hire a replacement",
    },
    {
      question: "Who should use Walnut Exchange?",
      answer:
        "Common challenge for growing businesses: you need top talent, but traditional methods aren't delivering, and your budget is tight. Walnut Exchange is designed precisely for companies like yours",
    },
    {
      question: "What's the cost?",
      answer:
        "Walnut Exchange saves employers an average of 50% or more compared to traditional recruiting firms. We use a flat-fee structure tiered by salary range, so you only pay when you hire",
    },
    {
      question: "How do you ensure the quality of the referrals?",
      answer:
        'Walnut Exchange takes the guesswork out of hiring. We actively recruit "super-connectors" – individuals with extensive networks of top talent in your industry. Combined with our rigorous qualification process, we ensure that you only receive referrals who meet your specific requirements',
    },
    {
      question: "Can anyone join to make a referral?",
      answer:
        'To maintain the highest quality referrals, Walnut Exchange carefully selects "super-connectors" with proven track records and extensive networks in their industries. This ensures that employers receive top-tier candidates and referrers have access to relevant, high-value opportunities',
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-gray-900'>
          Frequently Asked Questions
        </h2>

        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className='bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border-none'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-gray-600'>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
