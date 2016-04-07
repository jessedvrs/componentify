'use strict';

import React from 'react';
import Components from './Components';

export default class Frame extends React.Component {
    render() {
        return (
            <main>
                <h1>Componentify</h1>
                <Components />
            </main>
        );
    }
}
