import { Stack } from "expo-router";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { SvgUri } from 'react-native-svg';
import HelpSvg from '../assets/icons/helpCircle.js';
import SettingsSvg from '../assets/icons/settings.js';
{/* Icons from the following stackOverflow page https://stackoverflow.com/a/72052555 */}
 
export default function headerButtons() {
    return (  
      <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
        <Link href={"help"}><HelpSvg style={{width: 50, height: 50}}/></Link>
        <Link href={"settings"}><SettingsSvg style={{width: 50, height: 50}}/></Link>
      </View>
    )};
  