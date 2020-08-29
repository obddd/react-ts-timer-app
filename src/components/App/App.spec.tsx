import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App component renders', () => {
    let container = shallow(<App/>);
    it('should render a div', () => {
        expect(container.find('div').length).toEqual(1)
    })
})