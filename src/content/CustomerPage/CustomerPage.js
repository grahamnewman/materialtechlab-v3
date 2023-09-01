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
  ListItem,
  UnorderedList,
} from '@carbon/react';

const CustomerPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Research insights and analysis to empower change-seeking customers</h1>
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
      <Tab>Customers</Tab>
      <Tab>Consumers</Tab>
      <Tab>Tooling</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Responding to demand</h2>
            <p className="landing-page__p">
            Retail brands are looking more for products that are sustainable using recycled, bio-based and biodegradable plastics polymer content. There’s a 70-90% saving in manufacturing energy use on this bioplastic content portion mixed with virgin petroleum-based polymers. Hence there’s a carbon reduction and a huge pollution abatement. Additionally this research program investigates the triple bottom line of economic scale, environmental consequences, and social attitudes. Aligning these materials, processes and technologies to customer demand affords manufacturing companies to be fit for purpose in the long term. High risk, low data buying decisions. 
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/innovation_diffusion2.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt">Based on Moore, G.A. (2014) Crossing the Chasm: Marketing and selling high-tech products to mainstream customers. New York, NY: HarperBusiness Essentials.</p>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Sentiment and inclination</h2>
            <p className="landing-page__p">
            Consumer sentiment is undergoing a remarkable shift, as sustainability concerns propel a growing inclination towards reducing plastic packaging. With increased awareness of environmental impact, consumers are seeking eco-friendly alternatives and demanding greater transparency from brands. This shift is driving product development towards innovative packaging solutions that prioritize recyclability, biodegradability, and minimal waste generation. Companies are embracing this change by investing in sustainable packaging technologies, responding to evolving consumer preferences, and cultivating a greener image while ensuring customer satisfaction. Low risk, high data buying decisions.
             </p>           
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/4_gears2.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt">Based on Moore, G.A. (2014) Crossing the Chasm: Marketing and selling high-tech products to mainstream customers. New York, NY: HarperBusiness Essentials.</p>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Design thinking and market research</h2>
            <p className="landing-page__p">
            Design thinking and market research are powerful tools in product development. Design thinking encourages an empathetic approach to understanding user needs and generating innovative solutions. It involves iterative cycles of ideation, prototyping, and testing to create user-centered designs. Market research complements design thinking by providing valuable insights into market trends, consumer preferences, and competitive landscapes. Together, they enable businesses to create products that not only meet customer demands but also align with market dynamics, resulting in successful and impactful product launches.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/ai/11.jpg`}
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
<Column lg={16} md={8} sm={4} className="landing-page__r3">
  <UnorderedList>
    <ListItem><a href="https://www.instagram.com/materialtechlab/">Instagram</a></ListItem>
    <ListItem><font color="#f4f4f4"> Copyright © 2023 Materialtech Lab </font></ListItem>
  </UnorderedList>
</Column>
    </Grid>
  );
};

export default CustomerPage;