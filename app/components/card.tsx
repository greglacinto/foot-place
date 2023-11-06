import Image from "next/image";
import '../styles/card.css'

const Card = ({ img, title, star, reviews, prevPrice, newPrice }: any) => {
  return (
    <>
      <section className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="card">
          <Image 
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