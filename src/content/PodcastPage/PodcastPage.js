import React from 'react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Friendship, Idea, Sprout, Rss } from '@carbon/react/icons';
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
import Iframe from 'react-iframe';


const PodcastPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Making + Doing podcast</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
  <Theme theme="g100">
    <TabList className="tabs-group" aria-label="Tab navigation" contained>
      <Tab>Episodes</Tab>
      <Tab>About</Tab>
      <Tab>Media</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Opinion and conversation for design thinking transformation</h2>
            <p className="landing-page__p">
            Graham Newman and his guests discuss the synergy between creativity, science and technology to foster innovation–as design evolves from making things to making things possible. Bangkok | Singapore</p> 
            <p className="landing-page__p">
            RSS&nbsp;&nbsp;<a href="https://feeds.castos.com/z9697">
              <Rss size={32}/></a></p>       
            <h2 className="landing-page__subheading">Latest episodes</h2>
            <p className="landing-page__p">Ocean Recovery Alliance’s founder outlines societal changes towards consumption and recycling are as important as the global feedstock economy to fix what’s gone wrong. Published April 2023.</p>
            <Iframe class="castos-iframe-player" src="https://5f34942001d3e9-29149447.castos.com/player/1462497" width="100%" height="150"></Iframe>
            <p className="landing-page__p">How might learning and development programs embedded with employability be a means to bridge the gap between the academy and industry? And why design education needs a revolution to support S-curve organisations. Published March 2023.</p>
            <Iframe class="castos-iframe-player" src="https://5f34942001d3e9-29149447.castos.com/player/1439986" width="100%" height="150"></Iframe>
            <p className="landing-page__p"></p>
            <h2 className="landing-page__subheading">From the archive</h2>
            <p className="landing-page__p">Entrepreneurship in Thailand with Khun Tiwa York. Published April 2021.</p>
            <Iframe class="castos-iframe-player" src="https://5f34942001d3e9-29149447.castos.com/player/420788" width="100%" height="150"></Iframe>

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
            <h2 className="landing-page__subheading">Origins and intent</h2>
            <p className="landing-page__p">
            Making and doing is a phrase commonly used at the Royal College of Art. Its origins are at the heart of design as a world of synthesis. Of creating things–some tangible, some not. This is achieved through reflective observation, abstract conceptualisation, active experimentation, and concrete experience. And these multiple experiences occur at the individual, local and global level.<br></br><br></br>The podcast's audience is drawn from design researchers and practitioners, and leaders in business, consulting and industry across Asia Pacific looking at the broader picture of how design fuses creativity, science and technology through interdisciplinary and transdisciplinary practice to make change, and challenge current thinking through guerilla intervention and disruption. Making + Doing is published once a month on Spotify, Apple Podcasts, Amazon Music and Google Podcasts. Keywords: Design, Research, Society, Culture, Entrepreneurship.
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
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Profile</h2>
            <p className="landing-page__p">
            Graham Newman MRes RCA FRSA is an award-winning designer across human-computer interaction, brand, customer and product experiences. He builds new businesses for global clients and leads digital and service design in Asia Pacific. Graham is a guarantor and senior instructor at Chulalongkorn University’s international program in Communication Design, Faculty of Architecture and a graduate of the Royal College of Art. Graham was awarded Fellowship of The Royal Society of Arts, Manufactures and Commerce (FRSA) for his contribution to inspiring better ways of thinking, acting and delivering change in 2017.
            <br></br><br></br>Graham started his design career at Factory Records and Fac 51 The Haçienda bridging design, technology and culture that included development of the world’s first interactive music CD-Rom. He has bumped into design thinking from time to time over the last decade but maintains that design is still about making and doing, then post-rationalising what it’s all about. 
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/polymerchain7.png`}
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

export default PodcastPage;