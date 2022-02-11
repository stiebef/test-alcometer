import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  radioContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#00bfff',
    flexDirection: 'row'
  },
  title: {
    color: '#00bfff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#9932cc',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  alcinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  buttonCalc: {
    margin: 30,
    padding: 10,
    backgroundColor: "#00bfff",
    width: 150,
    borderRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft:'auto',
    marginRight:'auto', 
    
  },
  buttonTextCalc: {
    color:"#f8f8ff",
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  pickerStyles:{
    margin: 15,
    padding: 5
  },
  green: {
    color:'green',
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
},
yellow: {
    color:'orange',
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
},
red: {
    color:'red',
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
},
radioButtonContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'flex-start',
  width:'100%',
  
  marginBottom: 10,
  paddingLeft:30,
  paddingRight: 30,
 
  
},
label:{
  flex: 1,
  fontSize: 15,
  textAlign: 'left',
  margin: 10,
},
circle:{
  height:28,
  width:28,
  borderRadius:15,
  borderWidth:2,
  borderColor:'#000000',
  alignItems:'center',
  justifyContent:'center'
},
checkedCircle:{
  width:18,
  height:18,
  borderRadius:7,
  backgroundColor:'#000000',
}

});