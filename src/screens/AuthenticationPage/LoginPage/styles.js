import { StyleSheet } from 'react-native';
import { COLORS } from 'styles/colors';
import { AmazonEmber, TYPOGRAPHY } from 'styles/typography';

export const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: 5,
  },
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: AmazonEmber[900],
    fontSize: 64,
    color: COLORS.PRIMARY
  },  
  headerDescription: {
    ...TYPOGRAPHY.BODY_SMALL,
    color: COLORS.PINK,
    marginBottom: 30
  },
  signupButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: COLORS.SECONDARY,
    marginHorizontal: 5,
  },
  loginButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
  },
  signupButtonTitle: {
    ...TYPOGRAPHY.BUTTON_SMALL,
    fontSize: 20,
    color: COLORS.PRIMARY
  },
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    ...TYPOGRAPHY.H1,
    marginTop: 20,
  },
  inputBox: {
    height: 45,
    borderWidth: 1,
    width: 300,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontSize: 18,
    fontFamily: AmazonEmber[400],
  },
  errorText: {
    ...TYPOGRAPHY.BODY_MEDIUM,
    color: COLORS.DANGER,
  },
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    height: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});
