import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainDiv from './mainDiv'
import FavouriteDiv from './favDiv'
import './styles/app.css'
import Header from './components/Header'
import { initWeather } from './actions/city';
import { initFavs } from './actions/favourites';

class App extends Component {

  handleUpdateWeather = () => {
    this.props.initWeather();
  };

  componentDidMount() {
    this.props.initWeather();
    this.props.initFavs();
  }

  render() {
    const { weather, isLoading, error } = this.props;
    return (
      <div className='App'>
        <Header onUpdate={this.handleUpdateWeather} />
        <MainDiv weather={weather} isLoading={isLoading} error={error} />
        <FavouriteDiv />
      </div>
    )
  }
}

const mapStateToProps = ({ city: {isLoading, weather, error} }) => {
  return {
    isLoading,
    weather,
    error
  };
};
const mapDispatchToProps = {
  initWeather: initWeather,
  initFavs: initFavs
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
