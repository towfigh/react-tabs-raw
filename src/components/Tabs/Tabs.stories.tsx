import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs, { tabItemTypes } from "./Tabs";

let mockTabs: tabItemTypes[] = [
  {
    key: "1",
    title: "tab 1",
    content: "content 1",
  },
  {
    key: "2",
    title: "tab 2",
    content: "content 2",
  },
  {
    key: "3",
    title: "tab 3",
    content: "content 3",
  },
  {
    key: "4",
    title: "tab 4",
    content: "content 4",
  },
];

const styles_content: React.CSSProperties = {
  border: "1px solid #d1d1d1",
  marginTop: "-1px",
};

const styles_tab_title: React.CSSProperties = {
  transition: "padding 0.5s",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  paddingRight: "10px",
  paddingLeft: "10px",
};

const styles_selected_tab_title: React.CSSProperties = {
  paddingRight: "15px",
  borderBottom: "2px solid white",
  paddingLeft: "15px",
};

const meta = {
  title: "react-tabs-raw",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    tabItems: mockTabs,
  },
  parameters: {
    controls: { exclude: ["closeButton", "addButton", "onAddTab"] },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tabItems: [
      {
        key: "1",
        title: "tab 1",
        content: "content 1",
      },
      {
        key: "2",
        title: "tab 2",
        content: "content 2",
      },
      {
        key: "3",
        title: "tab 3",
        content: "content 3",
      },
      {
        key: "4",
        title: "tab 4",
        content: "content 4",
      },
    ],
  },
};

export const Styles: Story = {
  args: {
    tabItems: [
      {
        key: "1",
        title: "tab 1",
        content: "content 1",
      },
      {
        key: "2",
        title: "tab 2",
        content: "content 2",
      },
      {
        key: "3",
        title: "tab 3",
        content: "content 3",
      },
      {
        key: "4",
        title: "tab 4",
        content: "content 4",
      },
    ],
    styles_content: styles_content,
    styles_tab_title: styles_tab_title,
    styles_selected_tab_title: styles_selected_tab_title,
  },
};

export const CloseButton: Story = {
  args: {
    tabItems: [
      {
        key: "1",
        title: "tab 1",
        content: "content 1",
        hasClose: true,
      },
      {
        key: "2",
        title: "tab 2",
        content: "content 2",
        hasClose: true,
      },
      {
        key: "3",
        title: "tab 3",
        content: "content 3",
        hasClose: true,
      },
      {
        key: "4",
        title: "tab 4",
        content: "content 4",
        hasClose: true,
      },
    ],
  },
};

export const AddButton: Story = {
  args: {
    tabItems: mockTabs,
    addButton: (
      <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>+</span>
    ),
    onAddTab: () => alert("Add new tab ..."),
  },
};

export const Icon: Story = {
  args: {
    tabItems: [
      {
        key: "1",
        title: "tab 1",
        content: "content 1",
        icon: "📁",
      },
      {
        key: "2",
        title: "tab 2",
        content: "content 2",
        icon: "👉",
      },
      {
        key: "3",
        title: "tab 3",
        content: "content 3",
        icon: "💼",
      },
      {
        key: "4",
        title: "tab 4",
        content: "content 4",
        icon: "🔍",
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    tabItems: [
      {
        key: "1",
        title: "tab 1",
        content: "content 1",
      },
      {
        key: "2",
        title: "tab 2",
        content: "content 2",
        disabled: true,
      },
      {
        key: "3",
        title: "tab 3",
        content: "content 3",
      },
      {
        key: "4",
        title: "tab 4",
        content: "content 4",
        disabled: true,
      },
    ],
  },
};
