import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h3>{t('Look forward and drive!')}</h3>
      <div>
        <a
          href="https://www.facebook.com/indiacovidseva"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
          style={{justifyContent: 'center'}}
        >
          <Icon.Facebook />
        </a>

        <a
          href="https://twitter.com/indiacovidseva"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
          style={{justifyContent: 'center'}}
        >
          <Icon.Twitter />
        </a>

        <a
          href="https://www.linkedin.com/company/indiacovidseva"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
          style={{justifyContent: 'center'}}
        >
          <Icon.Linkedin />
        </a>

        <a
          href="https://github.com/VICS-CORE/covid19india-react"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
        </a>
      </div>

        <h5>Built on covid19india.org</h5>
    </footer>
  );
}

export default React.memo(Footer);
