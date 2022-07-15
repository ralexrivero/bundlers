import React from 'react';
import ReactDom from 'react';

const Hello = () => {
    return <div>Hello Parcel!</div>
}

ReactDom.render(<Hello />, document.getElementById('app'));
