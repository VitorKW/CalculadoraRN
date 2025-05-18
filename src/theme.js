import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  calculator: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#444', 
  },
  buttonLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '444',
  },
  display: {
    width: '100%',
    height: 60,
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
    textAlign: 'right',
    fontSize: 32,
    paddingHorizontal: 12,
    lineHeight: 60,
  },
  displayText: {
    fontSize: 60
  }
});

export default theme;
