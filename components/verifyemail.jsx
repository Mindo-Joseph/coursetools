import React from 'react'

const verifyemail = () => {
  return (
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-lg font-bold mb-2">Verify Your Email</h2>
      <p class="text-gray-600 mb-4">
        We've sent an email to your address with a verification link. Click the
        link to complete your account registration.
      </p>
      <div class="flex items-center">
        <span class="mr-2 text-gray-600">Didn't receive the email?</span>
        <button class="text-blue-500 font-bold hover:underline focus:outline-none">
          Resend
        </button>
      </div>
    </div>
  );
}

export default verifyemail
