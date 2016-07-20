import React from 'react';
import chai, { expect } from 'chai';
import freeze from 'deep-freeze';

import reducer from './default';
import { changeMessage } from '../actions/'

describe('Reducers ', () => {

    it('should return initial state', () => {
        const initialState = reducer();

        expect(initialState).to.deep.equal({ message: "initial message" });
    });

    it('update initial prop when changeMessage is invoked', () => {
        const initialState = reducer();
        
        freeze(initialState);
        
        const nextState = reducer( initialState , changeMessage("updated text") );

        expect(nextState).to.deep.equal({ message: "updated text" });
    });
});