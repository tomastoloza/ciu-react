import React, {Fragment} from 'react';

const Footer = ({estYear}) => {
    const thisYear = new Date().getFullYear()
    return (
        <Fragment>
            <p>Copyright {estYear} - {thisYear}</p>
        </Fragment>
    )
}

export default Footer;