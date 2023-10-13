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

const StrategyPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Strategy that delivers the fundamental business value
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
      <Tab>Roadmap</Tab>
      <Tab>Metrics</Tab>
      <Tab>E-commerce</Tab>
    </TabList>
    </Theme>
    <TabPanels>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Investment in science, research and innovation design</h2>
            <p className="landing-page__p">
            In today's increasingly environmentally conscious world, the bioplastics industry presents a tremendous opportunity for businesses aiming to combine profitability with sustainability. Developing an effective business strategy for a bioplastics company requires careful consideration of various factors.
            <br></br><br></br>First and foremost, product innovation should be at the core of the strategy. Investing in research and development to create bioplastics that meet or exceed the performance of traditional plastics will help gain a competitive edge in the market. <p className="helper-text-01">See Cornered Resource and Counter Positioning</p><br></br>Additionally, forging strategic partnerships with suppliers, manufacturers, and distributors is crucial. Collaborating with like-minded organizations can help secure a reliable supply chain and ensure efficient production and distribution of bioplastics. Furthermore, a strong focus on marketing and communication is essential. Educating consumers about the benefits of bioplastics, such as their renewable nature and reduced environmental impact, can drive demand and foster brand loyalty. <p className="helper-text-01">See Network Economics, Scale Economics, Switching Costs, and Branding</p>
            <br></br>Lastly, integrating sustainability throughout the company's operations is vital. Implementing environmentally friendly practices in manufacturing, packaging, and waste management will reinforce the company's commitment to sustainability and attract environmentally conscious consumers and investors. <p className="helper-text-01">See Process Power</p>
            <br></br>By combining product innovation, strategic partnerships, effective marketing, and sustainable practices, a bioplastics company can position itself as a leader in the industry, capturing market share and contributing to a greener future.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/power_progression.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt"> Adapted from: Helmer, H. (2016). 7 powers: The Foundations of Business Strategy. California: Hamilton Helmer.</p>
          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">3M's Innovation KPIs</h2>
            <p className="landing-page__p">3M emphasises innovation as a fundamental aspect of its business strategy. The company utilises several KPIs to measure the effectiveness of its innovation initiatives. Firstly, 3M focuses on the percentage of revenue generated from new products launched within the last five years, as it reflects the company's ability to consistently introduce innovative solutions to the market. Secondly, the number of patents filed and granted serves as an indicator of 3M's commitment to protecting its intellectual property and fostering a culture of invention. Lastly, 3M tracks the success rate of new product launches, measuring the percentage of products that achieve or exceed their sales targets, ensuring that innovation efforts translate into tangible commercial success. This ensures that innovation remains a core driver of growth and competitiveness in a rapidly evolving business landscape.
            <br></br><br></br><h4 className="landing-page__subheading">Input metrics</h4>Number of new ideas in the funnel: Continuously coming up with new ideas to feed the funnel. and scaled to the size of the company. Acceptance/idea kill rate: Number of projects evaluated to get funded as a benchmark. Balanced investment: Metric on spend for existing and new markets.
            <br></br><br></br><h4 className="landing-page__subheading">Impact metrics</h4>Percentage of revenue from new products: Products introduced in the last 12 months. This avoids products becoming overly dominant. Quality of patents: Not the quantity. Referenced across other patents in the industry. Innovation impact on gross margin: Spend on innovation that reflects the company’s branding soft power.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/innovation_kpis.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt"> Adapted from: McKinney, P (2021). Six innovation metrics (KPIs) every organisation should use.</p>

          </Column>
        </Grid>
      </TabPanel>
      <TabPanel>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            <h2 className="landing-page__subheading">Building a digital first brand for China consumption</h2>
            <p className="landing-page__p">
            In China's bustling e-commerce ecosystem, FMCG (Fast-Moving Consumer Goods) brands are riding the digital wave to unprecedented heights. The country's tech-savvy consumers, armed with smartphones and high-speed internet, are driving a paradigm shift in shopping habits. E-commerce giants like Alibaba's Tmall and JD.com dominate the landscape, offering FMCG brands vast online marketplaces to showcase products. These platforms leverage cutting-edge technologies, from AI-driven recommendation engines to seamless payment gateways, enhancing user experience. Moreover, live streaming and social commerce have merged, allowing FMCG brands to engage directly with consumers, forging authentic connections and driving sales. The ecosystem's efficiency and reach have transformed traditional retail models, enabling FMCG brands to thrive in the world's largest digital marketplace. Here's how to do it.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/e-commerce_growth_stack.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt"> Adapted from: Campbell, K. (2023) E-commerce growth strategy: A brand-driven approach to attract shoppers, build community and retain customers. London: KoganPage. </p>
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

export default StrategyPage;