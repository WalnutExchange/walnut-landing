import { Globe2, Users2, UserCog, UserCog2, Building } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonTable() {
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
        <div className='mt-8 max-w-4xl mx-auto'>
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
                <TableRow className='bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 border-l-4 border-gray-900'>
                  <TableCell className='font-semibold text-gray-900 py-6'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-lg p-1'>
                        <img
                          src='/walnut-logo.svg'
                          alt='Walnut Exchange Logo'
                          className='h-12 w-12 text-gray-50'
                        />
                      </div>
                      <span className='text-lg'>Walnut Exchange</span>
                    </div>
                  </TableCell>
                  <TableCell className='py-6'>
                    <span className='text-gray-900 font-medium text-lg'>
                      A network-driven hiring model where industry professionals
                      refer pre-vetted, interview-ready candidates.
                    </span>
                    <div className='flex items-center gap-2 mt-2'>
                      <span className='inline-flex items-center rounded-full bg-gray-900/10 px-3 py-1 text-sm font-medium text-gray-900'>
                        High-quality candidates
                      </span>
                      <span className='inline-flex items-center rounded-full bg-gray-900/10 px-3 py-1 text-sm font-medium text-gray-900'>
                        Trusted connections
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className='py-6'>
                    <div className='text-gray-900'>
                      <span className='font-bold text-lg'>
                        $10,000 - $15,000
                      </span>
                      <span className='block text-sm font-medium mt-1'>
                        per hire for most roles
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
                {/* Other hiring methods */}
                <TableRow>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <Globe2 className='h-5 w-5 text-gray-500' />
                      <span>Job Boards</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-gray-700'>
                      Employers post openings on platforms like{" "}
                      <span className='font-medium'>
                        LinkedIn, Indeed, and Glassdoor
                      </span>
                      . Open to all candidates.
                    </span>
                    <span className='block mt-1 text-gray-500 text-sm'>
                      Time consuming and low quality.
                    </span>
                  </TableCell>
                  <TableCell className='text-gray-700'>
                    $100 - $500 per posting
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <Users2 className='h-5 w-5 text-gray-500' />
                      <span>Internal Referrals</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-gray-700'>
                      Companies encourage employees to refer qualified
                      candidates from their networks.
                    </span>
                    <span className='block mt-1 text-gray-500 text-sm'>
                      Limited network reach.
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className='text-gray-700'>
                      <span className='font-medium'>$1,000 - $5,000</span>
                      <span className='block text-sm text-gray-500'>
                        Typical referral bonus
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <UserCog className='h-5 w-5 text-gray-500' />
                      <span>Internal Recruiters</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-gray-700'>
                      In-house recruiters handle sourcing, screening, and hiring
                      as part of the company's HR function.
                    </span>
                    <span className='block mt-1 text-gray-500 text-sm'>
                      Often overwhelmed with limited time for active sourcing.
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className='text-gray-700'>
                      <span className='font-medium'>$100,000 - $160,000</span>
                      <span className='block text-sm text-gray-500'>
                        Annual salary + tools
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <UserCog2 className='h-5 w-5 text-gray-500' />
                      <span>Contract Recruiters</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-gray-700'>
                      External recruiters or RPO teams work as embedded talent
                      partners.
                    </span>
                    <span className='block mt-1 text-gray-500 text-sm'>
                      Quality varies with fixed upfront cost.
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className='text-gray-700'>
                      <span className='font-medium'>$10,000 - $30,000</span>
                      <span className='block text-sm text-gray-500'>
                        Monthly + % per hire
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    <div className='flex items-center gap-2'>
                      <Building className='h-5 w-5 text-gray-500' />
                      <span>Recruiting Agencies</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className='text-gray-700'>
                      External staffing firms source and introduce candidates.
                    </span>
                    <span className='block mt-1 text-gray-500 text-sm'>
                      Quality varies with low barrier to entry.
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className='text-gray-700'>
                      <span className='font-medium'>17% - 20%</span>
                      <span className='block text-sm text-gray-500'>
                        of annual salary
                      </span>
                      <span className='block text-sm text-gray-500'>
                        ($20,000 - $40,000 per hire)
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
