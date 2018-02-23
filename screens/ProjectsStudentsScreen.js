import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

export default class ProjectStudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { team: [] };
    this.project = this.props.screenProps.project;
  }
  async componentDidMount() {
    let team = await this.fetchTeams();
    this.setState({ team: team });
  }
  async fetchTeams() {
    try {
      let result = await fetch({
        url: `https://gravity.covalence.io/api/graduation/teams/${
          this.project.id
        }`
      });
      let team = await result.json();
      return team[0];
    } catch (e) {
      console.log(e);
      return;
    }
  }

  render() {
    let student = this.state.team.map((item, index) => {
      return (
        <View key={index}>
          <Text>
            {item.lastname}, {item.firstname}
          </Text>
        </View>
      );
    });
    return <ScrollView>{student}</ScrollView>
  }
}
