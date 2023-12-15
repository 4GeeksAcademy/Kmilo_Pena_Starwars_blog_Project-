import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import { NavigationBar } from './navbar';
import React, { useState, useEffect}  from "react";
import { Form } from "react-router-dom";



// import { key } from 'localforage';




 export default function Transportation () {
	const Transportation = {
		favorite: true
	};
	const [data, setData] = useState([]);
	console.log(data)
	useEffect(() => {
		fetch('https://swapi.dev/api/starships')
		  .then(response => response.json())
		  .then(json => setData(json))
		  .catch(error => console.error(error));
	  }, []);

	  const [favorite, setFavorite] = useState([]);

return (
	<>
		
		<div id='planets'>
       <h3 style={{marginLeft:"15rem", marginTop:"5rem"}}>Transportation</h3> 
	  
		  <Carousel> 
		  { data.results ? data.results.map((item) => {
				return(
			<Carousel.Item style={{marginLeft:'15rem', width:'75rem'}}>
					<Card>
						<Card.Img variant="top" /*src="https://www.sideshow.com/cdn-cgi/image/width=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/912537/anakin-skywalker-artisan-edition_star-wars_gallery_64c4173d253f9.jpg"*/ />
						<Card.Body style={{width:'50rem'}}>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>
							<ul>{"Model: " +item.model}</ul>
							<ul>{"Manufacturer: " +item.manufacturer}</ul>
							<ul>{"Cost in credits: " +item.cost_in_credits}</ul>
							</Card.Text>
							<Link to={"/detailsTransportation/"+ item.name}>
								<Button variant="outline-primary">Learn more!</Button>
							</Link>
							<div>
							<Favorite character={item.name} setFavorite={setFavorite} favorite={favorite}/>
							</div>
						</Card.Body>
					</Card>
			</Carousel.Item>
			
		)
		}):""}

		
		</Carousel> 
		</div>

		
	  </>
	);
  }
  
  export function Favorite({ transportation, setFavorite, favorite }) {
	// yes, this is a `let` for later
	
	return (
	  <Form>
			<button 
			onClick={ ()=> setFavorite([...favorite, transportation])}
			name="favorite"
			// value={favorite ? "false" : "true"}
			// aria-label={
			// 	favorite
			// 	? "Remove from favorites"
			// 	: "Add to favorites"
			// }
			>
			{favorite ? "★" : "☆"}
			{/* "★" */}
			</button>
		</Form>
	);
  }
 