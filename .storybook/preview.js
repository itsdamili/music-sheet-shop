import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/store';
import { ApolloProvider } from '@apollo/client';
import client from '../apolloClient';

export const decorators = [
  (Story) => (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Story />
      </ReduxProvider>
    </ApolloProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};