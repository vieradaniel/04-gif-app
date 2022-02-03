import React from 'react';

import'@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';



describe('pruebas en <GifGridItem/>',()=>{

    const url="http://localhost/algo.jpg";
    const title="un titulo";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('debe de mostrar <GifGridItem/> correctamente',()=>{


        expect(wrapper).toMatchSnapshot();


    })

    test('debe de tener un párrafo con el title',()=>{

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    })

    test('debe tener la imagen y la url de los props',()=>{

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url) ;
        expect(img.prop('alt')).toBe(title) ;

    });

    test('debe de tener animate__fadeIn',()=>{

        const div = wrapper.find('div');
        
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);

    })



})