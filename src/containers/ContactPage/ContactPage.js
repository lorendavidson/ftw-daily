import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { Helmet } from 'react-helmet-async';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

// import { SendMessageForm } from '../../forms';

import css from './ContactPage.module.css';
import logo from './logo.png';

const ContactPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const noop = () => null;

  // prettier-ignore
  return (
    <StaticPage
      title="Contact"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactPage',
        description: 'Contact Welcomely',
        name: 'Contact page',
      }}
    >

      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div className={css.iframe} id="mc_embed_signup">
                <iframe src="https://us17.list-manage.com/contact-form?u=299990f2f1972f38b92a7a3ae&form_id=a6ff7f21892c74a582939b00de74cbe3" border="0"></iframe>
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

export default ContactPage;
