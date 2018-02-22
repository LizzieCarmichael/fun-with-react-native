import React, { Component } from "react";
import { Card, Button } from "react-native-elements";


export default class ProjectCard extends Component {
  render() {
    return (
      <Card
        featuredTitle={this.props.project.name}
        image={require("../images/tacotaco.png")}
      >
        <Button backgroundColor="steelblue" title="View Project" 
        onPress={ this.props.Navigate } />
      </Card>
    );
  }
}
