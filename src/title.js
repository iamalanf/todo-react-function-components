import React from 'react';

const Title = ({numberOfItems}) => {
    return (
        <div>
            <h1>
                My ToDo List
            </h1>
            <h2>
                {numberOfItems} items remaining
            </h2>
        </div>
    )
}

export default Title;