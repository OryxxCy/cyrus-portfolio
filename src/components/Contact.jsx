import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-pink-300 to-indigo-300 py-10">
      <div className="container mx-auto text-center w-10/12 mx-auto">
        <h2 className="text-4xl font-bold">Want to know more about me?</h2>
        <p className="text-xl mt-4">Please contact me with the information below.</p>
        <div className="mt-8 space-y-4">
          <p className="text-lg"><strong>Phone:</strong> 431-733-4999</p>
          <p className="text-lg">
            <strong>Email:</strong> <a href="mailto:cyrus.bi3n@gmail.com" className="hover:underline">cyrus.bi3n@gmail.com</a>
          </p>
        </div>
        <a href="mailto:cyrus.bi3n@gmail.com" className="mt-8 inline-block px-6 py-3 btn btn-primary text-white rounded-full hover:bg-indigo-700">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
