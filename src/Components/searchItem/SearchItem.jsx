import "./searchItem.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Api from "../../Components/searchItem/SearchApi";

const  SearchItem = () => {
  return Api.map((elements, index, arr) => {
    const { id, image, headLine, paragraph, rating ,ratingText,ratingNumber} = elements;
    return (
      <>
        <div className="items" key={id}>
          <div className="image">
            <div className="iwrapper">
              <IconButton className="ibutton">
                <FavoriteIcon className="con" />
              </IconButton>
            </div>
            <img src={image} alt="google.com" className="img" />
          </div>
          <div className="text">
            <h1>{headLine}</h1>
            <p className="text para">{paragraph}</p>
          </div>
          <div className="rating">
            <div className="rating-text">
              <div className="rating-head">{ratingText}</div>
              <span>{ratingNumber}</span>
            </div>
            <div>
              <button className="rating-btn">{rating}</button>
            </div>
          </div>
        </div>
      </>
    );
  });
};
export default SearchItem;
