import React, { useState } from "react";
import { Range } from "react-range";

const PriceSlider = () => {
  const [values, setValues] = useState([20, 70]); 

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="mt-10">
      
      <Range
        step={1}
        min={1}
        max={100}
        values={values}
        onChange={(newValues) => handleChange(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 bg-gray-200 rounded-full w-full"
            style={{ position: "relative" }}
          >
            <div
              className="h-2 bg-red-500 rounded-full"
              style={{
                position: "absolute",
                left: `${(values[0] / 100) * 100}%`,
                width: `${((values[1] - values[0]) / 100) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-6 w-6 bg-red-500 rounded-full shadow"
          />
        )}
      />
      <div className="flex justify-between text-gray-700 mt-4">
        <span>1$</span>
        <span>{values[0]}$</span>
        <span>{values[1]}$</span>
        <span>100$</span>
      </div>
    </div>
  );
};

export default PriceSlider;
