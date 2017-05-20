import React from 'react';
import { ImagePicker } from 'expo';
import { Caption, Divider, Icon, ListView, Text,
  View, Image, Row, Tile, Title, TextInput,
  TouchableOpacity, Subtitle, Screen} from '@shoutem/ui';



class CluesListItem extends React.PureComponent {

  render() {
    return (
      <View>
        <Row>
          <Icon name="share" />
          <View styleName="vertical">
            <Text>{this.props.rowData.clue}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }
}

export class CluesList extends React.PureComponent {


  photoPicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

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
              <CluesListItem rowData={rowData}/>}
          renderHeader={() => this.renderHeader()}
          renderFooter={() => <View><Text onPress={() => this.props.onAddPress(this.props.missionId)}>Add Clue</Text></View>}
          />
      </View>
    );
  }
}
