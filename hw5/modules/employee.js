export class Employee {
    constructor (id, salary) {
        this.id = id;
        this.salary = salary;
    }

    static compareSalary(userId_1, userId_2) {
        if (userId_1.salary > userId_2.salary) {
            return  `User with ${userId_1.id} has greater salary`
        } else if (userId_1.salary < userId_2.salary ){
            return  `User with ${userId_2.id} has greater salary`
        } else {
            return `Salaries are equal`
        }

    }
}