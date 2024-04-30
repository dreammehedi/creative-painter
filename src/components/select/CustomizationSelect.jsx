import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

function CustomizationSelect() {
  const [selectedCustomization, setSelectedCustomization] = useState(null);
  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      defaultValue={selectedCustomization}
      onChange={setSelectedCustomization}
      options={options}
    />
  );
}

export default CustomizationSelect;
