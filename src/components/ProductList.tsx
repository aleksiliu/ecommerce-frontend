import { useEffect, useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';
import SkeletonLoader from './SkeletonLoader';
import Filter from './Filter';

const ProductList = () => {
    const [state, setState] = useState<{ products: Product[]; loading: boolean; error: string | null }>({
        products: [],
        loading: true,
        error: null,
    });
    const [sortBy, setSortBy] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<string>('');

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

    const categories = useMemo(() => 
        Array.from(new Set(state.products.map(p => p.category))),
        [state.products]
    );

    const sortedAndFilteredProducts = useMemo(() => 
        state.products
            .filter(product => filterCategory ? product.category === filterCategory : true)
            .sort((a, b) => {
                if (sortBy === 'price-asc') return a.price - b.price;
                if (sortBy === 'price-desc') return b.price - a.price;
                return 0;
            }),
        [state.products, filterCategory, sortBy]
    );

    if (state.loading) {
        return (
            <>
                <Filter
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    categories={categories}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))}
                </div>
            </>
        );
    }

    if (state.error) {
        return <div>Network Error: {state.error}. Try again later.</div>;
    }

    return (
        <>
            <Filter
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                categories={categories}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {sortedAndFilteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductList;