import React, { Component } from 'react';
import './styles.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import { BrowserRouter } from "react-router-dom";
import Main from "./components/ItemList/Main";

class App extends Component {
	render() {
		return (
      <div className='App'>
        <NavBar
        />
		<BrowserRouter>
        <Main />
      	</BrowserRouter>
      <div>
        <Header
          title='La Casa del Oso Birrero'
        />
				<div className='UserSection'>
					<CardComponent
						name='Prohibition Lager'
						description='Una Rubia más suave. Alc. 5%'
						img='https://imgur.com/6E1Dyqi.jpg'
					/>
					<CardComponent
						name='Sueños Revoltosos'
						description='Pale Ale, con frambuesa y lactosa. Alc 5.5%'
						img='https://imgur.com/KNp0JLa.jpg'
					/>
					<CardComponent
						name='Vienna Lager'
						description='Rubia y suave. Alc 5%'
						img='https://imgur.com/ywYHXTZ.jpg'
					/>
				</div>
      </div>
      </div>
		);
	}
}

export default App;
