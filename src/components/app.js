import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Weather Forecast</h1>
        <p>Use the search bar below to get weather information for any US city.</p>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
