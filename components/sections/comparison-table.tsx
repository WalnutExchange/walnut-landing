import {
  Globe2,
  Users2,
  UserCog,
  UserCog2,
  Building,
  LucideIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ComparisonMethod = {
  icon: LucideIcon | "walnut";
  name: string;
  description: string;
  subtext?: string;
  cost: string;
  costDetails?: string;
  costDetails2?: string;
  isHighlighted?: boolean;
  badges?: string[];
};

function ComparisonCard({ method }: { method: ComparisonMethod }) {
  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        method.isHighlighted
          ? "border-l-4 border-l-gray-900 bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className='p-6 space-y-4'>
        {/* Header */}
        <div className='flex items-center gap-3'>
          {method.icon === "walnut" ? (
            <div className='rounded-lg p-1'>
              <img
                src='/walnut-logo.svg'
                alt='Walnut Exchange Logo'
                className='h-48 w-48 text-gray-50 mt-8'
              />
            </div>
          ) : (
            <method.icon className='h-5 w-5 text-gray-500' />
          )}
          <span
            className={`${
              method.isHighlighted
                ? "text-lg font-semibold text-gray-900"
                : "font-medium text-gray-700"
            }`}
          >
            {method.name}
          </span>
        </div>

        {/* Description */}
        <div>
          <p
            className={`${
              method.isHighlighted
                ? "text-gray-900 font-medium text-lg"
                : "text-gray-700"
            }`}
          >
            {method.description}
          </p>
          {method.badges && (
            <div className='flex flex-col gap-2 mt-2'>
              {method.badges.map((badge) => (
                <span
                  key={badge}
                  className='inline-flex items-center rounded-full bg-gray-900/10 px-3 py-1 text-sm font-medium text-gray-900'
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          {method.subtext && (
            <p className='mt-1 text-sm text-gray-500'>{method.subtext}</p>
          )}
        </div>

        {/* Cost */}
        <div
          className={`${
            method.isHighlighted ? "text-gray-900" : "text-gray-700"
          }`}
        >
          <span className='font-bold text-lg'>{method.cost}</span>
          {method.costDetails && (
            <span className='block text-sm text-gray-500 mt-1'>
              {method.costDetails}
            </span>
          )}
          {method.costDetails2 && (
            <span className='block text-sm text-gray-500'>
              {method.costDetails2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable() {
  const methods: ComparisonMethod[] = [
    {
      icon: "walnut",
      name: "Walnut Exchange",
      description:
        "A network-driven hiring model where industry professionals refer pre-vetted, interview-ready candidates.",
      badges: ["High-quality candidates", "Trusted connections"],
      cost: "$10,000 - $15,000",
      costDetails: "per hire for most roles",
      isHighlighted: true,
    },
    {
      icon: Globe2,
      name: "Job Boards",
      description:
        "Employers post openings on platforms like LinkedIn, Indeed, and Glassdoor. Open to all candidates.",
      subtext: "Time consuming and low quality.",
      cost: "$100 - $500 per posting",
    },
    {
      icon: Users2,
      name: "Internal Referrals",
      description:
        "Companies encourage employees to refer qualified candidates from their networks.",
      subtext: "Limited network reach.",
      cost: "$1,000 - $5,000",
      costDetails: "Typical referral bonus",
    },
    {
      icon: UserCog,
      name: "Internal Recruiters",
      description:
        "In-house recruiters handle sourcing, screening, and hiring as part of the company's HR function.",
      subtext: "Often overwhelmed with limited time for active sourcing.",
      cost: "$100,000 - $160,000",
      costDetails: "Annual salary + tools",
    },
    {
      icon: UserCog2,
      name: "Contract Recruiters",
      description:
        "External recruiters or RPO teams work as embedded talent partners.",
      subtext: "Quality varies with fixed upfront cost.",
      cost: "$10,000 - $30,000",
      costDetails: "Monthly + % per hire",
    },
    {
      icon: Building,
      name: "Recruiting Agencies",
      description: "External staffing firms source and introduce candidates.",
      subtext: "Quality varies with low barrier to entry.",
      cost: "17% - 20%",
      costDetails: "of annual salary",
      costDetails2: "($20,000 - $40,000 per hire)",
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-gray-900'>
          Different Ways Companies Hire Talent
        </h2>
        <div className='block mt-1 text-gray-800 text-sm max-w-4xl mx-auto'>
          Internal referrals work—but they only go so far. When companies run
          out of internal leads, they turn to job postings, internal recruiters,
          or expensive recruiting firms.{" "}
          <b>Walnut Exchange is the smart middle ground</b>—delivering
          pre-vetted, interview-ready candidates efficiently through trusted
          referrals, reducing time-to-hire and hiring costs.
        </div>

        {/* Mobile Cards */}
        <div className='mt-8 max-w-4xl mx-auto lg:hidden space-y-4'>
          {methods.map((method) => (
            <ComparisonCard key={method.name} method={method} />
          ))}
        </div>

        {/* Desktop Table */}
        <div className='mt-8 max-w-4xl mx-auto hidden lg:block'>
          <div className='overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg'>
            <Table>
              <TableHeader>
                <TableRow className='bg-gray-50'>
                  <TableHead className='w-1/4'>Hiring Method</TableHead>
                  <TableHead className='w-2/4'>Description</TableHead>
                  <TableHead className='w-1/4'>Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {methods.map((method) => (
                  <TableRow
                    key={method.name}
                    className={
                      method.isHighlighted
                        ? "bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 border-l-4 border-gray-900"
                        : ""
                    }
                  >
                    <TableCell
                      className={`font-semibold ${
                        method.isHighlighted ? "text-gray-900 py-6" : ""
                      }`}
                    >
                      <div className='flex items-center gap-3'>
                        {method.icon === "walnut" ? (
                          <div className='rounded-lg p-1'>
                            <img
                              src='/walnut-logo.svg'
                              alt='Walnut Exchange Logo'
                              className='h-12 w-12 text-gray-50'
                            />
                          </div>
                        ) : (
                          <method.icon className='h-5 w-5 text-gray-500' />
                        )}
                        <span className={method.isHighlighted ? "text-lg" : ""}>
                          {method.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className={method.isHighlighted ? "py-6" : ""}>
                      <span
                        className={
                          method.isHighlighted
                            ? "text-gray-900 font-medium text-lg"
                            : "text-gray-700"
                        }
                      >
                        {method.description}
                      </span>
                      {method.badges && (
                        <div className='flex items-center gap-2 mt-2'>
                          {method.badges.map((badge) => (
                            <span
                              key={badge}
                              className='inline-flex items-center rounded-full bg-gray-900/10 px-3 py-1 text-sm font-medium text-gray-900'
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                      {method.subtext && (
                        <span className='block mt-1 text-gray-500 text-sm'>
                          {method.subtext}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className={method.isHighlighted ? "py-6" : ""}>
                      <div
                        className={
                          method.isHighlighted
                            ? "text-gray-900"
                            : "text-gray-700"
                        }
                      >
                        <span className='font-bold text-lg'>{method.cost}</span>
                        {method.costDetails && (
                          <span className='block text-sm text-gray-500 mt-1'>
                            {method.costDetails}
                          </span>
                        )}
                        {method.costDetails2 && (
                          <span className='block text-sm text-gray-500'>
                            {method.costDetails2}
                          </span>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
