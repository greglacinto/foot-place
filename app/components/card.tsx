import Image from "next/image";
import { useRouter } from "next/navigation";

import '../styles/card.css'

const Card = ({ index, img, title, reviews, prevPrice, newPrice }: any) => {
  const router = useRouter();

  return (
    <>
        <section 
          className="gap-2 h-80 justify-items-center">
          <div className="card hover:cursor-pointer h-4/6 shadow-lg"
            onClick={()=> {router.push(`pages/items/${index}`)}}
          >
            <Image 
              priority={true}
              src={img} 
              alt={title}
              width={500}
              height={500}
              className="card-img"
            />
          </div>
          
          
          <div className="flex flex-col items-center">
            <h3 className="card-title">{title}</h3>
            
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
            </section>
          </div>
        </section>
    </>
  );
};

export default Card;