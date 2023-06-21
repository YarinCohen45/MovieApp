import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput, Keyboard} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const SearchBar = props => {
    const [collapsed, setCollapsed] = React.useState(true);
    const searchBarRef = React.useRef(null);

    return (
        <View style={{
            height: collapsed ? undefined : '100%',
            width: collapsed ? '80%' : '100%',
            position: collapsed ? undefined : 'absolute',
            bottom: collapsed ? undefined : 0,
            backgroundColor: collapsed ? undefined : '#24293E',
            zIndex: collapsed ? undefined : 1,
            alignItems: collapsed ? 'flex-end' : 'center',
        }}>
            <TouchableOpacity disabled={!collapsed} style={{width: collapsed ? 'auto' : '80%'}}
                              onPress={() => {
                                  setCollapsed(!collapsed)
                                  searchBarRef.current.clear();
                                  searchBarRef.current.focus();
                              }}>
                <View style={{
                    borderRadius: 100,
                    borderWidth: 3,
                    borderColor: '#8EBBFF',
                    padding: 5,
                    width: collapsed ? undefined : '100%',
                    alignSelf: collapsed ? 'flex-end' : 'center',
                    flexDirection: 'row',
                }}>
                    <FontAwesome name="search" size={24} color="#8EBBFF"/>
                    <TextInput ref={searchBarRef}
                               placeholderTextColor={'#F4F5FC'}
                               style={{
                                   width: '100%',
                                   marginLeft: 5,
                                   display: collapsed ? 'none' : 'flex',
                                   color: '#F4F5FC',
                                   fontWeight: 'bold',
                                   fontSize: 16
                               }}
                               onChangeText={() => {
                                   setCollapsed(true);
                                   Keyboard.dismiss();
                               }}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchBar;
