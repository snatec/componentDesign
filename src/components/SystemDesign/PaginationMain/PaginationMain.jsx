/* Questions to Ask
1) Is the api paginated?
2) Should i have mock data hardcoded?
3) What should be the chunk size? (per page how many data)
4) If api fails what should we show in ui? "Try again later msg"?
5) If no data, what should we show?
6) Backend heavy pagination: give chunksize and CurrentPageNumber to api
7) Frontend heavy pagination: get all data and divide according to chunk size and CurrentPageNumber.
8) If dummy data given, import from json or if api given, use it directly.
*/

import React,{useEffect, useState} from 'react';
import './PageComponent.css';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
// import productDataFile from './product.json';

const PaginationMain = () => {

// const productData = productDataFile.products; //for config file
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true); //new loading state
    const [error, setError] = useState(null);  //error state

    const[currentPage, setCurrentPage] = useState(0);

    const fetchData = async() => {
        try {
            setLoading(true);
            const data = await fetch('https://dummyjson.com/products?limit=500');
            const json = await data.json();

            setProductData(json? json.products : []);
        }

        catch(err) {
            setError("failed to load");
        }

        finally {
            setLoading(false) // hide loading when done
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);

    console.log("productData here",productData ? productData : "not available");

    if (loading) {
        return <div className="loading">Loading products...</div>; //shown while loading
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    const PAGE_SIZE = 10;
    const totalProducts = productData && productData.length;

    //if 194 products, 194/10 = 19 but it should be 20 since 4 more data is there.
    //Therefore use Math.ceil
    const numberOfPages = Math.ceil(totalProducts/PAGE_SIZE); 

    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const goToPrevPage = () => {
        setCurrentPage((prev) => prev - 1);
    }

    const goToNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    }

    return(
        <div className='container'>
        <h1>Pagination</h1>
        <Pagination 
            currentPage={currentPage} 
            numberOfPages={numberOfPages}
            goToPrevPage={goToPrevPage}
            goToNextPage={goToNextPage}
            setCurrentPage={setCurrentPage}
        />
        {productData && productData.length != 0 ?
            <div className='product-container'>{productData && productData.slice(start,end).map(item=> 
                (
                 <ProductCard key={item.id} title={item.title} image={item.thumbnail}/>
                ))}
            </div> : <div>No data</div>
        }
        </div>
    )
}

export default PaginationMain;