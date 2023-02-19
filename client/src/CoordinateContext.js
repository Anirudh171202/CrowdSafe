import React from 'react';

const CoordinateContext = React.createContext([{
    coordinates: null
}, () => {}])

export default CoordinateContext;