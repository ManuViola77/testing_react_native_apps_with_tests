module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['extras', '__mocks__'],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|@rootstrap/redux-tools)',
  ],
  verbose: true,
};
