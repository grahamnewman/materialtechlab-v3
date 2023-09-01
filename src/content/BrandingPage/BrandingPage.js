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

const BrandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Creating remarkable experiences that captivate hearts and minds</h1>
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
      <Tab>Identity</Tab>
      <Tab>Packaging</Tab>
      <Tab>Work</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Exceptional design transforms brands into icons</h2>
            <p className="landing-page__p">
            Remarkable identity design goes beyond creating a visually appealing logo; it encapsulates the essence of a brand and communicates its unique story. It involves careful consideration of color psychology, typography, and visual elements to evoke emotions and convey brand values. A remarkable identity design captures attention, creates recognition, and fosters a lasting connection with the target audience. It is a powerful tool that distinguishes a brand from its competitors, leaving a memorable impression and becoming a symbol of trust and credibility.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/ai/05.jpg`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">The art of captivating consumers</h2>
            <p className="landing-page__p">
            Incredible packaging design transcends the mere functionality of containing a product; it becomes a visual and tactile experience that captivates consumers. It combines artistic flair, strategic thinking, and practicality to create a cohesive and memorable package. From stunning graphics to innovative structural designs, incredible packaging stands out on the shelves, enticing customers and leaving a lasting impression. It not only protects the product but also tells a story, evokes emotions, and reinforces brand identity, making it an essential element in successful marketing and brand building.
          </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/ai/12.jpg`}
              alt="Carbon illustration"
            />
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">The Materialtech Lab trustmark</h2>
            <p className="landing-page__p">
            An innovation funnel. A divergent design process of ideation. The Why, the How, and the What. A Helix. A fundamental shape found in various biological molecules. An Archimedes screw. A megaphone. Serving as a way for an organisation to articulate what it believes. To rally the community. Progression from cool to warm hues. Forging cold to searing hot mettle.</p>
            <h2 className="landing-page__subheading">The IDE identity–material as culture x material as structure</h2>
            <p className="landing-page__p">
            The intersection of material as culture and material as the matter from which a thing is or can be made represents a pivotal nexus in contemporary innovation design engineering. This conceptual juncture encapsulates the dynamic interplay between tangible substances and the cultural, symbolic, and socio-economic values ascribed to them. Material culture studies examine how objects, materials, and artifacts convey meaning and facilitate cultural expression. Simultaneously, materials' physical properties and their transformation through technology underscore their pivotal role in shaping human existence. This interdisciplinary intersection underscores the reciprocal relationship between society and materiality, with materials both reflecting and shaping cultural norms, identities, and ideologies. Understanding this intersection offers profound insights into the complex web of human-material interactions, providing a rich terrain for further design exploration.</p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/swooshy_anatomy.svg`}
              alt="Carbon illustration"
            />
          <p className="landing-page__ftnt">Materialtech Lab trustmark</p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/ide_anatomy.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt">IDE identity</p>
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

export default BrandingPage;