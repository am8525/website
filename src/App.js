import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './Components/SiteHeader';
import Profile from './Components/Profile';
import AnimeBackground from './Components/AnimeBackground';
import DataRef from './Components/DataRef';
import InfoCard from './Components/Tabbing/InfoCard';
import { Provider, connect } from 'react-redux';


import store from './store';

function App() {
  return (
	<div className="topLevel">
		<Provider store={store}>
			<DataRef />
		    <div className="App">
		    	<SiteHeader />
		    	<Profile />
		    	<InfoCard />
		    </div>
	    </Provider>
    </div>
  );
}

export default App;
