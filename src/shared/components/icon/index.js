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
const arrowRightSvg = import(/* webpackChunkName: "svg-sprite" */ '../../media/icons/icon-arrow-right.svg');

const GithubIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ githubSvg } />);
const TodoIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ todoSvg } />);
const DoingIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ doingSvg } />);
const DoneIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ doneSvg } />);
const PlayIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ playSvg } />);
const CheckmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ checkmarkSvg } />);
const CrossmarkIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ crossmarkSvg } />);
const ProtocolLabsBrandIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ protocolLabsBrandSvg } />);
const ArrowRightIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ arrowRightSvg } />);

export {
    GithubIcon,
    TodoIcon,
    DoingIcon,
    DoneIcon,
    PlayIcon,
    CrossmarkIcon,
    CheckmarkIcon,
    ProtocolLabsBrandIcon,
    ArrowRightIcon,
};

export default Icon;
