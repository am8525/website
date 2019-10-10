import React from "react";

import { Tab, TabList, TabPanel } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import { createStyles } from "@material-ui/styles";

import { getPanelComponent } from "./PanelFactory";

const styles = createStyles({
  vertTabTxt: {
    fontWeight: "bold",
    display: "inline",
    padding: "-20px"
  },
  panelStack: {
    marginLeft: "-15px"
  }
});

export const getTabMenu = (tabs, currentTab, tabStr) => {
  if (tabs && tabs[currentTab] && tabs[currentTab].sections) {
    //only return a TabList if necessary

    return (
      <div style={styles.tabList}>
        <TabList>
          {Object.keys(tabs[currentTab].content).map((section, index) => {
            return (
              <Tab tabFor={tabStrBuilder(tabStr, index)}>
                <p style={styles.vertTabTxt}>{section}</p>
              </Tab>
            );
          })}
        </TabList>
      </div>
    );
  } else {
    return null;
  }
};

export const getTabPanels = (tabs, currentTab, tabStr) => {
  if (tabs && tabs[currentTab] && tabs[currentTab].sections) {
    return (
      <div style={styles.panelStack}>
        {Object.keys(tabs[currentTab].content).map((section, index) => {
          return (
            <TabPanel
              tabId={tabStrBuilder(tabStr, index)}
              render={({ selected }) =>
                selected
                  ? getPanelComponent(tabs[currentTab].content, section)
                  : null
              }
            />
          );
        })}
      </div>
    );
  } else {
    return getPanelComponent(tabs, currentTab);
  }
};

const tabStrBuilder = (str, index) => {
  return str.concat("-", index.toString(10));
};
