import { useLayoutEffect, useState } from "react";

export function StateVariables() {
  const [name, setName] = useState("Koushik");

  useLayoutEffect(() => {
    setName("David"); // runs before browser paints
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="text-center text-warning p-3">Data Binding</h2>
      <p>Hello, {name}!</p>
      <input type="text" value={name} readOnly />
    </div>
  );
}
