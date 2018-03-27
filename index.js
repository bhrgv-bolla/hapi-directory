/*
    Decorate the hapi server with defining methods on the handler, toolkit??

https://hapijs.com/api/16.6.3#serverdecoratetype-property-method-options
    Call the this.file(path, {confine: false}) to invoke the inert functionality.

    this => reply.
 */

const {zipDirectory} = require("./lib/archive-helper");
const handler = (directoryPath) => {
    zipDirectory()

}