/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
      // <footer className="nav-footer" id="footer">
      //   <section className="sitemap">
      //     <a href={this.props.config.baseUrl} className="nav-home">
      //       {this.props.config.footerIcon && (
      //         <img
      //           src={this.props.config.baseUrl + this.props.config.footerIcon}
      //           alt={this.props.config.title}
      //           width="66"
      //           height="58"
      //         />
      //       )}
      //     </a>
      //     <div>
      //       <h5>Docs</h5>
      //       <a href={this.docUrl('doc1.html')}>
      //         Getting Started (or other categories)
      //       </a>
      //       <a href={this.docUrl('doc2.html')}>Guides (or other categories)</a>
      //       <a href={this.docUrl('doc3.html')}>
      //         API Reference (or other categories)
      //       </a>
      //     </div>
    return (
	<footer className="nav-footer" id="footer">
          <section className="sitemap"  style={{"margin": "auto", "alignItems": "center", "justifyContents": "center"}}>
          <div>
            <h5>Community</h5>
            <a href="https://github.com/kubernetes-sigs?q=object+storage&type=&language=&sort=">Github</a>
            <a
              href="https://kubernetes.slack.com/archives/C017EGC1C6N"
              target="_blank"
              rel="noreferrer noopener">
              Slack
            </a>
            <a
              href="https://groups.google.com/g/container-object-storage-interface-wg/"
              target="_blank"
              rel="noreferrer noopener">
              Mailing List
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
