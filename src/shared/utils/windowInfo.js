const breakpointMaximumWidths = [
    {
        breakpoint: 'large',
        maxWidth: 1440,
    },
    {
        breakpoint: 'medium',
        maxWidth: 1024,
    },
    {
        breakpoint: 'small',
        maxWidth: 768,
    },
    {
        breakpoint: 'xsmall',
        maxWidth: 480,
    },
];

export const currentBreakpoint = () => {
    const windowWidth = document.body.clientWidth;
    const breakpoint = breakpointMaximumWidths.find((el) => el.maxWidth < windowWidth);

    return breakpoint ? breakpoint.breakpoint : 'xlarge';
};

export const isBelowDesktop = () => document.body.clientWidth < 1440;
export const isBelowSmallDesktop = () => document.body.clientWidth < 1024;
export const isBelowTablet = () => document.body.clientWidth < 768;
export const isBelowMobile = () => document.body.clientWidth < 480;
