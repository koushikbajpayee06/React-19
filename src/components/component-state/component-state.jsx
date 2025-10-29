import { useLayoutEffect, useState } from "react";

export function StateVariables() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  useLayoutEffect(() => {
    setPrice(56000)
    setName("Samsung TV"); // runs before browser paints
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="text-center text-warning p-3">Data Binding</h2>
      <dl>
        <dt>Product Name</dt>
        <dd>{name}</dd>
        <dt>Price</dt>
        <dd>{price}</dd>
      </dl>
    </div>
  );
}
