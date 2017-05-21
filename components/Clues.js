import React from 'react';
import { ImagePicker } from 'expo';
import { Caption, Card, Divider, Icon, ListView, Text,
  View, Image, Row, Tile, Title, TextInput,
  TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';



class CluesItem extends React.PureComponent {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onCluePress()}>
          <Row>
            <Icon name="share" />
            <View styleName="vertical">
              <Text>{this.props.rowData.clue}</Text>
            </View>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
          <Divider styleName="line" />
        </TouchableOpacity>
      </View>
    );
  }
}

export class Clues extends React.PureComponent {


  photoPicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  renderHeader = () => {
    return (
      <Row>
        <TouchableOpacity onPress={() => this.photoPicker()}>
          <Image
            styleName="medium rounded-corners"
            source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }}
          />
        </TouchableOpacity>
        <View styleName="vertical stretch space-between">
          <Subtitle>{this.props.summary.title}</Subtitle>
          <View styleName="horizontal space-between">
            <Caption>3 days ago</Caption>
            <Caption>12:16</Caption>
          </View>
        </View>
      </Row>
    )
  }

  render() {
    return (
      <View>
        <ListView
          data={this.props.clues}
          renderRow={(rowData, sectionID, rowID) =>
              <CluesItem rowData={rowData}
              onCluePress={() => this.props.onCluePress(rowID)}/>}
          renderHeader={() => this.renderHeader()}
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress(this.props.missionId)}>Add Clue</Text></View>}
          />
      </View>
    );
  }
}
