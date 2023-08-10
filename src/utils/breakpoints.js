import useBreakpoint, { getCSSMediaQueries } from 'use-breakpoint'

export const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1024 }

export const cssQueries = getCSSMediaQueries(BREAKPOINTS, 'screen')

export const useBreakpoints = () => useBreakpoint(BREAKPOINTS, 'desktop')