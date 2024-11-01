import React, { useState } from "react";

const App = () => {
  let [price, setPrice] = useState(5);

  const update = () => {
    setPrice(price + 1);
  };

  const remove = () => {
    setPrice(price - 1);
  };

  return (
    <div>
      <h1>เจหม่าล่าดุดุ</h1>
      <h1>
        ราคาไม้ละ {price} บาท
        &nbsp;
        <button onClick={update}>+</button>&nbsp;
        <button onClick={remove}>-</button>
      </h1>

      <p>5 ไม้ {price * 5} บาท</p>
      <p>10 ไม้ {price * 10} บาท</p>
      <p>20 ไม้ {price * 20} บาท</p>
      <p>30 ไม้ {price * 30} บาท</p>
    </div>
  );
};

export default App;
