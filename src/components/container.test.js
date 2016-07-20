import React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import Container from './container';

describe('index ', () => {

    it('renders correctly', () => {
        
        const component = TestUtils.renderIntoDocument(<Container />);
        expect(component).to.be.ok;
        
    });
});