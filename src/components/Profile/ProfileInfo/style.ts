import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  profileInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageWrapper: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#0150EC',
    borderRadius: 110,
    padding: 4,
  },
  profileImage: {
    width: 110,
    height: 110,
  },
});