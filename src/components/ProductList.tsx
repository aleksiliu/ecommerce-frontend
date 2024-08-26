import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import SkeletonLoader from './SkeletonLoader';

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
                console.log(data)
                setState({ products: data, loading: false, error: null });
            } catch (error) {
                setState({ products: [], loading: false, error: (error instanceof Error) ? error.message : 'An unknown error occurred' });
            }
        };
        fetchProducts();
    }, []);

    if (state.loading) {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        );
      }

    if (state.error) {
        return <div>Error: {state.error}</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-6 my-8">
            {state.products.map(product => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
