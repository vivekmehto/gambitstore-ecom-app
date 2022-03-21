import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "chess-set",
    imgUrl: "https://m.media-amazon.com/images/I/71GTIcTeQNS._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "note-pen",
    imgUrl: "https://m.media-amazon.com/images/I/71LbzzDezeL._SL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "tshirt",
    imgUrl: "https://m.media-amazon.com/images/I/51W-CRHuZiL._UL1500_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "books",
    imgUrl:
      "https://m.media-amazon.com/images/P/0553263153.01._SCLZZZZZZZ_SX500_.jpg",
  },
];
