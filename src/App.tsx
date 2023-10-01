import React, { useState } from "react";
import "./styles/main.scss";

const sidebarItems = [
  {
    id: 1,
    label: "Recipes",
    icon: "menu_book",
  },
  {
    id: 2,
    label: "Admin",
    icon: "admin_panel_settings",
  },
  {
    id: 3,
    label: "Settings",
    icon: "settings_applications",
  },
  {
    id: 4,
    label: "Logout",
    icon: "logout",
  },
];

export default function App() {
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarItemHover, setSidebarItemHover] = useState(undefined);

  const sidebarWidth = {
    width: `${sidebarExpanded ? "300px" : "60px"}`,
  };

  return (
    <div className="container">
      <div className="sidebar" style={sidebarWidth}>
        <span className={`${sidebarExpanded ? "logo expanded" : "logo"} `}>
          {/* {sidebarExpanded ? "CookBook" : "CB"} */}
        </span>
        <div className="card nav-container">
          <div className="nav-items">
            {sidebarItems.map((item, index) => {
              return (
                <div key={index} className="sidebar-item-container">
                  <button
                    className={`${
                      index === activeSidebarItem ? "item active" : "item"
                    } ${
                      sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
                    }`}
                    onClick={() => setActiveSidebarItem(index)}
                    onMouseEnter={() => setSidebarItemHover(item.id)}
                    onMouseLeave={() => setSidebarItemHover(undefined)}
                    tabIndex={0}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <span
                      className={
                        sidebarExpanded ? "label sidebar-expanded" : "label"
                      }
                      style={{ transitionDelay: `calc(${index} * 24ms)` }}
                    >
                      {item.label}
                    </span>
                  </button>
                  {!sidebarExpanded &&
                    sidebarItemHover === item.id &&
                    activeSidebarItem !== index && (
                      <span className="tooltip">{item.label}</span>
                    )}
                  {!sidebarExpanded && activeSidebarItem === index && (
                    <span className="tooltip active">{item.label}</span>
                  )}
                </div>
              );
            })}
          </div>
          <button
            className="item"
            id="expand-item"
            onClick={() => setSidebarExpanded((prevState) => !prevState)}
            tabIndex={0}
          >
            <span className="material-symbols-outlined">
              {sidebarExpanded
                ? "keyboard_double_arrow_left"
                : "keyboard_double_arrow_right"}
            </span>
          </button>
        </div>
      </div>
      <main className="main card">
        <div
          className={`${
            sidebarExpanded
              ? "content-container expanded"
              : "content-container collapsed"
          }`}
        >
          <h1>Main Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            rutrum commodo odio, pellentesque ornare nisl euismod at. Sed rutrum
            neque diam, eu tincidunt nibh suscipit dignissim. Cras ultrices
            lobortis nulla, porta pharetra urna pulvinar finibus. Donec et
            maximus odio. Curabitur placerat posuere varius. Nam ac odio velit.
            Sed feugiat purus ac faucibus semper. Nulla aliquet aliquet nulla,
            et bibendum augue accumsan et. Sed et consectetur ligula, ut
            convallis metus. Aliquam posuere, lectus id auctor ullamcorper,
            risus enim dignissim lorem, sit amet suscipit dui orci a quam.
            Nullam ultricies, justo at tincidunt elementum, ligula nunc mollis
            elit, bibendum feugiat risus quam id nisl. Cras at ligula neque.
            Phasellus eu sagittis mi. Pellentesque fringilla lacinia libero, ac
            semper leo consequat pellentesque.
          </p>
        </div>
      </main>
    </div>
  );
}
