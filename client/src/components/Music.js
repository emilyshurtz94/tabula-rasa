import React from 'react';
import useFetch from 'react-fetch-hook';

function Music() {
    const { isLoading, error, data } = useFetch("https://zenquotes.io/api/random");
    const quoteData = data[0]
    const quote = quoteData.q
    const author = quoteData.a 


  return (
    <div>{music}</div>
  )
}

export default Music