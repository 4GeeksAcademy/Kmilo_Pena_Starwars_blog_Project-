import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
//import { Favorite } from './characters';

export const NavigationBar = ({favorite, setFavorite}) => {

	

	return (
	  <Navbar className="bg-body-tertiary justify-content-between" style={{width:"90rem"}}>
		<Form inline style={{marginLeft:"15rem"}}>
		  <Link to={"/"}>
			<img src='https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG42.png' style={{width:'5rem', height:'4rem'}}/>
		  </Link>		
		</Form>
		<Form inline>
		  <Row>
			<Col xs="auto">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites 
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{ favorite && favorite != undefined &&
						favorite.length > 0 ? 
						favorite.map( (item, i)=>{

							return (
								<>
								<Dropdown.Item>
									<div style={{display:'flex'}}>
										{item}
									<Form>
										<i class="bi bi-trash3"></i>
										<CloseButton  onClick={() => {
											let newFav = favorite.filter((item, index) => index != i) 
											setFavorite(newFav)
										}}type="submit"/>
									</Form>
									</div>
								</Dropdown.Item>
								</>
							)
						}):<h5>Empty</h5>}
					</Dropdown.Menu>
				</Dropdown>
			</Col>
		  </Row>
		</Form>
	  </Navbar>
	);
  }
  
  