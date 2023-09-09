import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "certificate", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          >
            <span hidden={true}>{item}</span>
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
