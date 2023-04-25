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


const ProgramsPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Programs of research</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
  <Theme theme="g100">
    <TabList className="tabs-group" aria-label="Tab navigation" contained>
      <Tab>Materials</Tab>
      <Tab>Customers</Tab>
      <Tab>Labelling</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Bioplastics and recycled content R&D</h2>
            <p className="landing-page__p">
            The huge brands of the world export their products to 190 countries. They now want 20-30% of recycled content material in their products. Additionally there is currently a 6m ton shortfall of recycled content annually. This research program addresses this circular economy with alternatives in the form of bioplastics, and green composite materials where feedstock is being produced from sustainable sources, eg, waste material such as a food fibre, vegetable fibre and algae.
            </p>
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
            <h2 className="landing-page__subheading">Customer sentiment and inclination</h2>
            <p className="landing-page__p">
            Consumers and companies are looking more for products that are sustainable using recycled and biodegradable polymer content. There’s a 70-90% saving in energy use on this bioplastic content portion mixed with virgin petroleum-based polymers, hence there’s a carbon reduction and a huge pollution abatement. Additionally this research program investigates the commercial responsibility of aligning manufacturing materials, processes and technology to customer demand for companies to be fit for purpose.
            </p>
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
            <h2 className="landing-page__subheading">Mitigating label ambiguity</h2>
            <p className="landing-page__p">
            This research program responds to consumers and companies in clarifying what is biodegradable or bio material that's meant to be recycled. This is the same for the recyclers clarifying what’s in their batches and the brands clarifying what’s in their feedstock. We aim to mitigate this ambiguity to achieve a consensual and fair definition of these complex materials using plain language and universal semiotics for non-sepcialised audiences.
            </p>
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

export default ProgramsPage;