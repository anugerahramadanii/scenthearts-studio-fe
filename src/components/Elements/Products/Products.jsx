const ProductSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4">Featured Product</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <a href="#" className="text-green-600">
          All
        </a>
        <a href="#" className="text-gray-600">
          Oranges
        </a>
        <a href="#" className="text-gray-600">
          Fresh Meat
        </a>
        <a href="#" className="text-gray-600">
          Vegetables
        </a>
        <a href="#" className="text-gray-600">
          Fastfood
        </a>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Cubes of fresh meat"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Bunch of bananas"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Guava fruits"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Sliced watermelon"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Bunch of grapes"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Burger"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Mangoes"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
        <div className="text-center">
          <img
            src="https://placehold.co/150x150"
            alt="Apples"
            className="mx-auto mb-2"
          />
          <p>Crab Pool Security</p>
          <p className="font-bold">$30.00</p>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
