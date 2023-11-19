import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NavLeft from './NavLeft';

import { ConfigContext } from '../../contexts/ConfigContext';
import * as actionType from '../../store/actions';

const NavBar = () => {
    //const [moreToggle, setMoreToggle] = useState(false);
    const configContext = useContext(ConfigContext);
    const { collapseMenu, headerBackColor, headerFixedLayout, layout, subLayout } = configContext.state;
    const { dispatch } = configContext;

    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', headerBackColor];
    if (headerFixedLayout && layout === 'vertical') {
        headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    const navToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_MENU });
    };

    let collapseClass = ['collapse navbar-collapse'];

    let navBar = (
        <React.Fragment>
            <div className="m-header">
                <Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={navToggleHandler}>
                    <span />
                </Link>
            </div>
            <div className={collapseClass.join(' ')}>
                <NavLeft />
            </div>
        </React.Fragment>
    );

    if (layout === 'horizontal' && subLayout === 'horizontal-2') {
        navBar = <div className="container">{navBar}</div>;
    }

    return (
        <React.Fragment>
            <header className={headerClass.join(' ')}>{navBar}</header>
        </React.Fragment>
    );
};

export default NavBar;