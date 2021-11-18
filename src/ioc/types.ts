import { CONTROLLER_TYPES } from "./controller-symbols"

/**
 * The types structure is just a list of symbols for use by Inversify.
 * Each class managed by Inversify will have an entry in this list.
 */
const TYPES = Object.assign({
    Configue: Symbol.for('Configue'),
    Logger: Symbol.for('Logger'),
    Mapper: Symbol.for('Mapper'),
    ApiServer: Symbol.for('ApiServer'),
    Controllers: Symbol.for('Controllers'),
    HelloWorldController: Symbol.for('HelloWorldController'),
}, CONTROLLER_TYPES);

export { TYPES }