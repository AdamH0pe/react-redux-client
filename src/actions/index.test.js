import React from 'react';
import chai, { expect } from 'chai';

import { changeMessage } from './index';

describe('Actions ', () => {

    it('changeMessage return new message', () => {
        const result = changeMessage('foo');

        expect(result.message).to.equal('foo');
        expect(result.type).to.equal('DEFAULT');
    });
});