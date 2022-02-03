import { shallow } from 'enzyme';
import React from 'react';
import {AddCategory} from '../../components/AddCategory';


describe('Pruebas en <AddCategory/>',()=>{

    const setCategories = ()=>{};


    test('debe mostrarse correctamente',()=>{

       
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot()

    })


})