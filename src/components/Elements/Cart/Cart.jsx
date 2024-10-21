import { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState(0);

  const addItemToCart = () => {
    setItems(items + 1);
  };
  return (
    <div className="flex justify-end items-center space-x-2 md:space-x-4">
      <div className="flex items-center relative">
        <i
          className="fas fa-shopping-cart text-black cursor-pointer"
          onClick={addItemToCart}
        ></i>
        {items > 0 && (
          <div className="absolute w-4 h-4 top-[-8px] right-[95px] bg-red-500 text-white rounded-full flex justify-center items-center text-xs">
            {items}
          </div>
        )}
        <span className="ml-2 hidden md:inline">item: $150.00</span>
        <span className="ml-2 md:hidden">item: $150.00</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
