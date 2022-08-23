import logger, { logger2 } from "./logger/index.js";
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from "./constants.js";

logger2("test message 2", constants.TYPE_ERROR);
