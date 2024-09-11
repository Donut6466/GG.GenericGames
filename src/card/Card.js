import "./Card.css";
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; //css
import Button from 'react-bootstrap/Button'; //botão
import Card from 'react-bootstrap/Card'; //card

function Mycard(Props) {
    return (
        <div className="Card">
            <Card>
            <Card.Img variant="top" src={Props.capa} />
            <Card.Body>
            <Card.Title>{Props.titulo}</Card.Title>
            <Card.Text>
            {Props.lancamento}
            </Card.Text>
            <div className="sla">
                <Button variant="primary">Comprar</Button>
                <h4>{Props.avaliacao}</h4>
            </div>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Mycard