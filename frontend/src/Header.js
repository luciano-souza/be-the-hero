import React from 'react';

export default function Header({ children }) {
    return (
        <header>
            {/* <h1>{props.title}</h1> //uma opcao */}
            {/* <h1>{props.children}</h1> */}
            <h1>{children}</h1>
        </header>
    );
}

