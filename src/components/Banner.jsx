import React from 'react'
import { useState } from 'react';
import NotFoundPage from './NotFoundPage';

function Banner({type}) {



      if(type === 'notFound') {
        return (<NotFoundPage />);
      }
      else {
        return (
          <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
  <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:py-24"> {/* Adjust the padding values here */}
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        40% DISCOUNT VOUCHER available for NOVEMBER BATCH enrollees!{' '}
        <a href="#" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          APPLY NOW <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Become a Web Developer in 2 Months
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Staying at home can be an opportunity to get your dream job in Tech, with the No. 1 Coding Bootcamp in the Philippines
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enroll Now
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
        );
      }
    
    
    
}

export default Banner;