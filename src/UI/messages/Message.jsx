import React from 'react';
import { NEW_SEARCH } from '../../utils/errorMessages';


export const Message = (props) => {
    return <h1>{props.errorMessage ? props.errorMessage : NEW_SEARCH}</h1>
}