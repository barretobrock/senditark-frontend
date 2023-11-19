import React, { useState, useContext } from 'react';

import { ConfigContext } from '../../contexts/ConfigContext';

const Configuration = () => {
    const configContext = useContext(ConfigContext);

    const [configOpen, setConfigOpen] = useState(false);
    let configClass = ['menu-styler'];
    if (configOpen) {
        configClass = [...configClass, 'open'];
        console.log(setConfigOpen);
        console.log(configContext);
        console.log(configClass);
    }

    return (
        <>
        </>
    );
};

export default Configuration;