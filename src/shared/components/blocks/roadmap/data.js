import { DoneIcon, DoingIcon, TodoIcon } from '../../icon';

export const rows = [
    {
        name: 'Create identities based on DIDs',
        status: [1, 0, 0],
    },
    {
        name: 'Backup identity key material',
        status: [1, 0, 0],
    },
    {
        name: 'Manage multiple devices per identity',
        status: [1, 0, 0],
    },
    {
        name: 'Authenticate to applications',
        status: [1, 0, 0],
    },
    {
        name: 'Works directly within the browser, no extensions required',
        status: [1, 0, 0],
    },
    {
        name: 'Signing with session keys (derivates of device keys)',
        status: [1, 0, 0],
    },
    {
        name: 'Signing with device key (requires authorization)',
        status: [1, 0, 0],
    },
    {
        name: 'Support more DID methods',
        status: [1, 0, 0],
    },
    {
        name: 'Add for verifiable credentials, starting with social proofs',
        status: [0, 1, 0],
    },
    {
        name: 'Mobile based wallet',
        status: [0, 1, 0],
    },
    {
        name: 'Desktop based wallet',
        status: [0, 1, 0],
    },
    {
        name: 'Encryption of data between devices',
        status: [0, 0, 1],
    },
    {
        name: 'Support JSON-LD signatures',
        status: [0, 0, 1],
    },
];

export const status = [
    {
        name: 'Done',
        icon: DoneIcon,
    },
    {
        name: 'Doing',
        icon: DoingIcon,
    },
    {
        name: 'To do',
        icon: TodoIcon,
    },
];
