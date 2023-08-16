// { img, title, star, reviews, prevPrice, newPrice }
import { AiFillStar } from "react-icons/ai";

export const Products = [
  {
    id: "1",
    img: '/shoe1.webp',
    title: 'My Shoe 1',
    star: <AiFillStar className="rating-star"/>,
    reviews: '35',
    prevPrice: '$45',
    newPrice: '$40'
  },
  {
    id: "2",
    img: '/shoe2.webp',
    title: 'My Shoe 2',
    star: <AiFillStar className="rating-star"/>,
    reviews: '45',
    prevPrice: '$85',
    newPrice: '$30'
  },
  {
    id: "3",
    img: '/shoe3.webp',
    title: 'My Shoe 3',
    star: <AiFillStar className="rating-star"/>,
    reviews: '35',
    prevPrice: '$65',
    newPrice: '$45'
  },
]

