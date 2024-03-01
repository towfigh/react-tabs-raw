import React, { useEffect } from "react";
import "./styles.css";

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
}) => {
  const [tabs, setTabs] = React.useState(tabItems);
  const [selectedTab, setSelectedTab] = React.useState();
  const [selectedContent, setSelectedContent] = React.useState();

  const onSelectTab = (item) => {
    setSelectedTab(item);
    setSelectedContent(tabs.find((t) => t.key === item.key)?.content);
  };

  const onCloseTab = (item) => {
    setTabs((pre) => pre.filter((t) => t.key !== item.key));
    setSelectedTab(tabs?.filter((t) => t.key !== item.key)?.[0]);
    setSelectedContent(tabs?.filter((t) => t.key !== item.key)?.[0]?.content);
  };

  useEffect(() => {
    setSelectedTab(tabItems[0]);
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
