import React from 'react';
import BottomNav from '../layout/BottomNav';

const FeedBack = () => {
  return (
    <div className="max-w-md mx-auto p-6   bg-white mt-4">
      <h2 className="text-2xl font-semibold text-center mb-2">Submit a Complaint</h2>
      <p className="text-left text-gray-600 mt-10 mb-4">
        Tell us about your recent experience at our restaurant.
      </p>
      
      <form className="space-y-4">
        <div className='flex gap-2'>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            placeholder="(optional)"
            className="mt-1 w-28 px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>

        <div>
          <label className="block text-gray-700">Email or phone</label>
          <input
            type="text"
            placeholder="(optional)"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>
        </div>
        <div>
          <label className="block text-gray-700">Comment</label>
          <textarea
            placeholder="Type your feedback here..."
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-56 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
        >
          Send feedback
        </button>
      </form>

      <BottomNav />
    </div>
  );
};

export default FeedBack;
