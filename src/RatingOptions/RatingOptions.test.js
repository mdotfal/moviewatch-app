import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RatingOptions from './RatingOptions';

describe( `RatingOptions component`, () => {
  it( `renders without errors`, () => {
    const wrapper = shallow( <RatingOptions /> )
    expect( toJson( wrapper )).toMatchSnapshot()
  })
})