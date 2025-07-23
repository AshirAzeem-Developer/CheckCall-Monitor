import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

const getSizes = (width: number, height: number) => ({
  WIDTH: width,
  HEIGHT: height,
  PADDING: width * 0.03,
  PADDED_WIDTH: width - width * 0.06,
  FONTSIZE: 14,
  FONTSIZE_HIGH: 18,
  FONTSIZE_SMALL: 10,
  ICON: width * 0.06,
  HEADER_FOOTER_SIZE: height * 0.1,
  BORDER_RADIUS: 5,
  BORDER_RADIUS_HIGH: 15,
  
  // Dashboard specific sizes
  DASHBOARD_PADDING: width * 0.06,
  DASHBOARD_MARGIN: width * 0.04,
  DASHBOARD_BORDER_RADIUS: 12,
  CARD_PADDING: width * 0.05,
  CARD_MARGIN: width * 0.04,
  
  // Button sizes
  MORE_BUTTON_SIZE: 32,
  STATUS_DOT_SIZE: 8,
  
  // Font sizes for dashboard
  ID_FONTSIZE: 18,
  LABEL_FONTSIZE: 16,
  VALUE_FONTSIZE: 16,
  TITLE_FONTSIZE: 18,
  REFRESH_FONTSIZE: 14,
  
  // Minimum touch areas
  MIN_TOUCH_SIZE: 44,
  INFO_ROW_HEIGHT: 40,
  
  // Monitors section
  MONITORS_MIN_HEIGHT: 100,
});

export type Sizes = ReturnType<typeof getSizes>;

export const useSizes = () => {
  const { width, height } = useWindowDimensions();
  return useMemo(() => getSizes(width, height), [width, height]);
};