export interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}
