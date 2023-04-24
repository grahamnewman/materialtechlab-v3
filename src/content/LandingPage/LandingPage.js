import React from 'react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Friendship, Idea, Sprout } from '@carbon/react/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';


const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
    <BreadcrumbItem>
      <a href="/">Getting started</a>
    </BreadcrumbItem>
  </Breadcrumb>
  <h1 className="landing-page__heading">Innovate, design and engineer bioplastics with Materialtech Lab
</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
    <TabList className="tabs-group" aria-label="Tab navigation">
      <Tab>About</Tab>
      <Tab>Research</Tab>
      <Tab>Purpose</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">What is Materialtech Lab?</h2>
            <p className="landing-page__p">
            Materialtech Lab is a research facility that investigates the properties and potential applications of recycled content and biodegradable polymers for plastics packaging manufacturing. Our mission is to reduce the usage of virgin petroleum-based polymers and develop green composite alternatives for the FMCG industries. Materialtech Lab is curated by Graham Newman MRes RCA, FRSA.
            </p>
            <Button href="#/repos">Learn more</Button>

          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/tab-illo.png`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
            Rapidly build beautiful and accessible experiences. The Carbon kit
            contains all resources you need to get started.
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
            Carbon provides styles and components in Vanilla, React, Angular,
            and Vue for anyone building on the web.
          </Column>
        </Grid>
      </TabPanel>
    </TabPanels>
  </Tabs>
</Column>
<Column lg={16} md={8} sm={4} className="landing-page__r3">
<InfoSection heading="The Principles" className="landing-page__r3">
  <InfoCard
    heading="Carbon is Open"
    body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
    icon={() => <Friendship size={32} />}
  />
  <InfoCard
    heading="Carbon is Modular"
    body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
    icon={() => <Idea size={32} />}
  />
  <InfoCard
    heading="Carbon is Consistent"
    body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
    icon={() => <Sprout size={32} />}
  />
</InfoSection>
</Column>
    </Grid>
  );
};

export default LandingPage;