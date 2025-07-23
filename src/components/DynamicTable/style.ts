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
  
  placeholderText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
      header: {
      width: screen.width,
      height: screen.height*0.1,
      backgroundColor: colors.BACKGROUND,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;