import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

function DirectoryItem({categories}) {
    const navigate = useNavigate();

    const {title, imageUrl, routeName} = categories;

    const navigationHandler = function(){
      navigate(routeName);
    }

    return(
      <div className="directory-container" onClick={navigationHandler}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})` }}>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default DirectoryItem;