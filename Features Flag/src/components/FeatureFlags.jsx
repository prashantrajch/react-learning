import { useContext, useEffect, useState } from "react";
import FeaturFlagGlobalState, { FeaturFlagsContext } from "../context";
import LightDarkMode from "./Light Dark Mode/LightDarkMode";
import Accordion from "./Accordion/Accordion";
import SliderImage from "./Image Slider/SliderImage";
import RandomColor from "./Random Color Generator/Random-color";
import TicTacToe from "./Tic Tac Toe/TicTacToe";
import TreeMenu from "./Tree View Menu/TreeView";
import Menus from "./Tree View Menu/data";
export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeaturFlagsContext);

  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
      enabled: "Disable Light And Dark Mode",
      disable: "Enable Light and Dark Mode",
    },
    {
      key: "showAccordion",
      component: <Accordion />,
      enabled: "Disable Accordion",
      disable: "Enable Accordion",
    },
    {
      key: "showImageSlider",
      component: (
        <SliderImage
          url={"https://picsum.photos/v2/list?"}
          page={"1"}
          limit={"10"}
        />
      ),
      enabled: "Disable Image Slider",
      disable: "Enable Image Slider",
    },
    {
      key: "showTicTacToeGame",
      component: <TicTacToe />,
      enabled: "Disable Tic Tac Toe",
      disable: "Enable Tic Tac Toe",
    },
    {
      key: "showTreeView",
      component: <TreeMenu menus={Menus} />,
      enabled: "Disable Tree View",
      disable: "Enable Tree View",
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
      enabled: "Disable Random Color",
      disable: "Enable Random Color",
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Feature Flags</h1>
      {loading ? (
        <p>Loading the data...Please wait</p>
      ) : (
        componentToRender.map((componentItem) =>
          checkEnabledFlags(componentItem.key) ? componentItem.component : null
        )
      )}
    </div>
  );
}
