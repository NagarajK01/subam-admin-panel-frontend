import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerComponent = ({ show }) => {
    return show ? (
        <div className='spinner-overlay'>
            <div className='spinner-container'>
                <Spinner animation='border' variant='primary' />
            </div>
        </div>
    ) : null;
};

export default SpinnerComponent;