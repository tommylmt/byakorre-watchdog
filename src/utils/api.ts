const BYAKORRE_REFERENCE: number = 20586458;

export default class ApiChecker {
    constructor() {
        this.checker = require('ikea-availability-checker');
    }

    async isAvailable(): Promise {
        return await this.checker.availability(process.env.IKEA_STORE_CODE, BYAKORRE_REFERENCE);
    }
}