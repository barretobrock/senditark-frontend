import React from "react";

const NavIcon = ({ items }) => {
    let navIcons = false;
    if (items.icon) {
        let Icon = items.icon;
        navIcons = (
            <span className={'pcoded-micon'}>
                <Icon />
            </span>
        );
    }

    return <React.Fragment>{navIcons}</React.Fragment>;
};

export default NavIcon;