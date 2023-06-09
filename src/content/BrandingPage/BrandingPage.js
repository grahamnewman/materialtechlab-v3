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

const BrandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">This is the branding page</h1>
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
      <Tab>Materials</Tab>
      <Tab>Customers</Tab>
      <Tab>Products</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Bio-based, biodegradable and recycled plastic</h2>
            <p className="landing-page__p">
            The huge retail brands of the world export their products to 190 countries. They now want 20-30% of recycled content material in their products. Additionally there is currently a 6m ton shortfall of recycled content annually. This research program investigates the plastics manufacturing and consumption ecosystem using design intervention methods to analyse alternative materials in the form of bio-based, biodegradable, and recycled materials. This feedstock material is produced from sustainable sources, eg, waste material such as  food, starch and vegetable fibres, and algae. 
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/plastics_taxonomy.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt">Full descriptions of the plastics taxonomy can be found in the glossaries repo. Visualisation based on Shah, Manali & Rajhans, Sanjukta & Pandya, Himanshu & Mankad, Archana. (2021). Bioplastic for future: A review then and now. World Journal of Advanced Research and Reviews. 9. 056-067. 10.30574/wjarr.2021.9.2.0054.</p>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Customer sentiment and inclination</h2>
            <p className="landing-page__p">
            Consumers and retail brands are looking more for products that are sustainable using recycled, bio-based and biodegradable plastics polymer content. There’s a 70-90% saving in manufacturing energy use on this bioplastic content portion mixed with virgin petroleum-based polymers. Hence there’s a carbon reduction and a huge pollution abatement. Additionally this research program investigates the triple bottom line of economic scale, environmental consequences, and social attitudes. Aligning these materials, processes and technologies to customer demand affords manufacturing companies to be fit for purpose in the long term.             </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain3.png`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Product design R&D</h2>
            <p className="landing-page__p">
            Preferable futures investigates how design thinking and making can be used as an intervention tool to provide radical product design solutions. Using this PPPP framework, of what's probable, plausible, possible and preferable, design can speculate future usage and product development that encompasses the systematic and innovative process of creating something exceptional that exceeds customer expectations. It involves meticulous research, robust design, efficient prototyping, rigorous testing, and continuous improvement.<br></br><br></br>The program also responds to consumers and retail brands in clarifying what is bio-based, biodegradable, and recycled plastic material. Specifically, to mitigate this ambiguity to achieve a consensual and fair definition of these complex materials using plain language and accessibility semiotics for non-specialised audiences. For example: if the material is not 100% bio-based, the actual percentage has to be prefixed (eg, “30% bio-based plastic”).
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/pppp.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt"> Adapted from: Dunne, A. and Raby, F. (2014) Speculative everything: Design, fiction, and Social Dreaming. S.l.: MIT Press. </p>
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

export default BrandingPage;