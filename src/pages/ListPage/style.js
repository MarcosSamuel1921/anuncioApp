import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 20
 },
 List:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"center",
  marginTop:5
 },
 deleteItem:{
   justifyContent:"center",
   paddingLeft:15,
 },
 DescriptionList:{
  width:"75%",
  alignContent:"flex-start",
  backgroundColor:"#f5f5f5cf",
  padding:12,
  paddingHorizontal: 20,
  borderRadius:50,
  marginBottom: 5,
  marginRight:15,
  color:"#282b2db5",
 },
 buttonNewItem:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor:"#FF0000",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  fontSize:25,
  fontWeight:"bold",
 },
});
 
export default styles