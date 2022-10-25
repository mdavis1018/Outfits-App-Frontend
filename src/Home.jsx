import axios from "axios";
import { OutfitsIndex } from "./OutfitsIndex";
import { useState, useEffect } from "react";
import { OutfitsShow } from "./OutfitsShow";
import { Modal } from "./Modal";

export function Home() {
  const [outfits, setOutfits] = useState([]);
  const [isOutfitsShowVisible, setIsOutfitsShowVisible] = useState(false);
  const [currentOutfit, setCurrentOutfit] = useState({});
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

  const handleShowOutfit = (outfit) => {
    console.log(handleShowOutfit, outfit);
    setIsOutfitsShowVisible(true);
    setCurrentOutfit(outfit);
  };

  const handleHideOutfit = () => {
    console.log(handleHideOutfit);
    setIsOutfitsShowVisible(false);
  };

  return (
    <div>
      <h1>Welcome to React!</h1>
      <OutfitsIndex outfits={outfits} onSelectOutfit={handleShowOutfit} />
      <Modal show={isOutfitsShowVisible} onClose={handleHideOutfit}>
        <OutfitsShow outfit={currentOutfit} />
      </Modal>
    </div>
  );
}
