import { DoneIcon, DoingIcon, TodoIcon } from '../../icon';

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

export const rows = [
    {
        name: 'No plugins required',
        status: [1, 0, 0],
    },
    {
        name: 'Signing',
        status: [1, 0, 0],
    },
    {
        name: 'Mobile',
        status: [1, 1, 0],
    },
    {
        name: 'Authenticate',
        status: [1, 1, 0],
    },
    {
        name: 'Decentralized Identifiers (DIDs)',
        status: [1, 0, 0],
    },
    {
        name: 'Verifiable credentials',
        status: [1, 0, 1],
    },
    {
        name: 'Encryption between wallets',
        status: [1, 0, 1],
    },
    {
        name: 'Multi wallet',
        status: [1, 0, 1],
    },
    {
        name: 'Multi Identify',
        status: [1, 0, 1],
    },
];
