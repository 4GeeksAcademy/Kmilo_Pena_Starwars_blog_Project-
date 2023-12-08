import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { NavigationBar } from './navbar';
import { useState, useEffect } from "react";
// import { key } from 'localforage';



 export default function Root () {

	const [data, setData] = useState([]);
	console.log(data)
	useEffect(() => {
		fetch('https://swapi.dev/api/people')
		  .then(response => response.json())
		  .then(json => setData(json))
		  .catch(error => console.error(error));
	  }, []);

return (
		<>
		<NavigationBar />
       <h3 style={{marginLeft:"15rem", marginTop:"5rem"}}>Characters</h3> 
	<div className="container-fluid">
		 <Carousel style={{width:"95rem", marginLeft:"5rem", marginTop:"0px"}}>
		<Carousel.Item id='character'>
			<div className="d-flex" style={{flex:"row", marginLeft:"10rem"}}>
			{ data.results ? data.results.map((item, index) => {
			return(
				<Card style={{ width: '23rem', height:'28rem', marginTop:'8rem' }}>
					<Card.Img variant="top" src="https://www.sideshow.com/cdn-cgi/image/width=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/912537/anakin-skywalker-artisan-edition_star-wars_gallery_64c4173d253f9.jpg" />
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>
						<ul>{"Eye Color: " +item.eye_color}</ul>
						<ul>{"Gender: " +item.gender}</ul>
						<ul>{"Hair: " +item.hair_color}</ul>
						</Card.Text>
						<Link to={"/details/"+ item.name}>
							<Button variant="outline-primary">Learn more!</Button>
						</Link>
					</Card.Body>
				</Card>
			)
		}):""}
			
			</div>
		</Carousel.Item>

		</Carousel> 
	</div>	
	  </>
	);
  }

//   function Favorite({ character }) {
// 	// yes, this is a `let` for later
// 	let favorite = character.favorite;
// 	return (
// 	  <Form method="post">
// 		<button
// 		  name="favorite"
// 		  value={favorite ? "false" : "true"}
// 		  aria-label={
// 			favorite
// 			  ? "Remove from favorites"
// 			  : "Add to favorites"
// 		  }
// 		>
// 		  {favorite ? "★" : "☆"}
// 		</button>
// 	  </Form>
// 	);
//   }
  
  