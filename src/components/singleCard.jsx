import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavigationBar } from './navbar';
import React,{ useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export default function DetailsCard  ()  {
  const params = useParams()
  
  const [data, setData] = useState([]);
	console.log(data)
	useEffect(() => {
		fetch('https://swapi.dev/api/people/')
		  .then(response => response.json())
		  .then(json => setData(json.results.find(item =>item.name == params.name)))
		  .catch(error => console.error(error));
      console.log("Este es el params",params)
	  }, []);

    return (
      <>
      <div className='content-center'>
           < NavigationBar /> 
          <div>
              <Card style={{ width: '28rem', height:'39rem', marginLeft:'28rem', marginTop:'3rem' }}>
              <Card.Img variant="left" src="https://www.sideshow.com/cdn-cgi/image/width=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/912537/anakin-skywalker-artisan-edition_star-wars_gallery_64c4173d253f9.jpg" 
                                            style={{width:"28rem", height:"24rem"}} />
              <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text variant="right">
                  <ul>{"Gender: "+data.gender}</ul>
                  <ul>{"Skin Color: "+data.skin_color}</ul>
                  <ul>{"Height: "+data.height}</ul>
                  <ul>{"Birth Year: "+data.birth_year}</ul>
                  <ul>{"Weigth: "+data.mass}</ul>
              </Card.Text>
              </Card.Body>
              </Card>
          </div>      
      </div>
     
  
      </>
    );
  
}

