import { Clock, Rocket, DollarSign } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ReferralPointProps = {
  icon: LucideIcon;
  text: string;
  source: string;
};

function ReferralPoint({ icon: Icon, text, source }: ReferralPointProps) {
  return (
    <div className='text-center'>
      <div className='w-12 h-12 bg-gray-900 rounded-lg mx-auto flex items-center justify-center'>
        <Icon className='h-6 w-6 text-white' />
      </div>
      <p className='mt-4 h-20 text-lg font-medium text-gray-900'>{text}</p>
      <p className='mt-2 text-sm text-gray-500'>Source: {source}</p>
    </div>
  );
}

export function WhyReferralsWork() {
  const referralPoints = [
    {
      icon: Clock,
      text: "Referred hires stay 40% longer than job board hires",
      source: "SHRM",
    },
    {
      icon: Rocket,
      text: "Companies that prioritize referrals hire 2x faster",
      source: "LinkedIn Hiring Trends Report",
    },
    {
      icon: DollarSign,
      text: "Hiring through referrals reduces cost-per-hire by up to 50%",
      source: "SHRM, LinkedIn Hiring Trends",
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-gray-900 mb-16 text-center'>
            Why Referrals Work
          </h2>

          <div className='grid gap-8 md:grid-cols-3'>
            {referralPoints.map((point) => (
              <ReferralPoint
                key={point.text}
                icon={point.icon}
                text={point.text}
                source={point.source}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
