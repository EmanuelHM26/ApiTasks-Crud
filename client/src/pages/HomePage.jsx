import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">Welcome to Our Website</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We are a team of passionate developers dedicated to creating the best web applications.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </section>
      </main>
      <footer className="w-full bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-white">
          &copy; 2023 Our Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;