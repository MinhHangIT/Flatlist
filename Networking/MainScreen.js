import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View
        style={{ flexDirection: 'row', margin: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 15 }}
      >
        <View>
          <Image
            source={{ uri: this.props.item.thumbnailUrl }}
            style={{ width: 80, height: 80, padding: 10, borderRadius: 10 }}
          />
        </View>
        <View>
          <Text style={{ color: 'black', padding: 6 }}>albumId: {this.props.item.albumId}</Text>
          <Text style={{ color: 'black', padding: 6 }}>{this.props.item.title}</Text>
        </View>/
      </View>
    );
  }
}

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    const { dataSend } = this.props.navigation.state.params;
    this.state = {
      itemFromServer: [],
      refreshing: false,
      data: dataSend.result,
      status: dataSend.status
    };
  }
  componentDidMount() {
    this.getDataFromServer();
  }
  getDataFromServer = () => {
    this.setState({ refreshing: true });
    if (this.state.status === true) {
      this.setState({ itemFromServer: this.state.data });
      this.setState({ refreshing: false });
    } else if (this.state.status === false) {
      this.setState({ itemFromServer: [] });
      this.setState({ refreshing: false });
    }
  };
  onRefresh = () => {
    this.getDataFromServer();
  };
  render() {
    return (
      <View style={[styles.container]}>
        <FlatList
          data={this.state.itemFromServer}
          renderItem={({ item, index }) => {
            return <ListItem item={item} index={index} />;
          }}
          keyExtractor={(item, index) => item.title}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
