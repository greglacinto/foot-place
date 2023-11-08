import Image from "next/image";
import { useRouter } from "next/navigation";

import '../styles/card.css'

const Card = ({ index, img, title, reviews, prevPrice, newPrice }: any) => {
  const router = useRouter();

  return (
    <>
        <section 
          className="grid grid-rows-2 grid-flow-col gap-2 hover:cursor-pointer"
          onClick={()=> {router.push(`pages/items/${index}`)}}  
          >
          <div className="card">
            <Image 
              priority={true}
              src={img} 
              alt={title}
              width={500}
              height={500}
              className="card-img"
            />
          </div>
          
          <div className="mx-auto">
          <div className="">
            <h3 className="card-title">{title}</h3>
            
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
            </section>
          </div>
        </div>
        </section>
    </>
  );
};

export default Card;