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
          <h1 className={css.pageTitle}>Contact Welcomely</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <div id="mc_embed_signup">
                <form action="https://app.us17.list-manage.com/subscribe/post?u=299990f2f1972f38b92a7a3ae&amp;id=2d98b5e949" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                      <input type="email" onChange={noop} value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                    </div>
                    <div className="mc-field-group input-group">
                      <h4>I'm A... </h4>
                      <ul>
                        <li><label className={css.mcLabel}><input type="checkbox" className={css.mcInput} onChange={noop} value="1" name="group[35734][1]" id="mce-group[35734]-35734-0" /> Venue</label></li>
                        <li><label className={css.mcLabel}><input type="checkbox" className={css.mcInput} onChange={noop} value="2" name="group[35734][2]" id="mce-group[35734]-35734-1" />Planner</label></li>
                        <li><label className={css.mcLabel}><input type="checkbox" className={css.mcInput} onChange={noop} value="4" name="group[35734][4]" id="mce-group[35734]-35734-2" />Other</label></li>
                      </ul>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                      <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                    </div>
                    <div style={{position: 'absolut', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_299990f2f1972f38b92a7a3ae_2d98b5e949" tabIndex="-1" onChange={noop} value="" />
                    </div>
                    <div className="clear">
                      <input type="submit" onChange={noop} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                    </div>
                  </div>
                </form>
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
