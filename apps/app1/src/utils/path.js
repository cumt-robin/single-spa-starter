import { appName } from "./const"

export function resolvePublicPath() {
    if (window.System && typeof window.System.resolve === "function") {
        const appEntryUrl = window.System.resolve(appName)
        const a = document.createElement("a");
        a.href = appEntryUrl;
        return a.protocol + "//" + a.host
    } else {
        return ""
    }
}

export function resolveAbsPath(absUrl) {
    return resolvePublicPath() + absUrl;
}