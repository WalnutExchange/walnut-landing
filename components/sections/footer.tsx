import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <div className='mt-12 py-12 border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
  );
}
