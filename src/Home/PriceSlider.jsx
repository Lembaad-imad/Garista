import React, { useState } from "react";
import { Range } from "react-range";

const PriceSlider = () => {
  const [values, setValues] = useState([20, 70]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  const calculateThumbPosition = (value) => {
    // Calculate the left position as a percentage
    return `${(value / 100) * 100}%`;
  };

  return (
    <div className="mt-10 w-11/12">
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
          <div {...props} className="h-6 w-6 bg-red-500 rounded-full shadow" />
        )}
      />
      <div className="flex justify-between text-sm text-gray-700 mt-4 relative">
        <span
          style={{
            position: "absolute",
            left: calculateThumbPosition(1),
            transform: "translateX(-50%)", // Center the label above the thumb
          }}
        >
          1MAD
        </span>
        <span
          style={{
            position: "absolute",
            left: calculateThumbPosition(values[0]),
            transform: "translateX(-50%)", // Center the label above the thumb
          }}
        >
          {values[0]}MAD
        </span>
        <span
          style={{
            position: "absolute",
            left: calculateThumbPosition(values[1]),
            transform: "translateX(-50%)", // Center the label above the thumb
          }}
        >
          {values[1]}MAD
        </span>
        <span
          style={{
            position: "absolute",
            left: calculateThumbPosition(100),
            transform: "translateX(-50%)", // Center the label above the thumb
          }}
        >
          100MAD
        </span>
      </div>
    </div>
  );
};

export default PriceSlider;
