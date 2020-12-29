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
import image from './about-us-1056.jpg';

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
          <h1 className={css.pageTitle}>About Welcomely</h1>
          <img className={css.coverImage} src={image} alt="" />

          <div className={css.contentWrapper}>
            <aside className={css.contentSide}>
              <p>Aside content goes here, maybe.</p>
            </aside>

            <div className={css.contentMain}>
              <h2>Quisque vitae dapibus nunc, eu cursus ante. Duis eget erat non diam sodales venenatis non vel purus. Praesent sit amet erat tristique ante pellentesque elementum ac et mi. Vestibulum vel magna eget orci blandit rhoncus. Duis ac urna id metus accumsan hendrerit. Pellentesque posuere est in sapien laoreet, a mollis nunc pulvinar. Proin a sagittis elit. Morbi vehicula sit amet nisl vitae luctus. Nulla accumsan fringilla eleifend.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros eros, lobortis ac tincidunt a, iaculis at urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis velit in lorem rhoncus venenatis. Proin vel turpis eleifend, euismod leo eu, luctus massa. Nulla id dapibus ligula, ut auctor velit. Quisque gravida eu sem aliquam pretium. Morbi auctor, lacus quis sodales iaculis, sem mi maximus massa, at bibendum turpis risus vel magna. Maecenas sodales maximus velit. Suspendisse ac nisl tincidunt, porta purus eget, pharetra est. Phasellus id risus tristique, facilisis lectus ut, cursus nunc. Suspendisse leo lectus, finibus quis nisl ut, suscipit ullamcorper lacus. Nulla nec purus sed magna facilisis maximus.</p>
              <h3 className={css.subtitle}>Are you a venue owner?</h3>
              <p>
                You can also check out our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
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
