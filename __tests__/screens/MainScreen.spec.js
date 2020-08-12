import {act, fireEvent, waitFor} from '@testing-library/react-native';
import {Alert} from 'react-native';
import AppStack from '../../src/navigators/AppStack';

import {renderWithNavigation} from '../extras/helpers';

describe('<MainScreen />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderWithNavigation(AppStack);
  });

  it('should render the main screen', () => {
    expect(wrapper.queryByTestId('MainScreen')).toBeTruthy();
  });

  it('should render the go to secondary screen button', () => {
    expect(wrapper.queryByTestId('button-to-secondary-screen')).toBeTruthy();
  });

  describe('when go to secondary screen button is pressed', () => {
    it('it should render SecondaryScreen ', async () => {
      act(() => {
        fireEvent.press(wrapper.queryByTestId('button-to-secondary-screen'));
      });
      await waitFor(() =>
        expect(wrapper.queryByTestId('SecondaryScreen')).toBeTruthy(),
      );
    });
  });

  it('should render the alert button', () => {
    expect(wrapper.queryByTestId('alert-button')).toBeTruthy();
  });

  describe('when take alert button is pressed', () => {
    it('it should render an Alert ', async () => {
      const alertSpy = jest.spyOn(Alert, 'alert');
      act(() => {
        fireEvent.press(wrapper.queryByTestId('alert-button'));
      });
      await waitFor(() => expect(alertSpy).toHaveBeenCalled());
    });
  });
});
