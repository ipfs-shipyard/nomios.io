// https://github.com/chenqingspring/react-lottie/issues/40
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

export default class LottieControlled extends Lottie {
    static propTypes = {
        // eslint-disable-next-line
        ...Lottie.propTypes,
        percentage: PropTypes.number,
    };

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (super.componentDidUpdate) {
            super.componentDidUpdate(prevProps, prevState, prevContext);
        }

        if (this.props.percentage !== prevProps.percentage && this.anim.totalFrames) {
            const frame = Math.round(this.anim.totalFrames * this.props.percentage);

            this.anim.goToAndStop(frame, true);
        }
    }
}
