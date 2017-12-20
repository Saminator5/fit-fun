import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 15,
    color: '#001413'
  },
  picker: {
    backgroundColor: 'white',
    borderColor: '#101112',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
  },
  pickerItem: {
    color: '#171A1A',
    height: 100,
  },
  labels: {
    fontSize: 15,
    color: '#545D5E',
  },
  segment: {
    backgroundColor: '#A3CDD3',
    marginTop: 15
  },

  element: {
    marginTop: 15,
  },

  phTextColor: {
    color:  '#234549'
  },

  fontColor: {
    color:  '#234549',
    fontSize: 20
  },

  icons: {
    maxWidth: 30,
    fontSize: 23,
    color:  '#234549'
  },

  phFontSize: {
    fontSize: 20,
    color: '#171A1A'

  },

  pGroup: {
    marginLeft: 15,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#545D5E'
  },
  profileButton: {
    width: 150
  },
  groupFont: {
    fontSize: 25
  }
});
