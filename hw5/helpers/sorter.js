export default function sortBySalary(arrayOfDevs) {
   arrayOfDevs.sort((a, b) => {
      if(a.salary === b.salary){
          return a.id - b.id
        } else {
            return a.salary - b.salary
        }
        })
    return arrayOfDevs
}