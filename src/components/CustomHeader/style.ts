


import { StyleSheet } from 'react-native';
import { useColors } from '../../constants/color';
import { useSizes } from '../../constants/size';
import { getGlobalStyles } from '../../constants/globalStyles';
import {screen} from '../../utils/constant';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
    container: {
        width: screen.width,
        height: screen.height,
        backgroundColor: colors.BACKGROUND,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 999999,
      },
      header: {
      width: screen.width,
      height: screen.height*0.1,
      backgroundColor: colors.BACKGROUND,
      // backgroundColor: 'green',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      zIndex: 999999,
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
