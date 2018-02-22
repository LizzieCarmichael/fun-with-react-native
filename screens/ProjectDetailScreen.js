import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

export default class ProjectDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.project = this.props.screenProps.project;
}

  render() {
    return (
      <ScrollView>
        <Text>{ this.project.description }</Text> 
      </ScrollView>
    );
  }
}
