import React from 'react';
import '../styles/favourite.css'

const AddFav = ({ onSubmit = f => f }) => (
    <div className='search'>
        <h1>
            Избранное
        </h1>
        <form onSubmit={onSubmit}>
            <input className='searchInput' placeholder='Добавить новый город' name='cityName' required='required'/>
            <button className='searchButton' type='submit'>&#43;</button>
        </form>
    </div>
);

export default AddFav;