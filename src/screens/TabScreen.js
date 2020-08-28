import React, { Component } from 'react';
import { Container, Header, Content, Left,Body, Right,Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';

export default class TabsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#009387'}} hasTabs>
          <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab heading="General" tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Business" tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab2 />
          </Tab>
          <Tab heading="Technology" tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}