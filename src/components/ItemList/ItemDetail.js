import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ beer }) => {
  const idNumber = beer.idNumber;
  let [count, setCount] = useState(1);
  let [stock, setStock] = useState(idNumber);
  let [remaingStock, setRemainingStock] = useState(idNumber - 0);

  const countIncrement = () => {
    if (count < stock) {
      setCount(++count);
      setRemainingStock(--remaingStock);
    }
  };
  const countDecrement = () => {
    if (count > 1) {
      setCount(--count);
      setRemainingStock(++remaingStock);
    }
  };

  return (
    <>
      <h2>{beer.name}</h2>
      <p>{beer.pic}</p>
      <p>{beer.detail}</p>
      <p>{beer.price}</p>
      <ItemCount
        remaingStock={remaingStock}
        initial={count}
        stock={idNumber}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
      />
      <button>confirmar compra</button>
    </>
  );
};

export default ItemDetail;
