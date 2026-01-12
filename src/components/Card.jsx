
const Card = ({name, description, image}) => {

    return (  
        <div className="card">
            <div className="container-info">
                <img src={image} alt={`icon-${name}`} />
                <div className="description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="container-functions">
                <button type="button">Remove</button>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}
 
export default Card;