﻿import React from 'react'
import Slide from '../Slide'
import { organization } from '../../../config'

class Welcome extends React.Component {
  render() {
    return (
      <Slide header="Welcome!" id="welcome" showBack={false} nextText="Get Started" beginsSection>
        <p className="usa-font-lead">
          This is the {organization.name} electronic application for free and
          reduced priced meals for
          the <abbr title="United States Department of Agriculture">USDA</abbr>&rsquo;s National School Lunch &amp; School Breakfast Programs.
        </p>
        <p>
          This interactive application will guide you through the application
          process. When
          you are ready to apply, click the ‘Get Started’ button below to
          begin.
        </p>
        <p>
          If you would like to apply using
          the <a href={organization.paperApplication.url} target="_blank">paper application</a>,
          you can print and complete it and then return it to us at 
          {organization.paperApplication.address}.
        </p>
      </Slide>
    )
  }
}

export default Welcome
