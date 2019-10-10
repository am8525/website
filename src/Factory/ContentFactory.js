/*
Factory responsible for computing and returning actual
raw content that will appear on panels.
*/

import React from "react";

import { getTabMenu, getTabPanels } from "./TabFactory";
import { Tabs } from "react-web-tabs";

import { makeStyles } from "@material-ui/styles";

const delims = {
  title: "t",
  plain: "p",
  list: "h",
  link: "l"
};

const styles = makeStyles({
  plainTxt: {},
  titleTxt: {},
  headerTxt: {},
  listStyling: {
    listStyleType: "none"
  },
  listItemTxt: {},
  linkTxt: {}
});

export const getInfoCardContent = (tabs, currentTab, tabStr) => {
  /*
	Used to return a TabMenu, along with a stack of TabbedPanels and PlainPanels.
	*/
  if (tabs && tabs[currentTab] && tabs[currentTab].sections) {
    return (
      <div>
        <Tabs vertical defaultTab={tabStr.concat("-", "0")}>
          {getTabMenu(tabs, currentTab, tabStr)}
          {getTabPanels(tabs, currentTab, tabStr)}
        </Tabs>
      </div>
    );
  } else if (tabs && tabs[currentTab]) {
    /*
	Typically used to return a single PlainPanel.
	*/
    return getTabPanels(tabs, currentTab, tabStr);
  } else {
    return null;
  }
};

/**
 * Retrieves styling info from the config file.
 */
const getTextStyling = (content, chunk) => {
  const style = {
    display: content[chunk].inline ? "inline" : "block",
    fontWeight: content[chunk].b ? "bold" : "normal",
    fontStyle: content[chunk].i ? "italic" : "normal",
    textDecoration: content[chunk].u ? "underline" : "none"
  };
  if (content[chunk].size) style["fontSize"] = content[chunk].size;
  return style;
};

/**
 * @param content - the snippet we're working with.
 *
 * This method switches on the content delimiter,
 * returning the content in an appropriate fashion.
 */
export const getContent = content => {
  return Object.keys(content).map(chunk => {
    /**
     * TODO: need a way to attach inline display onto the existing style.
     */
    switch (chunk.split("-")[0]) {
      //returns some plain text.
      case delims.plain:
        return (
          <p style={{ ...styles.plainTxt, ...getTextStyling(content, chunk) }}>
            {content[chunk].text}
          </p>
        );
      //returns a link attached to text.
      case delims.link:
        return (
          <a style={styles.linkTxt} href={content[chunk].link}>
            {content[chunk].text}
          </a>
        );
      //returns an unordered list of elements.
      case delims.list:
        return (
          <div>
            <header style={styles.headerTxt}>{content[chunk].head}</header>
            <ul style={styles.listStyling}>
              {Object.keys(content[chunk].items).map(key => {
                return (
                  <li style={styles.listItemTxt}>
                    {content[chunk].items[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      case delims.title:
        return (
          <p style={{ ...styles.titleTxt, ...getTextStyling(content, chunk) }}>
            {content[chunk].text}
          </p>
        );
      default:
        return null;
    }
  });
};
