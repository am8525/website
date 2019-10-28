import React from "react";

import { Tabs } from "react-web-tabs";

import { getContent } from "./ContentFactory";
import { getTabMenu, getTabPanels } from "./TabFactory";

import { SUBTAB_STR } from "../Constants";
import { createStyles } from "@material-ui/core";

const styling = createStyles({
  plainPanel: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  },
  tabbedPanelStack: {
    marginLeft: "15px"
  }
});

export const getPanelComponent = (tabContent, section) => {
  if (tabContent && tabContent[section] && tabContent[section].sections) {
    //return a TabbedPanel
    return <TabbedPanel sections={tabContent} currentSection={section} />;
  } else {
    //return a PlainPanel
    return <PlainPanel sections={tabContent} currentSection={section} />;
  }
};

function PlainPanel(props) {
  const { sections, currentSection } = props;

  if (
    sections &&
    sections[currentSection] &&
    sections[currentSection].content
  ) {
    return (
      <div style={styling.plainPanel}>
        {getContent(sections[currentSection].content)}
      </div>
    );
  } else {
    return null;
  }
}

function TabbedPanel(props) {
  const { sections, currentSection } = props;

  if (sections && sections[currentSection]) {
    return (
      <div>
        <Tabs horizontal>
          {getTabMenu(sections, currentSection, SUBTAB_STR)}
          <div style={styling.tabbedPanelStack}>
            {getTabPanels(sections, currentSection, SUBTAB_STR)}
          </div>
        </Tabs>
      </div>
    );
  } else {
    return null;
  }
}
