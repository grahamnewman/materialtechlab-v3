import React from 'react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Friendship, Idea, Sprout } from '@carbon/react/icons';
import {
  Breadcrumb,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  Theme,
} from '@carbon/react';


const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
</Breadcrumb>
  <h1 className="landing-page__heading">Innovate, Design and Engineer with Materialtech Lab
  </h1>
  <img
              className="landing-page__swooshy"
              src={`${process.env.PUBLIC_URL}/assets/images/swooshy3.svg`}
              alt="Carbon illustration"
            />
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
  <Theme theme="g100">
    <TabList className="tabs-group" aria-label="Tab navigation" contained>
      <Tab>About</Tab>
      <Tab>Innovation</Tab>
      <Tab>Purpose</Tab>
    </TabList>
  </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">What is Materialtech Lab?</h2>
            <p className="landing-page__p">
            Materialtech Lab is an Innovation Design Engineering (IDE) facility that investigates the properties and potential applications of bio-based, biodegradable, and recycled plastics for manufacturing. Our mission is to reduce the use of virgin petroleum-based polymers in Fast Moving Consumer Goods (FMCG) packaging. This interdisciplinary approach to innovation merges design and science by developing polymeric materials entirely or partially produced from biomass resources that degrade in a reasonable timeframe. Materialtech Lab is curated by Graham Newman MRes RCA, FRSA.
            </p>
            <Button href="#/repos">Learn more</Button>

          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain9.png`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>   
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Collaborative and interdisciplinary interventions</h2>
            <p className="landing-page__p">
            Research and development in materials, production, and end customer sentiment for bio-based, biodegradable, and recycled plastics will help us design better packaging solutions for the planet. This is the fourth industrial revolution in practice, and part of the biodegradable and plastics recycling circular economy of manufacturing and packaging consumption. Moreover, this intervention reduces disposable and single-use plastic usage, reduces CO2 from plastic manufacturing, and contributes to a deeper social responsibility commitment from industry.
            </p>
            <Button href="#/repos">Learn more</Button>

          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/innovation_diffusion.svg`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Responding to customer and consumer demand</h2>
            <p className="landing-page__p">
            Society has become extremely efficient at producing and consuming plastic. Now it needs to become extremely efficient in reusing it with a second and third life. Plastic production currently contributes 7% of the total CO2 global pie. Research claims this will be 15% within 20 years with the growing population.<br></br><br></br>This research starts with clarifying the two types of bio-based and biodegradable plastics, and recycled plastics: one is meant to be biodegraded in a reasonable timeframe compatible with human life cycles. The other is meant to be recycled by which plastic waste is reprocessed into plastic technically very close to the conventional polymer. Both can get into the waste/recycling stream with other recycled content, and with virgin petroleum-based polymers. Even if these products don’t degrade for two to three years, it’s much better than 400 years from petroleum products.
            </p>
            <Button href="#/repos">Learn more</Button>

          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain5.png`}
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
    body="Responding to the societal change in sentiment and inclination from countries, municipalities, companies and households committed to reducing disposable and single-use plastic packaging in FMCGs."
    icon={() => <Friendship size={32} />}
  />
  <InfoCard
    heading="Materialtech Lab is innovation"
    body="Inventing and commercialising bio-based, biodegradable, and recycled plastics that are more sustainable than petroleum eg, waste feedstock from plants, fibre and algae etc, to produce Polylactic acid (PLA)–the highest consumption volume of any bioplastic of the world–for FMCG plastic packaging."
    icon={() => <Idea size={32} />}
  />
  <InfoCard
    heading="Materialtech Lab is green"
    body="Bio-based, biodegradable, and recycled plastics content offer a sustainable alternative to traditional petroleum-based material, and can reduce environmental pollution, waste and CO2 emissions. These bioplastic materials form part of the value chain in the circular recycling economy."
    icon={() => <Sprout size={32} />}
  />
</InfoSection>
</Column>
    </Grid>
  );
};

export default LandingPage;