import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

const ProductList = () => {
    const [state, setState] = useState<{ products: Product[]; loading: boolean; error: string | null }>({
        products: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setState({ products: data, loading: false, error: null });
            } catch (error) {
                setState({ products: [], loading: false, error: (error instanceof Error) ? error.message : 'An unknown error occurred' });
            }
        };
        fetchProducts();
    }, []);

    if (state.loading) {
        return <LoadingSpinner />;
    }

    if (state.error) {
        return <div>Error: {state.error}</div>;
    }

    return (
        <div>
            {state.products.map(product => (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <button onClick={() => alert('Added to Cart')}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
