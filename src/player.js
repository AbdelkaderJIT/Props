
import Card from 'react-bootstrap/Card';




const  Player=(props) => {
    console.log(props.el)
    return ( 
<div style={{ display:'flex', justifyContent:'center', paddingTop:'100px' }}>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {
            <div>
            <Card.Title>Jersey Number : {props.el.jerseyNumber}</Card.Title>
            <Card.Text>Player's team :  {props.el.team}</Card.Text> 
            <Card.Text>
            Player's nationality :  {props.el.nationality}
            </Card.Text>
            <Card.Text>
            Player's age :{props.el.age}
            </Card.Text>
            </div>
        }
        
      </Card.Body>
    </Card>


</div>
  );
}

export default Player;