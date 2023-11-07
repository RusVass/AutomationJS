/=======task 1,3 module dev=======/

import { Employee } from "./employee.js";
export class Dev extends Employee {
    constructor(id, salary) {
        super(id, salary)

    }
    #jobType = `I am a Dev`

    getJobType() {
        return this.#jobType
    }

    static returnArrayOfDevs(...users) {
        let arrayOfDevs = [];

        users.forEach(user => {
            if (user instanceof Dev) {
                arrayOfDevs.push(user);
            }
        });
        return arrayOfDevs;
    }
}