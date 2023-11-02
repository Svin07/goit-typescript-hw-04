import React, { useState, FormEvent } from "react";

export function FormComponent() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: FormEvent): void => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
