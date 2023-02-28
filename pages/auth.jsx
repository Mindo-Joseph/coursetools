import React from 'react'
import { useState } from 'react';
import signInWithEmail from '../lib/auth';

const auth = () => {
  const [showForm, setShowForm] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    let email = e.target.elements.email.value;
    signInWithEmail(email);
    setShowForm(false);
  }


  return (
    <div>
      {showForm ? (
        <div className="border rounded-lg p-12 w-4/12 mx-auto my-48">
        <h3 className="font-extrabold text-3xl">Ahoy!</h3>

        <p className="text-gray-500 text-sm mt-4">
          Fill in your email, we'll send you a magic link.
        </p>

        <form id="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="border w-full p-3 rounded-lg mt-4 focus:border-indigo-500"
          />

          <button

            type="submit"
            className="bg-indigo-500 text-white w-full p-3 rounded-lg mt-8 hover:bg-indigo-700"
          >
            Let's go!
          </button>
        </form>
      </div>
      ) : (
          <div className="border rounded-lg p-12 w-4/12 mx-auto my-48">
            <h2>
              A verification email has been sent to your email address.
            </h2>
            </div>
      )};
    </div>
  );
}

export default auth
