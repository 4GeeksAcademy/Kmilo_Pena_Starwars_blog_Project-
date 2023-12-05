import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { NavigationBar } from './navbar';



 export default function Root () {

return (
		<>
		<NavigationBar />
       <h3 style={{marginLeft:"15rem", marginTop:"5rem", color:'white'}}>Characters</h3> 
	<div className="container-fluid">
		<Carousel style={{width:"95rem", marginLeft:"5rem", marginTop:"0px"}}>
		<Carousel.Item id='character'>
			<div className="d-flex" style={{flex:"row", marginLeft:"10rem"}}>
				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem' }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>
			
				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem', marginLeft:"1rem" }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem', marginLeft:"1rem" }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</Carousel.Item>

		<Carousel.Item id='character'>
			<div className="d-flex" style={{flex:"row", marginLeft:"10rem"}}>
				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem' }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>
			
				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem', marginLeft:"1rem" }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>

				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem', marginLeft:"1rem" }}>
					<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Link to={"singleCard"}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</Carousel.Item>

		</Carousel>
	</div>	
	  </>
	);
  }

  function Favorite({ character }) {
	// yes, this is a `let` for later
	let favorite = character.favorite;
	return (
	  <Form method="post">
		<button
		  name="favorite"
		  value={favorite ? "false" : "true"}
		  aria-label={
			favorite
			  ? "Remove from favorites"
			  : "Add to favorites"
		  }
		>
		  {favorite ? "★" : "☆"}
		</button>
	  </Form>
	);
  }
  
  