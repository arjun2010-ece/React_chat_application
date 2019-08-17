import React from 'react';
import PropTypes from 'prop-types';

const Message = ({author, message}) => {
 return ( 
    <p>
       <i>{author}</i> : {message}
    </p>
 );
}

Message.propTypes = {
 author: PropTypes.string.isRequired,
 message: PropTypes.string.isRequired,
}

export default Message;
