import PrimaryButton from '../components/buttons/PrimaryButton';
import RemoveButton from '../components/buttons/RemoveButton';

export default {
  title: 'Components/Buttons',
  component: PrimaryButton,
};

export const Primary = () => <PrimaryButton>Click me</PrimaryButton>;
export const Remove = () => <RemoveButton>Remove Item</RemoveButton>;
