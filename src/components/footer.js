import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h3>{t('Look forward and drive!')}</h3>

       <div className="link"> 
        <a
          href="https://seva.ml"
          target="_blank"
          rel="noopener noreferrer"
        >
          seva.ml
        </a>
      </div>

      <a
        href="https://www.facebook.com/indiacovidseva"
        target="_blank"
        rel="noopener noreferrer"
        className="button facebook"
        style={{justifyContent: 'center'}}
      >
        <Icon.Facebook />
        <span>{t('View updates on Facebook')}</span>
      </a>

      <a
        href="https://twitter.com/indiacovidseva"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{justifyContent: 'center'}}
      >
        <Icon.Twitter />
        <span>{t('Follow us on Twitter')}</span>
      </a>

      <a
        href="https://www.linkedin.com/company/indiacovidseva"
        target="_blank"
        rel="noopener noreferrer"
        className="button linkedin"
        style={{justifyContent: 'center'}}
      >
        <Icon.Linkedin />
        <span>{t('Connect with us on LinkedIn')}</span>
      </a>

      <a
        href="https://github.com/VICS-CORE/covid19india-react"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>{t('Open Sourced on GitHub')}</span>
      </a>

        <h5>Built on covid19india.org</h5>
    </footer>
  );
}

export default React.memo(Footer);
