import React, { forwardRef } from 'react';
import Icon from './Icon';

const githubSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-github.svg');
const todoSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-todo.svg');
const doingSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-doing.svg');
const doneSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-done.svg');
const playSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-play.svg');
const crossmarkSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-crossmark.svg');
const checkmarkSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-checkmark.svg');
const protocolLabsBrandSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-protocol-labs-brand.svg');
const protocolLabsSymbolSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-pl-symbol.svg');
const moxyLogoSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-moxy-logo.svg');
const arrowRightSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-arrow-right.svg');
const externalLinkSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-external-link.svg');

const GithubIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ githubSvg } />);
const TodoIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ todoSvg } />);
const DoingIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ doingSvg } />);
const DoneIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ doneSvg } />);
const PlayIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ playSvg } />);
const CheckmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ checkmarkSvg } />);
const CrossmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ crossmarkSvg } />);
const ProtocolLabsBrandIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ protocolLabsBrandSvg } />);
const ProtocolLabsSymbolIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ protocolLabsSymbolSvg } />);
const MoxyLogoIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ moxyLogoSvg } />);
const ArrowRightIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ arrowRightSvg } />);
const ExternalLinkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ externalLinkSvg } />);

export {
    GithubIcon,
    TodoIcon,
    DoingIcon,
    DoneIcon,
    PlayIcon,
    CrossmarkIcon,
    CheckmarkIcon,
    ProtocolLabsBrandIcon,
    ProtocolLabsSymbolIcon,
    MoxyLogoIcon,
    ArrowRightIcon,
    ExternalLinkIcon,
};

export default Icon;
