import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StreamingOptions from './StreamingOptions';

describe( `StreamingOptions component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <StreamingOptions /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})