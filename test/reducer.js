const redux = require('redux');
const Immutable = require('immutable');
const chai = require('chai');
const expect = chai.expect;
chai.should();

const reducer = require('../src/reducer');


describe('reducer', () => {
    describe('should define a default a state', () => {
        let state;
        beforeEach(() => {
            store = redux.createStore(reducer);
            state = store.getState();
        });

        it('that has a "players" key pointing to an object', () => {
            expect(state.get('players')).to.be.an.instanceof(Immutable.Map);
        });

        it('that has a "spectators" key pointing to an object', () => {
            expect(state.get('spectators')).to.be.an.instanceof(Immutable.Map);
        })
    });
});