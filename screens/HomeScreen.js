import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import ProjectCard from "../components/ProjectCard";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Covalence Projects"
  };

  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  async componentDidMount() {
      let projects = await this.fetchProjects();
      this.setState({ projects: projects })
  }

  async fetchProjects() {
      try {
    let result = await fetch({
      url: "https://gravity.covalence.io/api/graduation/projects" });
    let projects = await result.json();
    return projects;
      } catch(e) {
          console.log(e);   //add code here to let user know about error
          return;
      }
}

  navigateFunction(project) {
    this.props.navigation.navigate("ProjectTab", { project });
  } 

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>My Test Projects!</Text>
        {this.state.projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              project={item}
              Navigate={() => {
                this.navigateFunction(item);
              }}
            />
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue"
  }
});
