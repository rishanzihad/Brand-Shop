import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    const products =useLoaderData()
    const [product,setProduct] =useState([])
    const {id} =useParams()
    useEffect(()=>{
        const findProduct =products && products?.find(product => product._id == id)
        setProduct(findProduct)
       
    },[id,products])
  
    return (
        <div>
            <DetailsCard key={product._id} product={product}></DetailsCard>
        </div>
    );
};

export default Details;