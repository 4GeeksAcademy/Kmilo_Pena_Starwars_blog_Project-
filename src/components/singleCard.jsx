import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavigationBar } from './navbar';


export default function DetailsCard  ()  {
  return (
    <>
    <div className='content-center'>
         < NavigationBar /> 
        <div>
            <Card style={{ width: '50rem', height:'40rem', marginLeft:'27rem', marginTop:'5rem' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            </Card.Body>
            </Card>
        </div>      
    </div>
   

    </>
  );
}

