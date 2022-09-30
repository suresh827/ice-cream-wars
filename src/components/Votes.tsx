import "./Votes.css";

const Votes = () => {
  let widthSize = "100px";
  let rectStyle = {
    width: widthSize,
    height: "10px",
  };

  return (
    <div className="Votes">
      <h2 className="h2"> Vote Here </h2>
      <div className="flavorButtons">
        <button>Chocolate</button>
        <button>Vanilla</button>
        <button>Strawberry</button>
      </div>

      <h5>Choclate</h5>
      <div className="rectangle" style={rectStyle} />
      <h5>Vanilla</h5>
      <div className="rectangle" style={rectStyle} />
      <h5>Strawberry</h5>
      <div className="rectangle" style={rectStyle} />
    </div>
  );
};

export default Votes;
