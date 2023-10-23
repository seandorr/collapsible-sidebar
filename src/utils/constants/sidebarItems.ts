export interface ISidebarItem {
  id: number;
  label: string;
  icon: string;
}

export const sidebarItems: ISidebarItem[] = [
  {
    id: 1,
    label: "Tags",
    icon: "sell",
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
