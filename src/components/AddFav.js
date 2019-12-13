import React from 'react';
import '../styles/favourite.css'

const AddFav = ({ onSubmit, isLoading }) => (
    isLoading.length === 0 ? (
        <div className='search'>
            <h1>
                Избранное
        </h1>
            <form onSubmit={onSubmit}>
                <input className='searchInput' placeholder='Добавить новый город' name='cityName' required='required' />
                <button className='searchButton' type='submit'>&#43;</button>
            </form>
        </div>)
        :
        (
            <div className='search'>
                <h1>
                    Избранное
            </h1>
                <h2>City is loading</h2>
                <form onSubmit={onSubmit}>
                    <input className='searchInput' placeholder='Добавить новый город' name='cityName' required='required' disabled />
                    <button className='searchButton' type='submit' disabled>&#43;</button>
                </form>
            </div>)
);

export default AddFav;