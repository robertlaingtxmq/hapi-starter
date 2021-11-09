import { Lifecycle, Request, ResponseToolkit } from "@hapi/hapi";
import { inject, injectable } from "inversify";
import { TYPES } from "../../ioc/types";
import { Logger } from "../../helpers/logger";
import { HapiRoute } from "../../decorators/decorators";
import { HapiController } from "../hapicontroller";
import * as Joi from '@hapi/joi';
import * as Boom from "@hapi/boom";

@injectable()
class HelloWorldController extends HapiController {

    constructor(@inject(TYPES.Logger) private logger: Logger) { 
        super();
    }

    @HapiRoute({
        method: 'GET',
        path: '/api/helloworld',
        options: {
            description: 'Hello World!',
            tags: ['api', 'test'],
            auth: false,
        }
    })
    public getAll(request: Request, toolkit: ResponseToolkit) {
        this.logger.info('getAll invoked');
        return 'Hello World!';
    }

    @HapiRoute({
        method: 'GET',
        path: '/api/helloworld/{id}',
        options: {
            validate: {
                params: {
                  id: Joi.number().integer().required(),
                }
            },
            description: 'Not implemented',
            tags: ['api', 'test'],
            auth: false,
        }
    })
    public getById(request: Request, toolkit: ResponseToolkit) {
        this.logger.info('getById invoked');
        throw Boom.notImplemented();
    }
}

export { HelloWorldController }