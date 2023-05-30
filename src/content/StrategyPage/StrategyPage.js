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

const ResearchPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
      <Breadcrumb noTrailingSlash aria-label="Page navigation">
        
  </Breadcrumb>
  <h1 className="landing-page__heading">Strategy that delivers innovation design and engineering</h1>
  <img
              className="landing-page__swooshy"
              src={`${process.env.PUBLIC_URL}/assets/images/swooshy2.svg`}
              alt="Carbon illustration"
            />
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
  <Tabs defaultSelectedIndex={0}>
  <Theme theme="g100">
    <TabList className="tabs-group" aria-label="Tab navigation" contained>
      <Tab>Roadmap</Tab>
      <Tab>Metrics</Tab>
      <Tab>Patents</Tab>
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
            <h2 className="landing-page__subheading">Bio-based and biodegradable polymer blend patent filing</h2>
            <p className="landing-page__p">
            The patent filing trend for bio-based and biodegradable polymer blends indicates a growing interest in sustainable materials outside of Covid-19’s impact. Researchers and manufacturers are increasingly focusing on developing innovative blends that combine bio-based polymers with biodegradable additives. This trend reflects the rising demand for eco-friendly alternatives to conventional plastics. Looking ahead, the forecast suggests a continued upward trajectory in patent filings for these polymer blends. The trend aligns with the global push for more sustainable solutions in various industries, such as packaging, textiles, and biomedical applications, where bio-based and biodegradable polymer blends offer significant environmental benefits.
            <br></br><br></br>There are four factors that may slow down patent applications. Market maturity: the bio-based and biodegradable polymer blend market may have reached a certain level of maturity, resulting in a saturation of patentable innovations. As the field evolves, companies may focus more on product development and commercialisation rather than filing new patents. Technology stabilisation: the technology and processes related to bio-based and biodegradable polymer blends might have become more stable and well-established. This could lead to fewer breakthrough innovations and therefore a decline in patent filings. Patent portfolio consolidation: leading companies may have already built substantial patent portfolios in the past, and their focus might have shifted towards optimising and consolidating existing intellectual property rather than pursuing new patent filings. Regulatory environment: changes in regulations or policies related to bio-based and biodegradable plastic material could have influenced the patent landscape. Shifts in governmental policies may impact the incentives for companies to file patents in this area.
            </p>
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            <img
              className="landing-page__illo"
              src={`${process.env.PUBLIC_URL}/assets/images/patent_filing.svg`}
              alt="Carbon illustration"
            />
            <p className="landing-page__ftnt">Top ten bioplastics patent filers by priority filings within the last 10 years. Adapted from: Appleyard Lees. (2021). Inside Green Innovation: Progress Report 2021. Available at: https://appleyardlees.foleon.com/igipr/inside-green-innovation-progress-report-2021/3-bioplastics/ (Accessed: 25 May 2023). </p>
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

export default ResearchPage;