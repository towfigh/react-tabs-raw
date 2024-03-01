# react-tabs-raw

> Fully Customizable | Dynamic Content | Accessibility | Easy Integration

This package is a fully customizable React tabs component designed to fit seamlessly into your project. With easy-to-implement features and extensive options for customization, it allows developers to create intuitive and dynamic tabbed interfaces quickly.

## Getting Started

To install the package, run the following command in your project directory:

```sh
$ npm i react-tabs-raw
```

or if you use Yarn:

```sh
$ yarn add react-tabs-raw
```

## Usage

#### Basic :

```js
import React from "react";
import { Tabs } from "react-tabs-raw";

const MyComponent = () => {
  const tabItems = [
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
  ];
  return <Tabs tabItems={tabItems} />;
};
```

### Tabs

| Prop                            | Description                                                                       | Default Value |
| ------------------------------- | --------------------------------------------------------------------------------- | ------------- |
| `tabItems`\*                    | An array of tabItemTypes objects, each representing a single tab in the component | []            |
| `closeButton`                   | Content to be displayed as the close button on each tab                           | 'X'           |
| `addButton`                     | Content to be displayed as the add button                                         | '+'           |
| `onAddTab`                      | A callback function that is executed when the add button is clicked               | -             |
| `classNames_content`            | CSS classNames applied to the content area of the tabs                            | ""            |
| `classNames_tab_title`          | CSS classNames applied to the title of each tab.                                  | ""            |
| `classNames_selected_tab_title` | CSS classNames applied to the title of the active (selected).                     | ""            |
| `styles_content`                | Inline CSS styles applied to the content area of the tabs.                        | {}            |
| `styles_tab_title`              | Inline CSS styles applied to the title of each tab.                               | {}            |
| `styles_selected_tab_title`     | Inline CSS styles applied to the title of the active (selected).                  | {}            |

#### tabItems :

| Prop        | Description                                                           | Type                     |
| ----------- | --------------------------------------------------------------------- | ------------------------ |
| `key`\*     | A unique identifier for the tab item.                                 | string / number          |
| `title`\*   | The text or element to be displayed as the tab's title.               | string / React.ReactNode |
| `content`\* | The main content of the tab that is displayed when the tab is active. | string / React.ReactNode |
| `icon`      | An icon displayed alongside the tab's title.                          | string / React.ReactNode |
| `hasClose`  | Indicating whether the tab item should display a close button.        | boolean                  |
| `disabled`  | Determines if the tab is disabled.                                    | boolean                  |

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -m 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request!

## Authors

- **Tofigh Nazari**
