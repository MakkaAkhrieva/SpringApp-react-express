import './card-item.css';

const CardItem = ({ img, alt, name, text }) => {
  return (
    <div className="box">
      <div className="box-wrapper">
        <div className="img-cont">
          <img src={img} alt={alt} />
        </div>
        <div className="flex-text">
          <h2 className="name">{name}</h2>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
