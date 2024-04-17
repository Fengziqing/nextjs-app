'use client';
import React from 'react'

interface Props{
    error:Error;
    reset: ()=>void;
}
const ErrorPage = ({error,reset}:Props) => {
  console.log(error);
    return (
    <div>ErrorPage
        <button className='btn' onClick={()=>reset()}>retry</button>
    </div>
  )
}

export default ErrorPage