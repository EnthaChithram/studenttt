import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, SetLoading] = useState(true);

  const [Data, SetData] = useState([
    { name: "111", body: "wow", writer: "abc", id: 1 },
  ]);



  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          SetLoading(false);
          SetData(data);
        })
        .catch((err) => {
          // auto catches network / connection error
          SetLoading(false);
          console.log(err.message);
        });
    },);
  }, []);

  return { loading, Data };
};

export default useFetch;
