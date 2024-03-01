import React from "react";
import "./styles.css";
import { Tabs } from "../components";

let mockTabs = [
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

const styles_content = {
  border: "1px solid #d1d1d1",
  marginTop: "-1px",
};

const styles_tab_title = {
  transition: "padding 0.5s",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  paddingRight: "10px",
  paddingLeft: "10px",
};

const styles_selected_tab_title = {
  paddingRight: "15px",
  borderBottom: "2px solid white",
  paddingLeft: "15px",
};

export default {
  component: Tabs,
  title: "react-tabs-raw",
  tags: ["autodocs"],
};

export const Default = {
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

export const Styles = {
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

export const CloseButton = {
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

export const AddButton = {
  args: {
    tabItems: mockTabs,
    addButton: (
      <span style={{ paddingRight: "4px", paddingLeft: "4px" }}>+</span>
    ),
    onAddTab: () => alert("Add new tab ..."),
  },
};

export const Icon = {
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

export const Disabled = {
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
