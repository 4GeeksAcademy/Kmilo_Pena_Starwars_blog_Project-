import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


export const NavigationBar = () => {

	return (
	  <Navbar className="bg-body-tertiary justify-content-between" style={{width:"90rem"}}>
		<Form inline style={{marginLeft:"15rem"}}>
		  <Link to={"/characters"}>
			<Button variant="outline-secondary" >Secondary</Button>{' '}
		  </Link>		
		</Form>
		<Form inline>
		  <Row>
			<Col xs="auto">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites {0}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">(Empty)</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Col>
		  </Row>
		</Form>
	  </Navbar>
	);
  }
  
  