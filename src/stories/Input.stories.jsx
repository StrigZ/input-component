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
    size: {
      options: ["sm", "md"],
      control: "inline-radio",
    },
    startIcon: {
      options: [
        "none",
        "close",
        "settings",
        "done",
        "file_download",
        "file_upload",
      ],
      control: "radio",
    },
    endIcon: {
      options: [
        "none",
        "close",
        "settings",
        "done",
        "file_download",
        "file_upload",
      ],
      control: "radio",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  id: "input",
  name: "input",
  type: "text",
  placeholder: "Placeholder",
  error: true,
  disabled: false,
  helperText: "Some interesting text",
  startIcon: "settings",
  endIcon: "settings",
  text: "Text",
  size: "sm",
  fullWidth: true,
};
