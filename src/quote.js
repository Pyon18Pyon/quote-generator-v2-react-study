import { useState } from 'react';
// import Loader from './components/Loader';


async function getQuote() {
  const proxyUrl = 'https://floating-shelf-09858.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  let data = null;
  try {
    const response = await fetch(proxyUrl + apiUrl);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log('data:', data);
  return data;
}

function useQuote() {
  const [ quote, setQuote ] = useState({quoteText: ''});

  const newQuote = async () => {
    console.log('newQuote');
    const newState = await getQuote();
    if (newState) {
      setQuote({ ...newState, quoteAuthor: newState.quoteAuthor === '' ? 'Unknown' : newState.quoteAuthor });
    } 
  };
  return [ quote, newQuote ];
}

export default useQuote;




