import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
    const classes = classNames("footer-nav", className);

    return (
        <nav {...props} className={classes}>
            <ul className="list-reset">
                <li>
                    <a href="mailto:teamhamsterdam@gmail.com">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
