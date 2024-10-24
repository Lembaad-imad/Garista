import React from 'react';
import useStore from "../Zustand/Store";

export const HistoryRecord = () => {
  const { records } = useStore();
  
  console.log(records);

  return (
    <div>
      {Array.isArray(records) && records.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {records
            .slice(-6) 
            .map((record, index) => (
              <div key={index} className='bg-gray-100 px-3 py-2 border-2 rounded-full text-gray-600 border-gray-400'>
                {record} 
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
