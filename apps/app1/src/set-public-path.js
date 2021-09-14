import { setPublicPath } from 'systemjs-webpack-interop';
import { appName } from './utils/const';

// rootDirectoryLevel 默认是1，需要根据情况调整
setPublicPath(appName, 2);
// eslint-disable-next-line no-undef 
// __webpack_public_path__ = "http://localhost:8080/"