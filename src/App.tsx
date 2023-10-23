import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { defaultDark } from "./utils/constants/defaultDarkTheme";
import { sidebarItems } from "./utils/constants/sidebarItems";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import "./styles/main.scss";

export default function App() {
  const [themeName, setThemeName] = useLocalStorage("theme", "system");
  const [theme, setTheme] = useState(
    themeName === "system" && defaultDark ? "dark" : "light"
  );
  const [primaryColor, setPrimaryColor] = useLocalStorage(
    "primary-color",
    "green"
  );

  const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);

  return (
    <Layout theme={theme} primaryColor={primaryColor}>
      <Sidebar
        activeSidebarItem={activeSidebarItem}
        setActiveSidebarItem={setActiveSidebarItem}
      />
      <Content
        activeSidebarItem={activeSidebarItem}
        themeName={themeName}
        setTheme={setTheme}
        setThemeName={setThemeName}
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />
    </Layout>
  );
}
