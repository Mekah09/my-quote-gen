import axios from "axios";
import React, { useEffect, useState } from 'react'

const Quotecard = () => {
  const [quotes, setQuotes] = useState([]);
  const fetchApi = async () => {
    try {
      await axios.get('https://dummyjson.com/quotes').then((response) => {
        setQuotes(response.data.quotes);
        console.log(response.data.quotes);

      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {quotes.map((item) => (
        // <div key={item.id} style={{width:'50%'}}>
        //   <div className="text-bg-light mb-3 w-auto text-white rounded bg-pink-400 m-auto p-10 border rounded-xl shadow-lg">
        //     <span className="p-10">
        //       <p>"{item.quote}"</p>
        //     </span>

        //   </div>
        // </div>

        <div key={item.id} className="min-h-screen bg-pink-500 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-300 hover:shadow-3xl">
              {/* Quote Icon */}
              {/* <div className="text-6xl text-purple-500 mb-6 font-serif">"</div> */}

              {/* Quote Text */}
              <div className={`transition-opacity duration-300`}>
                <p className="text-2xl md:text-3xl font-light text-gray-800 mb-6 leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Author */}
                <p className="text-lg md:text-xl text-purple-600 font-medium mb-8 flex justify-end">
                  - {item.author}
                </p>
              </div>

              {/* Divider */}
              {/* <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 rounded-full"></div> */}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  // onClick={generateNewQuote}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Genrate New Quote
                </button>

              </div>
            </div>

          </div>
        </div>

      ))}
    </>
  )
}


export default Quotecard