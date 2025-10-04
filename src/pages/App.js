import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../component/Hero.js';
import Footer from '../component/Footer.js';
import ContactBox from '../component/ContactBox.js';
import Content from '../component/Content.js';
import { projectData } from '../data/projectData.js';
import { useTheme } from '../logic/Theme.js';
import { initClarity } from '../logic/useClarity.js';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import '../style/index.css';
import '../style/CookieConsent.css';
function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    console.log('Initializing CookieConsent...');

    try {
      CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: 'box',
            position: 'bottom left',
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false,
          },
        },
        categories: {
          necessary: {
            readOnly: true,
          },
          analytics: {
            autoClear: {
              cookies: [
                {
                  name: /^_ga/,
                },
                {
                  name: '_gid',
                },
              ],
            },
          },
        },
        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: '🍪 Hey there!',
                description: 'I use cookies to make this portfolio even better. No ads, no creepy tracking—just helpful insights!',
                acceptAllBtn: 'Sure, go ahead! ✨',
                acceptNecessaryBtn: 'Just the essentials',
                showPreferencesBtn: 'Tell me more',
              },
              preferencesModal: {
                title: 'Cookie settings',
                acceptAllBtn: 'Yes, all the cookies 🍪',
                acceptNecessaryBtn: 'Only the basics',
                savePreferencesBtn: 'Save my choice',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: '🤔 Why cookies?',
                    description: 'I LOVE data (and cookies 🍪)! They help me see what you like, how long you stick around, and what could be improved. Basically, they make this portfolio more fun!',
                  },
                  {
                    title: '🔧 Essential cookies',
                    description: 'Keeps your cookie choices remembered. Required for the site to work properly.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: '📊 Analytics cookies',
                    description: 'Anonymous insights from Google Analytics & Microsoft Clarity. Shows me what\'s popular and how easy it is to find things. No personal data collected!',
                    linkedCategory: 'analytics',
                  },
                ],
              },
            },
          },
        },
        onConsent: ({ cookie }) => {
          // Track consent in Google Tag Manager dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'cookie_consent',
            consent_status: 'accepted',
            analytics_consent: cookie.categories.includes('analytics') ? 'granted' : 'denied',
          });

          // Initialize Clarity if analytics accepted
          if (cookie.categories.includes('analytics')) {
            initClarity();
          }
        },
        onChange: ({ cookie }) => {
          // Track consent changes in GTM dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'cookie_consent_changed',
            consent_status: 'updated',
            analytics_consent: cookie.categories.includes('analytics') ? 'granted' : 'denied',
          });

          // Initialize Clarity if user grants analytics consent
          if (cookie.categories.includes('analytics')) {
            initClarity();
          } else {
            // User revoked consent - Clarity will stop automatically due to cookie clearing
            console.log('Analytics consent revoked');
          }
        },
      });

      console.log('CookieConsent initialized successfully!');
    } catch (error) {
      console.error('Error initializing CookieConsent:', error);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Chotirat Jonggit (Choti / jgchoti) – Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chotirat Jonggit (Choti / jgchoti) showcasing projects, web development work, and technical skills."
        />
        <meta
          name="keywords"
          content="Chotirat Jonggit, Choti, jgchoti, web developer, portfolio, projects, React, data, full-stack"
        />
      </Helmet>
      <Hero />
      <Content projectData={projectData} />
      <ContactBox />
      <Footer />
    </div>
  );
}

export default App;