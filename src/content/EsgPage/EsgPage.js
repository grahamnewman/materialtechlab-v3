import React from 'react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Friendship, Idea, Sprout } from '@carbon/react/icons';
import { Theme } from '@carbon/react';

import {
  Breadcrumb,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';

const EsgPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Innovation driving a sustainable and responsible future</h1>
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
      <Tab>Environment</Tab>
      <Tab>Social</Tab>
      <Tab>Governance</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Bioplastic: ESG's environmental hero for sustainable packaging solutions</h2>
            <p className="landing-page__p">
            The environmental aspect of ESG (Environmental, Social, and Governance) plays a crucial role in promoting bioplastics as a sustainable alternative to traditional plastics. Bioplastics, derived from renewable resources like plant starch or agricultural waste, reduce reliance on fossil fuels and emit fewer greenhouse gases during production. They also have the potential for biodegradability and compostability, minimizing environmental pollution. ESG frameworks encourage companies to adopt bioplastics, fostering responsible resource management and waste reduction. By prioritizing the environment within their ESG strategies, businesses can contribute to a healthier planet by embracing bioplastics as a key component of their sustainable packaging solutions.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain4.png`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Impact for sustainable community development
            </h2>
            <p className="landing-page__p">
            The social aspect of ESG in the context of bioplastics focuses on the positive impact on communities and stakeholders. Bioplastics offer social benefits by supporting local farmers and promoting rural development through the cultivation of renewable resources. Additionally, the adoption of bioplastics encourages job creation in the green economy, fostering employment opportunities in sustainable industries. ESG-driven companies prioritize the social well-being of their communities by incorporating bioplastics into their operations, contributing to inclusive growth, and enhancing social cohesion through environmentally friendly practices.
          </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain2.png`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Driving sustainable accountability and trust</h2>
            <p className="landing-page__p">
            The governance aspect of ESG in relation to bioplastics revolves around responsible and transparent management practices. Adopting bioplastics requires effective governance structures to ensure compliance with environmental regulations, ethical sourcing of raw materials, and proper waste management throughout the value chain. By integrating robust governance frameworks, companies can mitigate risks associated with the production and use of bioplastics, ensure accountability, and uphold ethical standards. ESG-oriented governance practices enable businesses to demonstrate their commitment to sustainability and ethical practices while fostering trust among stakeholders in the bioplastics industry.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain6.png`}
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

export default EsgPage;