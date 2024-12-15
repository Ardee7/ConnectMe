import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7fdfb'
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3c7a57', // Deep green
    marginBottom: 8
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6a9d85',
    marginBottom: 16
  },
  list: {
    paddingBottom: 16
  },
  card: {
    backgroundColor: '#ebf7f1',
    marginVertical: 20,
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 12,
    borderColor: '#ebf7f1',
    borderWidth: 1.5,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  iconWrapper: {
    height: 30,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  icon: {
    color: '#3c7a57'
  },
  tagType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3c7a57'
  },
  tagName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  subHeading: {
    fontSize: 14,
    color: '#6a9d85',
    marginBottom: 8
  },
  linkButton: {
    paddingVertical: 4
  },
  link: {
    fontSize: 14,
    color: '#2a8572',
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  pingContainer: {
    marginTop: 12,
    backgroundColor: '#d9f0e4',
    padding: 8,
    borderRadius: 8
  },
  pingText: {
    fontSize: 12,
    color: '#3c7a57'
  }
});
