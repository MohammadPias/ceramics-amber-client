import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount]= useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                const count = data.count;
                const pageNum = Math.ceil(count/6);
                setPageCount(pageNum)
            })
    }, [])
    return {
        products,
        pageCount
    }
};

export default useProducts;