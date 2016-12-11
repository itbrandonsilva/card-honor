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

        it('that is an Immutable.Map', () => {
            expect(state).to.be.an.instanceof(Immutable.Map);
        });

        it('that has a "players" key pointing to an Immutable.Map', () => {
            expect(state.get('players')).to.be.an.instanceof(Immutable.Map);
        });

        it('that has a "spectators" key pointing to an object', () => {
            expect(state.get('spectators')).to.be.an.instanceof(Immutable.Map);
        });

        it('that has a "world" key pointing to an Immutable.Map', () =>  {
            expect(state.get('world')).to.be.an.instanceof(Immutable.Map);
        });

        it('that has an Immutable.List representing a 6x6 grid', () => {
            let map = state.get('world').get('map');
            expect(map).to.be.an.instanceof(Immutable.List);
            map.size.should.equal(6 * 6);
        });
    });
});