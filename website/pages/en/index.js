/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
            <small style={{"color": "black", "display": "none"}}>{props.tagline}</small>
	    <p></p>
	    <p style={{"fontSize": "20px", "fontWeight": "300", "color": "black", "maxWidth": "65%", "margin": "auto", "lineHeight": "180%"}}> Container Object Storage Interface (COSI) is a standard for exposing object storage to containerized workloads running in Kubernetes </p>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/deployment-guide.md">Try it out</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Vendors can write their own COSI drivers to enable applications to use their object storage system. Learn how to write a COSI driver <a href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-write-a-cosi-driver.md">here</a>',
            image: `${baseUrl}img/vendors.svg`,
            imageAlign: 'top',
            title: 'Object Storage Vendors',
          },
          {
            content: 'Make your application COSI compatible and seamlessly switch between object storage providers without any application code changes. Learn more <a href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/blob/master/docs/how-to-make-your-application-cosi-compatible.md">here</a>',
            image: `${baseUrl}img/app_developers.svg`,
            imageAlign: 'top',
            title: 'Application Developers',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const leaders = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
	    <div className="leaderboard" key={user.infoLink} style={{"margin": "auto", "alignItems": "center", "justifyContents": "center", "display": "flex", "flexDirection": "row"}}>
	        <a href={user.infoLink} key={user.infoLink}>
		    <img src={user.image} alt={user.caption} title={user.caption} />
		</a>
		<div className="leaderboard-details" style={{"textAlign": "left"}}>
		    {user.caption} <br />
		    <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
		<img src={user.organizationLogo} alt='org' style={{"height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
                 	<a className="github" href={user.organizationURL} style={{"color": "black"}}>
		            {user.organizationName}
	                </a>
		    </div>
		    <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
		        <img src='/img/github.svg' alt='github' style={{"height": "24px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
                 	<a className="github" href={"https://github.com/" + user.github} style={{"color": "black"}}>
		            {user.github}
	                </a>
		    </div>
		    <div style={{"display": "flex", "flexDirection": "row", "alignItems": "center", "fontWeight": "700", "fontColor": "black"}}>
		        <img src='/img/twitter.png' alt='twitter' style={{"height": "20px", "width": "24px", "marginRight": "5px", "marginBottom": "5px", "padding": "0"}} />
		        <a className="twitter" href={"https://twitter.com/" + user.twitter} style={{"color": "black"}}>
		            {user.twitter}
	                </a>
		    </div>

	        </div>
	    </div>

        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Behind This?</h2>
          <p>SIG Storage COSI is led by these members</p>
          <div className="logos">{leaders}</div>
          <div className="more-users">
            <a className="button" href="https://github.com/kubernetes-sigs/container-object-storage-interface-api/graphs/contributors">
              More {siteConfig.title} Contributors
            </a>
          </div>
        </div>
      );
    };

//          <FeatureCallout />
//          <LearnHow />
//          <TryOut />
//          <Description />
      
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
