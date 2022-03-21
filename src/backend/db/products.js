import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Premium Chess Set",
    description:
      "Chess set MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "1016",
    originalPrice: "2000",
    outOfStock: false,
    fastDelivery: true,
    badge: "BEST SELLER",
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2972059444.jpg",
    categoryName: "chess-set",
  },
  {
    _id: uuid(),
    title: "Metal Chess Set",
    description:
      "metal chess set MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1000",
    outOfStock: true,
    fastDelivery: true,
    badge: "",
    imgUrl: "https://m.media-amazon.com/images/I/911eas7zfYS._SL1500_.jpg",
    categoryName: "chess-set",
  },
  {
    _id: uuid(),
    title: "Wooden Chess Set",
    description:
      "wooden chess set MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1000",
    outOfStock: false,
    fastDelivery: true,
    badge: "",
    imgUrl: "https://m.media-amazon.com/images/I/81uVxTfDspL._SL1500_.jpg",
    categoryName: "chess-set",
  },
  {
    _id: uuid(),
    title: "Note Pad",
    description:
      "note pad MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1000",

    outOfStock: false,
    fastDelivery: true,
    badge: "",
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2672105589.jpg",
    categoryName: "note-pen",
  },
  {
    _id: uuid(),
    title: "Crown Pen With Box",
    description:
      " MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1000",

    outOfStock: true,
    fastDelivery: false,
    badge: "",
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2675975231.jpg",
    categoryName: "note-pen",
  },
  {
    _id: uuid(),
    title: "King of Words Notebook",
    description:
      "note pad  MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "250",
    originalPrice: "500",

    outOfStock: false,
    fastDelivery: true,
    badge: "NEW",
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2675452572.jpg",
    categoryName: "note-pen",
  },
  {
    _id: uuid(),
    title: "ChessBase India Black Pen",
    description:
      " MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "99",
    originalPrice: "200",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2676699303.jpg",
    categoryName: "note-pen",
  },
  {
    _id: uuid(),
    title: "King of Words T-Shirt",
    description:
      "MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1500",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2672145358.jpg",
    categoryName: "tshirt",
  },
  {
    _id: uuid(),
    title: "Vidit Rulebook T-Shirt",
    description:
      "MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "899",
    originalPrice: "1000",
    badge: "NEW",
    outOfStock: false,
    fastDelivery: false,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2672550475.jpg",
    categoryName: "tshirt",
  },
  {
    _id: uuid(),
    title: "Round Neck India T-shirt",
    description:
      "MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our work",
    price: "570",
    originalPrice: "600",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/698182844.jpg",
    categoryName: "tshirt",
  },
  {
    _id: uuid(),
    title: "No Draw T-Shirt",
    description:
      "MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’MADE PROUDLY IN INDIA - We appreciate the work our craftsmen put into each product, and it’s one of many reasons we’re so proud to label our works one of many reasons we’re so proud to label our work",
    price: "570",
    originalPrice: "600",
    badge: "",
    outOfStock: true,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/1110783536.jpg",
    categoryName: "tshirt",
  },
  {
    _id: uuid(),
    title: "Dvoretsky's 6 Books Combo",
    description:
      "This comprehensive guide, in dictionary form, makes all aspects of chess strategy quick, easy, and painlessly accessible to players of all degrees of strength. Each strategic concept is listed alphabetically and followed by a clear, easy-to-absorb explanation accompanied by examples of how this strategy is used in practice.",
    price: "5999",
    originalPrice: "7000",
    badge: "BEST SELLER",
    outOfStock: false,
    fastDelivery: false,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/1100306522.jpg",
    categoryName: "books",
  },
  {
    _id: uuid(),
    title: "Understanding before Moving",
    description:
      "Part 1: Ruy Lopez and Italian Structures by Herman Grooten This comprehensive guide, in dictionary form, makes all aspects of chess strategy quick, easy, and painlessly accessible to players of all degrees of strength. Each strategic concept is listed alphabetically and followed by a clear, easy-to-absorb explanation accompanied by examples of how this strategy is used in practice.",
    price: "1099",
    originalPrice: "2000",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/1127950722.jpg",
    categoryName: "books",
  },
  {
    _id: uuid(),
    title: "Chess Tactics from Scratch by Martin Weteschnik",
    description:
      "This comprehensive guide, in dictionary form, makes all aspects of chess strategy quick, easy, and painlessly accessible to players of all degrees of strength. Each strategic concept is listed alphabetically and followed by a clear, easy-to-absorb explanation accompanied by examples of how this strategy is used in practice.",
    price: "1099",
    originalPrice: "2000",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/2672550475.jpg",
    categoryName: "books",
  },
  {
    _id: uuid(),
    title: "Silman Complete Endgame Course by Jeremy Silman",
    description:
      "This comprehensive guide, in dictionary form, makes all aspects of chess strategy quick, easy, and painlessly accessible to players of all degrees of strength. Each strategic concept is listed alphabetically and followed by a clear, easy-to-absorb explanation accompanied by examples of how this strategy is used in practice.",
    price: "1249",
    originalPrice: "2000",
    badge: "",
    outOfStock: false,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/967051866.jpg",
    categoryName: "books",
  },
  {
    _id: uuid(),
    title: "Practical Chess Beauty (hardcover) by Yochanan Afek",
    description:
      "This comprehensive guide, in dictionary form, makes all aspects of chess strategy quick, easy, and painlessly accessible to players of all degrees of strength. Each strategic concept is listed alphabetically and followed by a clear, easy-to-absorb explanation accompanied by examples of how this strategy is used in practice.",
    price: "1499",
    originalPrice: "2000",
    badge: "",
    outOfStock: true,
    fastDelivery: true,
    imgUrl:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/9483337/1129205624.jpg",
    categoryName: "books",
  },
];
