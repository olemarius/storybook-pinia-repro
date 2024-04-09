import type { Meta, StoryObj } from '@storybook/vue3';
import Pinia from '../../../../vue/src/Pinia.vue';

const meta = {
  title: 'Pinia/Error',
  component: Pinia,
  render: () => ({
    components: { Pinia },
    template: '<Pinia />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pinia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

