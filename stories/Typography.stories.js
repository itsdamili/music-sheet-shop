import Heading from '../components/typography/Heading';
import Paragraph from '../components/typography/Paragraph';

export default {
  title: 'Components/Typography',
  component: Heading,
};

export const Headings = () => (
  <>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
  </>
);

export const Paragraphs = () => (
  <>
    <Paragraph>This is a paragraph.</Paragraph>
  </>
);
