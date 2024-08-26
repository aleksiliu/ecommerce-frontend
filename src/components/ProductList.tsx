import { useEffect, useState } from 'react';


interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data)
            setProducts(data);
        };
        fetchProducts();
    }, []);



    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <button onClick={() => alert('Jeah')}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;