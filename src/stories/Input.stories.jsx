// Input.stories.js|jsx

import React from "react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    multiline: {
      control: "boolean",
    },
    row: {
      control: "number",
      if: { arg: "multiline", truthy: true },
    },
    size: {
      options: ["sm", "md"],
      control: "inline-radio",
    },
    startIcon: {
      options: ["none", "upload", "delete", "download", "lock", "add"],
      control: "radio",
    },
    endIcon: {
      options: ["none", "upload", "delete", "download", "lock", "add"],
      control: "radio",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
};
export const Error = Template.bind({});
Error.args = {
  label: "Label",
  placeholder: "Placeholder",
  error: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
};
export const HelperText = Template.bind({});
HelperText.args = {
  label: "Label",
  placeholder: "Placeholder",
  helperText: "some interesting text",
};
export const StartIcon = Template.bind({});
StartIcon.args = {
  label: "Label",
  placeholder: "Placeholder",
  startIcon: "upload",
};
export const EndIcon = Template.bind({});
EndIcon.args = {
  label: "Label",
  placeholder: "Placeholder",
  endIcon: "download",
};
export const Text = Template.bind({});
Text.args = {
  label: "Label",
  placeholder: "Placeholder",
  value: "Text",
};
export const Small = Template.bind({});
Small.args = {
  label: "Label",
  placeholder: "Placeholder",
  size: "sm",
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Label",
  placeholder: "Placeholder",
  fullWidth: true,
};
export const Multiline = Template.bind({});
Multiline.args = {
  label: "Label",
  placeholder: "Placeholder",
  multiline: true,
  row: 4,
};
