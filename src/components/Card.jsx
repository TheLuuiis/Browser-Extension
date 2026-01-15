const Card = ({ id, name, description, image, isActive, onRemove, onToggleActive }) => {
  const handleRemoveClick = () => onRemove(id);
  const handleSwitchChange = () => onToggleActive(id);

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
        <button type="button" onClick={handleRemoveClick}>
          Remove
        </button>

        <label className="switch">
          <input type="checkbox" checked={isActive} onChange={handleSwitchChange} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Card;