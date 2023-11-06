import Image from "next/image";
import { useRouter } from "next/navigation";

import '../styles/card.css'
import { AiFillStar } from "react-icons/ai";

const star = <AiFillStar className="rating-star"/>

const Card = ({ index, img, title, reviews, prevPrice, newPrice }: any) => {
  const router = useRouter();

  return (
    <>
        <section 
          className="border-2 grid grid-rows-3 w-full 
            mb-2 justify-items-start hover:cursor-pointer"
          onClick={()=> {router.push(`pages/items/${index}`)}}  
          >
          <div className="flex-1 row-span-2">
            <Image 
              priority={true}
              src={img} 
              alt={title}
              width={500}
              height={500}
              className=""
            />
          </div>
          
          <div className="grid grid-rows-3">
            <h3 className="">{title}</h3>
            <section className="flex content-center">
              {star} {star} {star} {star}
              <span className="">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="flex">
                <del>${prevPrice}</del>&nbsp;&nbsp;${newPrice}
              </div>
            </section>
          </div>
        </section>
    </>
  );
};

export default Card;