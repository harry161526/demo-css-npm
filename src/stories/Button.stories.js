import Button from '../Components/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    children: 'Click Me!',
  },
};

export const Secondary = {
  args: {
    children: 'Click Me!',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Click Me!',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Click Me!',
  },
};
