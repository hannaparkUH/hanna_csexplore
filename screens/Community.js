import React, { Component } from 'react';
import { Image } from 'react-native';
import { Tabs, Tab, Container, Header, Content, ScrollableTab,  Title  } from 'native-base';
import Tab1 from './Projects'
import Tab2 from './Videos'
import Tab3 from './Events'

class Community extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
        <Title style={{paddingTop: 15 }}>CS Community in Hawaii</Title>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Projects">
            <Tab1 />
          </Tab>
          <Tab heading="Videos">
            <Tab2 />
          </Tab>
          <Tab heading="Events">
           <Tab3/>
          </Tab>
        </Tabs>
        <Content>
          
        </Content>
      </Container>
    );
  }
}

export default Community