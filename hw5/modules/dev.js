import { Employee } from "./employee.js";
export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary)
    }

    getJobType() {
        return `I am a Dev`
    }

    static returnArrayOfDevs(...args) {
        let arrayOfDevs = [];

        args.forEach(user => {
            if (user instanceof Dev) {
                arrayOfDevs.push(user);
            }
        });
        return arrayOfDevs;
    }
}