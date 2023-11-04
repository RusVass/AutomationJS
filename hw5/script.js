
/==================Task_1===================/

import { Dev } from "./modules/dev.js";
import { PM } from "./modules/PM.js";
import { Employee } from "./modules/employee.js";
import sortBySalary from "./helpers/sorter.js";

const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);
console.log(dev.getJobType()); // виведе I am a Dev
console.log(pm.getJobType()); // виведе I am a PM
console.log(Employee.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
console.log(Employee.compareSalary(dev, dev2)); // виведе salaries are equal

/==================Task_2===================/

const newDev = new Dev(1, 3000);

Object.defineProperty(newDev, "id", {
        writable: false,
        enumerable: true,
        configurable: false,
         });


// newDev.id = 15; // видасть помилку TypeError: Cannot assign to read only property 'id' of object '#<Dev>'
// delete newDev.id; // видасть помилку TypeError: Cannot delete property 'id' of #<Dev>
for (let key in newDev) {
    console.log(newDev[key]); // виведе почергово 1 та 3000
}

/==================Task_3===================/

const user1 = new Dev(1, 2000);
const user2 = new Dev(2, 1500);
const user3 = new Dev(3, 1000);
const user4 = new Dev(4, 2000);
const user5 = new Dev(6, 2500);
const user6 = new Dev(5, 2500);
const user7 = new PM(7, 3500);
const user8 = new PM(8, 1000);
const users = Dev.returnArrayOfDevs(
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8
);
console.log(sortBySalary(users));

