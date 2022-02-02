import React from 'react';

import'@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';


describe('pruebas en <GifGridItem/>',()=>{


    test('debe de mostrar <GifGridItem/> correctamente',()=>{

        const wrapper = shallow(<GifGridItem/>);-
        expect(wrapper).toMatchSnapshot();


    })



})