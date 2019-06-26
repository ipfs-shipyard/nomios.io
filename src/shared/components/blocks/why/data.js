import dids from '../../../media/illustrations/illustration-dids.svg';
import yourIdentity from '../../../media/illustrations/illustration-your-identity.svg';
import decentralizedSso from '../../../media/illustrations/illustration-decentralized-sso.svg';
import verifiableCredentials from '../../../media/illustrations/illustration-verifiable-credentials.svg';
import signedOperations from '../../../media/illustrations/illustration-signed-operations.svg';
import privacy from '../../../media/illustrations/illustration-privacy.svg';

export const title = 'Why Nomios?';

export const blocks = [
    {
        icon: yourIdentity,
        title: 'Your identity, under control',
        description: 'Edit your personal data in a single place.',
    },
    {
        icon: privacy,
        title: 'Privacy First',
        description: 'Control how much you disclose to others, or even go fully anonymous.',
    },
    {
        icon: decentralizedSso,
        title: 'Decentralized Sign-On',
        description: 'Typical single sign on solutions rely on centralised services like Facebook or Twitter. What happens when they go away?',
    },
    {
        icon: dids,
        title: 'Decentralized Identifiers',
        description: 'Embracing decentralized identifiers (DIDs) from different public ledgers such as Ethereum, Bitcoin, amongst others.',
        link: 'https://w3c-ccg.github.io/did-spec/',
    },
    {
        icon: verifiableCredentials,
        title: 'Verifiable Credentials',
        description: 'Receive statements from others and present them as proof when requested.',
        link: 'https://www.w3.org/TR/verifiable-claims-data-model/',
    },
    {
        icon: signedOperations,
        title: 'Signed operations/data',
        description: 'What you do online is currently owned by centralised services. Who\'s to say that data wasn\'t tampered with?',
    },
];
