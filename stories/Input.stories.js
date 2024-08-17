import TextInput from '../components/inputs/TextInput';

export default {
  title: 'Components/Inputs',
  component: TextInput,
};

export const Text = () => <TextInput placeholder="Enter text" />;
export const Email = () => <TextInput type="email" placeholder="Enter email" />;
