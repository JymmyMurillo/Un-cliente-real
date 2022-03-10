import { useEffect, useState } from "react";

export default function ProductsFetch(category) {
  //console.log("dentro del fetch", category);
  const [items, setItems] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch("../products.json"); //products.json must be in the public folder
    //console.log("res fetch", res);

    try {
      const data = await res.json();
      /*setItems(data);*/
      const dataFiltered = data.filter(
        (product) => product.category === category
      );
      setItems(dataFiltered);

      console.log("response data?", data);
    } catch (error) {
      console.log("Error happened here!");
      console.error(error);
    }
  };
  //console.log("response fetch", items);

  useEffect(() => {
    fetchInfo();
    //console.log("useEffect");
  }, []);

  return items;
}
