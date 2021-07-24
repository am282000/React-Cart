import React, { useState } from 'react';
import faker from 'faker';
import SingleProduct from './SingleProduct';

faker.seed(100); //to get same data everytime
const Home = () => {
	const productsArray = [...Array(30)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.random.image()
	}));
	// console.log(productArray);

	const [products] = useState(productsArray);
	// console.log(cart);
	return (
		<div className="productContainer">
			{products.map((prod) => (
				<SingleProduct prod={prod} key={prod.id} />
			))}
		</div>
	);
};

export default Home;
