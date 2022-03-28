import React from 'react';
import Rechart from './components/rechart/Rechart';
import SpecialChart from './components/specialCart/SpecialChart';
import { useSpring, animated } from 'react-spring'

const App = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return (
        <div>
            <animated.div style={props}>I will fade in</animated.div>
            <h1>my fancy chart</h1>
            <Rechart />
            <SpecialChart />
        </div>
    );
};

export default App;