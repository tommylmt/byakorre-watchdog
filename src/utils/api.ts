export default class ApiChecker {
    constructor() {
        this.checker = require('ikea-availability-checker');
    }

    async isAvailable() {
        return await this.checker.availability(process.env.IKEA_STORE_CODE, process.env.IKEA_REFERENCE);
    }
}