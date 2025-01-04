import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  header: { marginLeft: 27, marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  messageIcon: {
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    alignItems: 'center',

  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
  },
  messageNumber: {
    color: '#ffffff',


  },
})

export default globalStyle;