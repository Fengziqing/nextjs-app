import React from 'react'

interface Props{
    params:{
        slug:string[];
    };
    searchParams:{
      sortOrder: string;
    };
}
const ProductPge = ({params:{slug}, searchParams:{sortOrder}}:Props) => {
  return (
    <div>ProductPge{slug} {sortOrder}</div>
  )
}

export default ProductPge