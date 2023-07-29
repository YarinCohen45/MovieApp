import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput, Keyboard, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {fetchSearch} from "../Api";
import MovieRow from "./MovieRow";

const SearchBar = props => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [results, setResults] = React.useState([]);
    const searchBarRef = React.useRef(null);
    const styles = StyleSheet.create({
        container: {
            height: collapsed ? undefined : '100%',
            width: collapsed ? '80%' : '100%',
            backgroundColor: collapsed ? undefined : '#24293E',
            alignItems: collapsed ? 'flex-end' : 'center'
        },
        button: {
            width: collapsed ? 'auto' : '90%'
        },
        searchBar: {
            borderRadius: 100,
            borderWidth: 3,
            borderColor: '#8EBBFF',
            padding: 5,
            width: collapsed ? 40 : '100%',
            height: 40,
            alignSelf: collapsed ? 'flex-end' : 'center',
            flexDirection: 'row',
        },
        searchInput: {
            width: '100%',
            marginLeft: 5,
            display: collapsed ? 'none' : 'flex',
            color: '#F4F5FC',
            fontWeight: 'bold',
            fontSize: 16
        },
        resultsContainer: {
            width: '100%',
            paddingHorizontal: 20
        }
    });

    const collapse = () => {
        props.onCollapse && props.onCollapse();
        setCollapsed(true);
        Keyboard.dismiss();
        setResults([]);
    }

    const handleSearch = text => {
        fetchSearch(text).then(setResults)
    }

    const SearchResults = () => {
        return <View style={{flex: 1, width: '100%', justifyContent: 'space-between', marginBottom: 20}}>
            <View style={{flex: 1}}>
                {results.map(res => {
                    return <MovieRow name={res.title} plot={res.overview} poster={res.poster_path}/>
                })}
            </View>
            <TouchableOpacity onPress={collapse}>
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', alignSelf: 'center'}}>Close</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity disabled={!collapsed}
                              style={styles.button}
                              onPress={() => {
                                  setCollapsed(false)
                                  searchBarRef.current.clear();
                                  searchBarRef.current.focus();
                                  props.onOpen && props.onOpen();
                              }}>
                <View style={styles.searchBar}>
                    <FontAwesome name="search" size={24} color="#8EBBFF"/>
                    <TextInput ref={searchBarRef}
                               placeholderTextColor={'#F4F5FC'}
                               style={styles.searchInput}
                               onChangeText={handleSearch}/>
                </View>
            </TouchableOpacity>
            {!collapsed && <SearchResults/>}
        </View>
    );
}

export default SearchBar;
