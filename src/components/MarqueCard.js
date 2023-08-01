import image11 from "../date1.jpeg"



const MarqueCard = (props) => {
  return (
    <div style={{marginLeft:"30px",marginRight:"30px",}}>
      <img style={{ height:"150px",width:"150px",borderRadius:"20px",}} src={props.image} alt="" />
    </div>
  );
};

export default MarqueCard;
