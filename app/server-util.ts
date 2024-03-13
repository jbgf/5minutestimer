
const SUFFIX = 'minutes'
export const addPathSuffix = (duration: string) => `${duration}${SUFFIX}`
export const getPathSuffix = (durationWithMinPath: string) => durationWithMinPath?.replace(SUFFIX, '')