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
            Materialtech Lab is a research facility that investigates the properties and potential applications of recycled content and biodegradable polymers for plastics packaging manufacturing. Our mission is to reduce the use of virgin petroleum-based polymers by developing green composite bioplastics for the FMCG industries. Materialtech Lab is curated by Graham Newman MRes RCA, FRSA.
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
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Innovation design</h2>
            <p className="landing-page__p">
            Research and development in materials, production, and end customer sentiment and inclination for bioplastics will help us design better packaging solutions for the planet. This is the fourth industrial revolution in practice, and part of the recyclable and biodegradable circular economy of manufacturing and packaging consumption. Moreover, it reduces disposable and single-use plastic usage, reduces CO2 from plastic manufacturing, and contributes to enterprise-level economies of scale.
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
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Responding to customer demand</h2>
            <p className="landing-page__p">
            Society has become extremely efficient at producing and consuming plastic. Now it needs to become extremely efficient in reusing it with a second and third life. Plastic production currently contributes 7% of the total CO2 global pie. Research claims this will be 15% within 20 years with the growing population. This purpose starts with clarifying the two types of bioplastics: one is meant to be biodegraded, the other is meant to be recycled. We are developing both. Durable recyclable bioplastics that can get into the waste/recycling stream with other recycled content, and with virgin petroleum-based polymers. Even if these products don’t degrade for two to three years, it’s much better than 400 years from the petroleum products.
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
    </TabPanels>
  </Tabs>
</Column>
<Column lg={16} md={8} sm={4} className="landing-page__r3">
<InfoSection heading="The Principles" className="landing-page__r3">
  <InfoCard
    heading="Materialtech Lab is responsive"
    body="Responding to the societal change in sentiment and inclination from countries, municipalities, companies and households committed to reducing disposable and single-use plastic packaging in fast moving consumer goods."
    icon={() => <Friendship size={32} />}
  />
  <InfoCard
    heading="Materialtech Lab is innovation"
    body="Taking steps to develop bioplastic sources that are more sustainable than petroleum eg, waste feedstock from plants, fibre and algae etc, to produce Polylactic acid (PLA)–the highest consumption volume of any bioplastic of the world–for plastic packaging."
    icon={() => <Idea size={32} />}
  />
  <InfoCard
    heading="Materialtech Lab is green"
    body="Biodegradable polymers and recycled content offer a sustainable alternative to traditional plastics and can reduce environmental pollution, waste and CO2 emissions. These bioplastic materials form part of the value chain in the circular recycling economy."
    icon={() => <Sprout size={32} />}
  />
</InfoSection>
</Column>
    </Grid>
  );
};

export default LandingPage;