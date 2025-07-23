import { StyleSheet } from 'react-native';
import { useColors } from '../../../constants/color';
import { useSizes } from '../../../constants/size';
import { getGlobalStyles } from '../../../constants/globalStyles';
import { screen } from '../../../utils/constant';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
 container: {
      backgroundColor: colors.BACKGROUND,
      flex: 1,
      padding: sizes.DASHBOARD_PADDING,
    },
    refreshContainer: {
      backgroundColor: colors.CARD_BACKGROUND,
      paddingHorizontal: sizes.DASHBOARD_PADDING,
      paddingVertical: sizes.DASHBOARD_PADDING * 0.5,
      borderBottomWidth: 1,
      borderBottomColor: colors.BORDER,
    },
    refreshButton: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: '#2196F3',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      elevation: 2,
      shadowColor: colors.DARK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    refreshIconContainer: {
      marginRight: 8,
    },
    refreshIcon: {
      fontSize: 14,
      color: colors.WHITE,
    },
    refreshText: {
      fontSize: sizes.REFRESH_FONTSIZE,
      color: colors.WHITE,
      fontWeight: '500',
    },
    idSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.CARD_BACKGROUND,
      padding: sizes.CARD_PADDING,
      borderRadius: sizes.DASHBOARD_BORDER_RADIUS,
      marginBottom: sizes.DASHBOARD_MARGIN,
      elevation: 2,
      shadowColor: colors.DARK,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    idText: {
      fontSize: sizes.ID_FONTSIZE,
      fontWeight: '600',
      color: colors.TEXT,
      flex: 1,
    },
    moreButton: {
      width: sizes.MORE_BUTTON_SIZE,
      height: sizes.MORE_BUTTON_SIZE,
      borderRadius: sizes.MORE_BUTTON_SIZE / 2,
      backgroundColor: colors.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    },
    moreButtonText: {
      color: colors.WHITE,
      fontSize: 16,
      fontWeight: 'bold',
    },
    infoContainer: {
      marginBottom: sizes.DASHBOARD_MARGIN * 1.5,
    },
    infoCard: {
      backgroundColor: colors.CARD_BACKGROUND,
      padding: sizes.CARD_PADDING,
      borderRadius: sizes.DASHBOARD_BORDER_RADIUS,
      marginBottom: sizes.CARD_MARGIN,
      elevation: 2,
      shadowColor: colors.DARK,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      minHeight: sizes.INFO_ROW_HEIGHT,
    },
    infoLabel: {
      fontSize: sizes.LABEL_FONTSIZE,
      fontWeight: '600',
      color: colors.TEXT,
      flex: 1,
    },
    infoValue: {
      fontSize: sizes.VALUE_FONTSIZE,
      color: colors.TEXT_SECONDARY,
      flex: 2,
      textAlign: 'right',
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex: 2,
    },
    statusDot: {
      width: sizes.STATUS_DOT_SIZE,
      height: sizes.STATUS_DOT_SIZE,
      borderRadius: sizes.STATUS_DOT_SIZE / 2,
      marginRight: 8,
    },
    statusOff: {
      backgroundColor: colors.STATUS_OFF,
    },
    statusOn: {
      backgroundColor: colors.STATUS_ON,
    },
    monitorsSection: {
      backgroundColor: colors.CARD_BACKGROUND,
      height:sizes.HEIGHT*0.3,
      borderRadius: sizes.DASHBOARD_BORDER_RADIUS,
      padding: sizes.CARD_PADDING,
      elevation: 2,
      shadowColor: colors.DARK,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    monitorsTitle: {
      fontSize: sizes.TITLE_FONTSIZE,
      fontWeight: '600',
      color: colors.TEXT,
      marginBottom: sizes.DASHBOARD_MARGIN,
    },
    monitorsContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: sizes.MONITORS_MIN_HEIGHT,
    },
    monitorsPlaceholder: {
      fontSize: sizes.FONTSIZE,
      color: colors.TEXT_SECONDARY,
      fontStyle: 'italic',
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
