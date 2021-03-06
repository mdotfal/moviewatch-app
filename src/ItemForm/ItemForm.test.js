import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemForm from './ItemForm';

describe( `ItemForm component`, () => {

  it( `renders without errors`, () => {
    const wrapper = shallow( <ItemForm /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })

  it( `renders with test item`, () => {
    const testItem = {
      title: 'test title', 
      rating: 'test rating'
    }
    const wrapper = shallow( <ItemForm test={ testItem }/> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})