import { useEffect, useState } from "react";

export default function CategoriesFetch() {
  const [items, setItems] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch("categories.json"); //categories.json must be in the public folder

    try {
      const data = await res.json();
      setItems(data);
      //console.log("response data?", data);
    } catch (error) {
      console.log("Error happened here!");
      console.error(error);
    }
   // console.log("response fetch", items);
  };

  useEffect(() => {
    fetchInfo();
    //console.log("categorias");
  }, []);

  return items;
}
