import React from 'react';
import { render } from '@testing-library/react-native';
import Banner from '../Atoms/Banner';


describe('SW Mobile Tests', () => {
  test('Renders banner', () => {
    const component = render(<Banner />);
    expect(component).toBeDefined();
    expect(component.getByTestId('banner-img')).toBeDefined();
  });


});
