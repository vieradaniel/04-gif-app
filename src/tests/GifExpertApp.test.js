import React from 'react';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';




describe('testing <GifExpertApp/>', () => {
  
    test('should show the correct component and match with the snapshot', () => {
      
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('should show a list of categories', () => {
      const categories = ['sailor moon','dragon ball'];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    

});
