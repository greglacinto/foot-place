import Image from "next/image";
import '../styles/card.css'

const Card = ({ img, title, star, reviews, prevPrice, newPrice }: any) => {
  return (
    <>
      <section className="card">
        <Image 
          src={img} 
          alt={title}
          width={500}
          height={500}
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
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