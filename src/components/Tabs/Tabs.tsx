import React, { useEffect } from "react";
import "./Tabs.css";

export interface tabItemTypes {
  key: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
  hasClose?: boolean;
  disabled?: boolean;
}

export interface TabsProps {
  tabItems: tabItemTypes[];
  closeButton?: React.ReactNode | string;
  addButton?: React.ReactNode | string;
  onAddTab?: (() => void) | undefined;
  classNames_content?: string;
  classNames_tab_title?: string;
  classNames_selected_tab_title?: string;
  styles_content?: React.CSSProperties;
  styles_tab_title?: React.CSSProperties;
  styles_selected_tab_title?: React.CSSProperties;
}

const Tabs = ({
  tabItems = [],
  closeButton,
  addButton,
  onAddTab,
  classNames_content = "",
  classNames_tab_title = "",
  classNames_selected_tab_title = "",
  styles_content = {},
  styles_tab_title = {},
  styles_selected_tab_title = {},
  ...props
}: TabsProps) => {
  const [tabs, setTabs] = React.useState<tabItemTypes[]>(tabItems);
  const [selectedTab, setSelectedTab] = React.useState<tabItemTypes>();
  const [selectedContent, setSelectedContent] =
    React.useState<tabItemTypes["content"]>();

  const onSelectTab = (item: tabItemTypes) => {
    setSelectedTab(item);
    setSelectedContent(tabs.find((t) => t.key === item.key)?.content);
  };

  const onCloseTab = (item: tabItemTypes) => {
    setTabs((pre) => pre.filter((t) => t.key !== item.key));
    setSelectedTab(tabs?.filter((t) => t.key !== item.key)?.[0]!);
    setSelectedContent(tabs?.filter((t) => t.key !== item.key)?.[0]?.content!);
  };

  useEffect(() => {
    setSelectedTab(tabItems[0]!);
    setSelectedContent(tabItems[0]?.content);
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }} {...props}>
        {tabs?.map((item) => (
          <div
            key={item.key}
            className={
              selectedTab?.key === item.key
                ? `${classNames_tab_title} ${classNames_selected_tab_title} rft_tabTitle_item`
                : `${classNames_tab_title} rft_tabTitle_item`
            }
            style={
              selectedTab?.key === item.key
                ? { ...styles_tab_title, ...styles_selected_tab_title }
                : styles_tab_title
            }
          >
            <span onClick={() => onSelectTab(item)}>{item?.icon}</span>
            <button disabled={item?.disabled} onClick={() => onSelectTab(item)}>
              {item.title}
            </button>
            {item?.hasClose && (
              <button onClick={() => onCloseTab(item)} style={{ zIndex: 10 }}>
                {closeButton ?? "X"}
              </button>
            )}
          </div>
        ))}
        {Boolean(addButton) && (
          <div
            className={`${classNames_tab_title} rft_tabTitle_item`}
            style={styles_tab_title}
            onClick={() => onAddTab?.()}
          >
            {addButton ?? "+"}
          </div>
        )}
      </div>
      <div
        className={`rft_tabContent ${classNames_content}`}
        style={styles_content}
      >
        {selectedContent}
      </div>
    </>
  );
};

export default Tabs;
