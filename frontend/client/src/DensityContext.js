import React from 'react';

const DensityContext = React.createContext([{
    density: {time: [0], count: [0]}
}, () => {}])

export default DensityContext;