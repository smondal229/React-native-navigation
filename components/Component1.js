import React from 'react';
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';

export default function Component1(){
  return(
    <View>
      <FlatList
        data = {[
          {key: 'name1'},
          {key: 'name2'},
          {key: 'name3'}
        ]}
        renderItem={({item})=>(<Text>{item.key}</Text>)}
        keyExtractor={item => item.key }
      />
      <SectionList
        sections = {[
          { title: "First name", 
            data:['name1',
              'name2',
              'name3']
          },
          { title: "Last name", 
            data:[ 'name1',
            'name2',
            'name3']
          }
        ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#ddd'
  }
})