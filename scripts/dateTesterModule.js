// myModule.js
export function dateTester(day, month, year) {
    month -= 1;
    const selectedDate = new Date(year, month, day);
    const currentDate = new Date();
    if(isNaN(selectedDate)){
        console.log("Date is not a number");
        return false;
    } else if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month || selectedDate.getDate() !== day){
        console.log("Date does not exist");
        return false;
    } else if (selectedDate > currentDate){
        console.log("Date hasn't happened yet!");
        return false;
    } else {
        console.log("Date is valid.");
        return true;
    }
};
