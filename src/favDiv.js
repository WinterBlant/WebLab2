import React from 'react';
import AddFav from './components/AddFav';
import Favourites from './components/Favourites';
import { connect } from 'react-redux';
import { addNewCity, removeCity } from './actions/favourites';

class FavouriteDiv extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const city = e.target.cityName.value;
        e.target.cityName.value = 'Adding city...';
        this.props.addCity({ name: city });
        e.target.cityName.value = '';
    };

    handleRemove = (name) => {
        this.props.removeCity(name);
    };

    render() {
        return (
            <>
                <AddFav onSubmit={this.handleSubmit} isLoading={this.props.isLoading}/>
                <Favourites cities={this.props.cities} onRemove={this.handleRemove} errors={this.props.errors} isLoading={this.props.isLoading} />
            </>
        );
    }
}

const mapStateToProps = ({ favourite: { cities, isLoading, errors } }) => ({
    cities,
    isLoading,
    errors,
});

const mapDispatchToProps = {
    addCity: addNewCity,
    removeCity: removeCity,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavouriteDiv);
