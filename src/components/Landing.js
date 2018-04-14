import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ProgressArc from './ProgressArc';


const LandingPage = () => (
  <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <ProgressArc />
          </Segment>
        </Visibility>
</Responsive>
);
export default LandingPage;


