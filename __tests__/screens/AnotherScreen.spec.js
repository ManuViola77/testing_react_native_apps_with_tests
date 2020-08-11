import {act, fireEvent, waitFor} from '@testing-library/react-native';

import {screenParameters} from '../extras/data';
import {renderWithNavigation} from '../extras/helpers';
import AnotherScreen from '../../src/screens/AnotherScreen';
import MainScreen from '../../src/screens/MainScreen';

describe('<AnotherScreen />', () => {
  let wrapper;

  const otherComponents = [{name: 'MainScreen', component: MainScreen}];

  beforeEach(() => {
    wrapper = renderWithNavigation(AnotherScreen, {
      otherComponents,
      screenConfig: {
        initialParams: screenParameters,
      },
    });
  });

  it('should render AnotherScreen', () => {
    expect(wrapper.queryByTestId('AnotherScreen')).toBeTruthy();
  });

  it('should render the go back button', () => {
    expect(wrapper.queryByTestId('back-button')).toBeTruthy();
  });

  describe('when go back button is pressed', () => {
    it('it should render MainScreen ', async () => {
      act(() => {
        fireEvent.press(wrapper.queryByTestId('back-button'));
      });
      await waitFor(() =>
        expect(wrapper.queryByTestId('MainScreen')).toBeTruthy(),
      );
    });
  });

  it('should render title', () => {
    expect(wrapper.queryByTestId('title')).toBeTruthy();
  });

  it('should render param one', () => {
    expect(wrapper.queryByTestId('param-one')).toBeTruthy();
  });

  it('should render param two content', () => {
    expect(wrapper.queryByTestId('param-two-content')).toBeTruthy();
  });
});
