import React from 'react';
import Rechart from './components/rechart/Rechart';
import SpecialChart from './components/specialCart/SpecialChart';

const App = () => {
    return (
        <div>
            <h1>my fancy chart</h1>
            <Rechart />
            <SpecialChart />
        </div>
    );
};

export default App;