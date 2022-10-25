import axios from "axios";
import { OutfitsIndex } from "./OutfitsIndex";
import { useState, useEffect } from "react";
export function Home() {
  const [outfits, setOutfits] = useState([]);
  // const outfits = [
  //   { id: 1, title: "test1" },
  //   { id: 2, title: "test2" },
  // ];
  const handleIndexOutfits = () => {
    console.log(handleIndexOutfits);
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      console.log(response.data);
      setOutfits(response.data);
    });
  };
  useEffect(handleIndexOutfits, []);
  return (
    <div>
      <h1>Welcome to React!</h1>
      <OutfitsIndex outfits={outfits} />
    </div>
  );
}
