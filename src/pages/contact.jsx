import React from 'react';

const Contact = () => {
  return (
    <div class="contact">
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Связаться со мной</h1>
            <p class="py-6">
              Оставьте свой email, и я напишу вам.
            </p>
          </div>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div class="card-body">
              <fieldset class="fieldset">
                <label class="fieldset-label">Email</label>
                <input type="email" class="input" placeholder="Email" />
                <button class="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;