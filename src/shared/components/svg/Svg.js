import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Cancelable from 'cancel.it';
import styles from './Svg.module.css';

class Icon extends Component {
    static getDerivedStateFromProps(props, state) {
        return {
            contents: typeof props.svg === 'string' ? props.svg : state.contents,
        };
    }

    promise = null;
    state = { contents: '' };

    componentDidMount() {
        this.maybeWaitForSvg();
    }

    componentDidUpdate(prevProps) {
        if (this.props.svg !== prevProps.svg) {
            this.maybeWaitForSvg();
        }
    }

    componentWillUnmount() {
        this.cancelWaitForSvg();
    }

    render() {
        const { svg, className, ...rest } = this.props;
        const { contents } = this.state;
        const finalProps = {
            ...rest,
            className: classNames(styles.svgWrapper, className),
        };

        return <i { ...finalProps } dangerouslySetInnerHTML={ { __html: contents } } />;
    }

    cancelWaitForSvg() {
        if (this.promise) {
            this.promise.cancel();
            this.promise = null;
        }
    }

    async maybeWaitForSvg() {
        const { svg } = this.props;

        this.cancelWaitForSvg();

        if (typeof svg === 'object') {
            this.promise = Cancelable.from(svg);

            const result = await this.promise.catch(() => ({ default: '' }));

            this.setState({ contents: result.default });
        }
    }
}

Icon.propTypes = {
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ then: PropTypes.func.isRequired })]).isRequired,
    className: PropTypes.string,
};

export default Icon;
