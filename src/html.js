import React from 'react';
import PropTypes from 'prop-types';

const Html = (props) => (
    <html { ...props.htmlAttributes }>
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
            <link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/favicon/favicon-512x512.png" />
            <link rel="shortcut icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#d4b58b" />
            <meta name="application-name" content="Nomios" />
            <meta name="msapplication-starturl" content="/" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="/browserconfig.xml" />

            { props.headComponents }
        </head>
        <body { ...props.bodyAttributes }>
            { props.preBodyComponents }
            <noscript key="noscript" id="gatsby-noscript">
                This app works best with JavaScript enabled.
            </noscript>
            <div
                key="body"
                id="___gatsby"
                dangerouslySetInnerHTML={ { __html: props.body } } />
            { props.postBodyComponents }
        </body>
    </html>
);

Html.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};

export default Html;
