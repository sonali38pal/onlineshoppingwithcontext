import "./directory-item.styles.scss";

function DirectoryItem({categories}) {
    const {title, imageUrl} = categories;

    return(
      <div className="directory-container">
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