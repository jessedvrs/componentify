'use strict';

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Frame from '../imports/components/Frame';

Meteor.startup(() => {
    render(<Frame />, document.getElementById('react-root'));
});
