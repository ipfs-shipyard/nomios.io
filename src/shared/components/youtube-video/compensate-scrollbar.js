import styles from './VideoModal.module.css';
import scrollbarCompensate from 'scrollbar-compensate';

const applyCompensation = () => {
    scrollbarCompensate([
        `.${styles.modalBodyOpen}`,
        // Any element that also needs to be compensated may add the [data-scrollbar-compensate="1"] attribute
        `.${styles.modalBodyOpen} [data-scrollbar-compensate="1"]`,
    ]);
};

if (typeof document !== 'undefined') {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        applyCompensation();
    } else {
        document.addEventListener('DOMContentLoaded', applyCompensation);
    }
}
