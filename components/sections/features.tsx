import {
  Building2,
  Users,
  Award,
  PiggyBank,
  Heart,
  Target,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Building2,
      title: "Our Platform",
      description:
        "Walnut Exchange is a private, peer-to-peer talent referral platform connecting top companies with pre-vetted candidates",
      bgColor: "bg-gray-900",
    },
    {
      icon: Users,
      title: "Employers",
      description:
        "Access to an exclusive ecosystem of trusted professionals to streamline talent referrals",
      bgColor: "bg-gray-800",
    },
    {
      icon: Award,
      title: "Connectors",
      description: "Earn top rewards for your valuable introductions",
      bgColor: "bg-gray-700",
    },
    {
      icon: PiggyBank,
      title: "Cost saving",
      description:
        "Employers discover pre-qualified candidates and save an average of 50% on hiring costs compared to traditional agencies",
      bgColor: "bg-gray-800",
    },
    {
      icon: Heart,
      title: "Human Element",
      description:
        "AI sourcing tools can automate tasks, Walnut Exchange emphasizes the power of warm introductions and personal connections",
      bgColor: "bg-gray-700",
    },
    {
      icon: Target,
      title: "Win-Win-Win",
      description:
        "Employers find top talent at a lower cost, referrers earn rewards, and candidates discover better opportunities through trusted connections",
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <section className='py-16 bg-gray-50 w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={index > 0 ? "mt-10 lg:mt-0" : ""}
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.bgColor} text-gray-50`}
              >
                <feature.icon className='h-6 w-6' />
              </div>
              <div className='mt-5'>
                <h2 className='text-lg font-medium text-gray-900'>
                  {feature.title}
                </h2>
                <p className='mt-2 text-base text-gray-600'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
