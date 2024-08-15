import React from 'react'

export const HistoryRecord = () => {
    const records = [
        "Chicken Burger",
        "Cheese Burger",
        "Tiramisu",
        "Shrimp Scampi",
        "Mojito",
        "Lemonade"
      ];
      
  return (
    <div>
   
        <div className='flex flex-wrap gap-2 '>
            {records.map((record, index) => (
            <div key={index} className='bg-gray-100 px-3 py-2 border-2 rounded-full text-gray-600  border-gray-400'>
                {record}
            </div>
            ))}
        </div>
    </div>
  )
}
