import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WatchList from './WatchList';

describe.skip( `WatchList component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <WatchList /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})