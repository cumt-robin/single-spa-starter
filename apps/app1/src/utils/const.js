export const rootDOMIdPrefix = "single-spa-application:"

export const appName = "@kulu/app1"
export const routeBase = process.env.VUE_APP_STANDALONE === 'true' ? "/" : "/app1"

export const rootDOMId = rootDOMIdPrefix + appName