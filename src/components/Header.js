import React from 'react';

const Header = ({ onUpdate = f => f }) => (
    <header className='App-header'>
        <h1 className='App-title' style={{color: "#859296"}}>Погода здесь</h1>
        <button className='Refresh-Location-Button' onClick={onUpdate}>Обновить геолокацию</button>
    </header>
);

export default Header;