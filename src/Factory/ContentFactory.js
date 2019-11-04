/*
Factory responsible for computing and returning actual
raw content that will appear on panels.
*/

import React from "react";

import { getTabMenu, getTabPanels } from "./TabFactory";
import { Tabs } from "react-web-tabs";

import { createStyles } from "@material-ui/styles";

const delims = {
  title: "t",
  plain: "p",
  list: "h",
  link: "l",
  compound: "c"
};

const styles = createStyles({
  plainTxt: {
    overflowWrap: "normal"
  },
  titleTxt: {
    fontFamily: "Courier New, Courier, monospace"
  },
  titleBox: {
    marginTop: "15px",
    marginLeft: "15px"
  },
  contentBox: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  headerTxt: {
    fontWeight: "bold"
  },
  listStyling: {
    listStyleType: "none"
  },
  listBox: {
    marginTop: "2%",
    marginLeft: "2%"
  },
  linkBox: {
    display: "flex",
    textAlign: "center",
    paddingRight: "5px",
    paddingLeft: "5px"
  },
  linkTxt: {
    position: "relative",
    top: "33%"
  },
  plainPanel: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  },
  compoundBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "-15px"
  }
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

const getTextBoxStyling = (content, chunk) => {
  const style = {
    overflowWrap: "normal",
    marginTop: content[chunk].subheader ? "-10px" : "0px",
    paddingBottom: content[chunk].endOfHeader ? "20px" : "0px"
  };

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
    switch (chunk.split("-")[0]) {
      //returns some plain text.
      case delims.plain:
        return getPlainText(content, chunk);

      //returns a link attached to text.
      case delims.link:
        return getLinkText(content, chunk);

      //returns an unordered list of elements.
      case delims.list:
        return getListText(content, chunk);

      //returns some title text.
      case delims.title:
        return getTitleText(content, chunk);

      //returns some compounded text elements.
      case delims.compound:
        return getCompoundText(content, chunk);

      default:
        return null;
    }
  });
};

const getPlainText = (content, chunk) => {
  return (
    <div style={{ ...getTextBoxStyling(content, chunk) }}>
      <p
        style={{
          ...styles.plainTxt,
          ...getTextStyling(content, chunk)
        }}
      >
        {content[chunk].text}
      </p>
    </div>
  );
};

const getLinkText = (content, chunk) => {
  return (
    <div
      style={{
        ...styles.linkBox,
        ...getTextBoxStyling(content, chunk)
      }}
    >
      <a style={styles.linkTxt} href={content[chunk].link}>
        {content[chunk].text}
      </a>
    </div>
  );
};

const getListText = (content, chunk) => {
  return (
    <div style={styles.listBox}>
      <header style={styles.headerTxt}>{content[chunk].head}</header>
      <ul style={styles.listStyling}>
        {Object.keys(content[chunk].items).map(key => {
          return (
            <li style={styles.listItemTxt}>{content[chunk].items[key]}</li>
          );
        })}
      </ul>
    </div>
  );
};

const getTitleText = (content, chunk) => {
  return (
    <div style={{ ...styles.titleBox }}>
      <p
        style={{
          ...styles.titleTxt,
          ...getTextStyling(content, chunk)
        }}
      >
        {content[chunk].text}
      </p>
    </div>
  );
};

const getCompoundText = (content, chunk) => {
  return (
    <div style={styles.compoundBox}>
      {Object.keys(content[chunk].items).map(el => {
        switch (el.split("-")[0]) {
          //returns plain text
          case delims.plain:
            return getPlainText(content[chunk].items, el);

          //returns link text
          case delims.link:
            return getLinkText(content[chunk].items, el);
          default:
            return null;
        }
      })}
    </div>
  );
};
