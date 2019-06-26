/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import keyboardOnlyOutlines from 'keyboard-only-outlines';
import Modal from 'react-modal';

export const onInitialClientRender = () => {
    keyboardOnlyOutlines();
    Modal.setAppElement('#___gatsby');
};
