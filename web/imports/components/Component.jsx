'use strict';

import React from 'react';
import classnames from 'classnames';

export default class Component extends React.Component {
    render() {
        return (
            <div className={classnames('cfy-component')}>
                {this.props.component.details.name}
                {this.props.children}
                <button>+</button>
            </div>
        );
    }
}
