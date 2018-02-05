import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

export default class Map extends React.Component {

    static navigationOptions = {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../Components/Images/pin.png')}
          style={{width: 22, height: 22, tintColor: 'white'}}>
        </Image>
      )
    }

    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
      return (
        <View style = { styles.container }>
          <MapView 
            style = { styles.container }
            region = { region }
            provider = { MapView.PROVIDER_GOOGLE } >
              {gardens.map((garden, index)=>
                <MapView.Marker
                  key={"marker_"+index}
                  title={garden.name}
                  showsUserLocation={true}
                  coordinate={
                    {
                      latitude: garden.latitude,
                      longitude: garden.longitude
                    }
                  }/>
              )}
            </MapView>
          </View>
        );
      }
    }

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

const region = {
    latitude: 35.910072,
    longitude: -79.045504,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
}

const gardens = [{
  name: "Davis Library Satellite Beds",
  description: "The two raised beds in front of Davis Library are quintessential spots to swing by when heading to and from the Davis Library. The curved stone bench in front of the bed makes for a nice place to sit and enjoy some fresh veggies, or to talk with friends. The beds are visible from the first floor of the Library, and can provide a nice break for your eyes from the textbook. These two garden beds are full of Mediterranean herbs and herbal tea herbs, so perfect to seep in some hot or cold water to de-stress while studying.",
  latitude: 35.910655,
  longitude: -79.048419,
},{
  name: "Lenoir Dining Hall Satellite Beds",
  description: "The Satellite Beds in front of Lenoir Dining Hall are the most highly trafficked garden beds on campus, and for that reason they are often the most flamboyant and overflowing with life. They thrive with the attention students give them, whether by helping to water, picking up surrounding trash or stopping by for a quick snack. We keep this bed full of veggies and herbs that can easily be picked and added to any meal in the Dining Hall. ",
  latitude: 35.910315,
  longitude: -79.048543,
},{
  name: "Stacey Residence Hall Satellite Bed",
  description: "The Satellite Bed in front of Stacy Residence Hall houses one of the best looking fig trees on campus, and a pomegranate tree too! It is a fun bed to walk through and admire, especially in the afternoon when there is ample shade. This garden bed is at a perfect height for students of OCLQ to enjoy without having to bend over too far. There is also a subtle pathway in the back, if you want to climb in and snack on some blackberries. ",
  latitude: 35.912799,
  longitude: -79.045825,
},{
  name: "Graham Residence Hall Satellite Bed",
  description: "The Satellite Bed in front of Graham Residence Hall is one of our largest. It is a nice semicircle with a wide variety of trees, bushes, and plants. It overlooks the intersection of Raleigh Street and Country Club Road/Cameron Avenue. The Graham bed is best enjoyed in the early morning or late afternoon and evening, as it can get hot. Most of the herbs and veggies you will recognize are in the front, but climb in and explore the berry bushes and medicinal herbs in the back as well. ",
  latitude: 35.913022,
  longitude: -79.046938,
},{
  name: "Edible Campus Garden Main Bed",
  description: "The central Edible Campus Garden opened in April 2017, and has been overflowing with life ever since. This 13,000 sq. foot garden between Davis Library and the ATM serves as a hub of activity for food justice organizations across campus, an education garden with themed beds demonstrating various agricultural concepts, and a community space to be enjoyed by all. Since the food grown in this garden is allocated to student initiatives across campus, this is the only garden of ours that is not to be foraged, however opportunities to enjoy our produce will be bountiful at workdays and other campus events. ",
  latitude: 35.911423,
  longitude: -79.047511,
},{
  name: "Fetzer Gym Satellite Bed",
  description: "The Satellite Bed found between the SRC and Fetzer Gym is a favorite among all who help take care of it. The Fetzer Bed will grab your attention when you walk past, as it often overflows with salad or stir-fry greens in its circular cauldron. This bed is at the perfect location to remind students racing by to slow down and take a glimpse at what is around them; it reminds students to enjoy the beauty in the little things. ",
  latitude: 35.909632,
  longitude: -79.046572,
},{
  name: "Rams Head Plaza Satellite Beds",
  description: "The Satellite Bed in front of Ram's Head Dining Hall is in a great location for students on South campus to pass by on their way to the Dining Hall. This is easily our hottest bed (as it is surrounded by cement, and technically on a rooftop!), so we have gotten creative with what is grown in here. You will often find unexpected edible plants and cacti alongside the more recognizable Mediterranean herbs. It is always worth a look!",
  latitude: 35.905783,
  longitude: -79.045853,
},{
  name: "SASB Plaza Satellite Bed",
  description: "The long Satellite Bed in front of Student and Academic Services Building (SASB) is often overlooked as students rush past it on their way to class, but it is well worth a stop. This bed contains many hidden gems for those willing to spend time looking for them, in the form of flowers, berries, pollinator-friendly plants and more. When it is the season for strawberries, your best chance of snagging one early will be here!  ",
  latitude: 35.904203,
  longitude: -79.044847,
},{
  name: "Hardin Residence Hall Satellite Bed",
  description: "The Satellite Bed in front of Hardin is the southmost Edible Campus bed, tenderly cared for by residents of this Residence Hall. While it can be off the beaten path for students on North Campus, its location gives us the freedom to experiment with some unique crops, like okra! The Hardin bed is quite the sight when its vegetables, fruits, and flowers are in full bloom!  ",
  latitude: 35.903830,
  longitude: -79.046304,
}]
