import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from './ListItem';

describe.skip( `ListItem component`, () => {
  it( `renders empty given no item`, () => {
    const wrapper = shallow( <ListItem /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })

  it( `renders the item when supplied`, () => {
    const testItem = { title: 'test-title' }
    const wrapper = shallow( <ListItem item={ testItem }  /> )
    expect( toJson( wrapper ) ).toMatchSnapshot()
  })

})