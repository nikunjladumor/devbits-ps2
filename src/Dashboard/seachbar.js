import React, { useEffect } from 'react'
import { useState} from 'react'
// import { useEffect } from 'react';

function Searchbar() {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
    // const [user, setUser] = useState([]);
    const fetchData = async (q) => {
      const response = await fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + q + "&apikey=JJ5PFVX4HC9EKTYT")
      .then((resp)=>resp.json())
      .then((resp)=>{
        console.log(resp);
                console.log("DATA");
        console.log(items);
      })
    }
  //  useEffect(() => {
  //     fetchData(q);
  //   },[])
//   useEffect(() => {
//     fetch()
//         .then((res) => res.json())
//         .then(
//             (result) => {
//                 setItems(result);
//             }
//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
           
//         );
// }, []);

  console.log(q)
    useEffect(()=>{
        if(q!==""){
            fetchData(q)
          }
          else{
            fetchData("am")
          }
    },[q]);
  return (
    <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => 
                                  setQ(e.target.value)
                                }
                            />
                            <span className="sr-only">Search stocks here</span> 
                        </label>
                    </div>
                    <ul className='card-grid'>
                         {items.map((item)=>{
                            return (
                                <li>
                                 <h6>{item.name}</h6>
                                 <h6>{item.symbol}</h6>
   
                                </li>
                             )
                         } )

                         }
                    </ul>
                    </div>
  )
}

export default Searchbar