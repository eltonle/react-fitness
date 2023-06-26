export const exercisesOptions =  {
    method: 'GET',
    headers: {
    //   'X-RapidAPI-Key': '382221868dmshd1005126349bfccp1e764ajsn315f2dd00022',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options)=>{
  const response = await fetch(url, options)
  const data = await response.json();

  return data;
}