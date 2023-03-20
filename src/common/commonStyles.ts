import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  formControl: {
    width: "100%",
    marginBottom: 15
  },
  submitButtonIcon: {
    height: 25,
    width: 22,
    marginRight: 2,
    marginLeft: 5
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export const commonStyles = StyleSheet.create({
  allCaps: {
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  backgroundlessInput: {    
    backgroundColor: '#00000000',
    borderTopColor: '#00000000',
    borderRightColor: '#00000000',
    borderLeftColor: '#00000000',
  }
})