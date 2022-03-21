import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chess-Set",
    imgUrl: "https://m.media-amazon.com/images/I/71GTIcTeQNS._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Note-Pen",
    imgUrl: "https://m.media-amazon.com/images/I/71LbzzDezeL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tshirt",
    imgUrl: "https://m.media-amazon.com/images/I/51W-CRHuZiL._UL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Books",
    imgUrl:
      "https://m.media-amazon.com/images/P/0553263153.01._SCLZZZZZZZ_SX500_.jpg",
  },
];
