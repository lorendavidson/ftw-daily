import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import logo from './logo.png';
import david from './david.jpg';
import meltem from './meltem.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Welcomely',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.staticPageWrapper}>
          <img className={css.logoImage} src={logo} alt="Welcomely" />
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div>
                <h2>Welcomely is an online marketplace for small, fully-equipped meeting spaces.</h2>
                <p>The platform features top meeting spaces in hospitality’s finest locales. It goes beyond listing just hotels and restaurants, by including unique hidden gems that are often overlooked.</p>
                <p>Welcomely is a one-stop shop for planners to browse small meeting spaces based on location, availability and need - with the convenience of booking and paying on demand.</p>
                <h2>Founders</h2>
              </div>
              <div>
                <img className={css.bioImage} src={meltem} alt="Meltem Algan" />
                <h3>Hi, I'm Meltem.</h3>
                <p>I'm a seasoned event planner with international experience in North America, Turkey and the Middle East.​</p>
                <p>As a planner, finding the right meeting space has been a major pain point for me. Especially in a new city, which I happened to always be in. The amount of time spent on researching venues and contacting each one individually just to see what was available drove me nuts.</p>
                <p>Now with a pandemic in the mix, more companies are permanently transitioning to a remote model. Meaning more people are sharing my pain. Finding the right space to hold a board meeting, host a workshop, pitch your deck, or impress a client is real.</p>
                <p>So I created Welcomely - an online marketplace for small, fully-equipped meeting spaces.</p>
              </div>
              <div>
                <img className={css.bioImage} src={david} alt="David Gratton" />
                <h3>Hi, I'm David.</h3>
                <p>I make ideas real.</p>
                <p>I conceive new products, and I build and lead the teams to deliver them. A technology thought-leader and imagineer, my passion is incubating and growing unique, user-focused applications.</p>
                <p>Innate curiosity has taken me around the world, creating products in a wide array of industries: investment banking and fintech, music and film, games, education, and real estate. Rapidly developing and deploying high quality products and apps to an increasingly tech savvy audience is a critical skill set needed to compete in today’s rapidly changing world. I grow these skills and inject design thinking into every project.</p>
                <p>My mission is to bring ideas to life. The accomplishment of realizing goals, turning ideas into reality drives me and brings me joy every day.</p>
              </div>
            </div>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
