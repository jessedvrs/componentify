'use strict';

import React from 'react';
import getNestedComponents from '../helpers/getNestedComponents';
import Component from './Component';
import classnames from 'classnames';

const STUB_COMPONENTS = [
    {
        _id: '4',
        nested_in: '3',
        details: {
            name: 'D'
        }
    },
    {
        _id: '1',
        details: {
            name: 'A'
        }
    },
    {
        _id: '3',
        nested_in: '2',
        details: {
            name: 'C'
        }
    },
    {
        _id: '2',
        details: {
            name: 'B'
        }
    }
];

export default class Components extends React.Component {
    render() {
        return this.renderNestedComponents(
            getNestedComponents(STUB_COMPONENTS)
        );
    }

    renderNestedComponents(components) {
        const list = components.map((c, index) => {
            return (
                <li key={index}>
                    <Component component={c}>
                        {this.renderNestedComponents(c.components)}
                    </Component>
                </li>
            );
        });

        return <ul className={classnames('cfy-componentlist')}>{list}</ul>;
    }
}
