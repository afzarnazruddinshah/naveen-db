//Get Today's Date
export const getToday = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd; //If Date is between 1-9 - Prefix '0' to it
    }
    if (mm < 10) {
        mm = "0" + mm; //If Month is between 1-9 - Prefix '0' to it
    }
    today = yyyy + "-" + mm + "-" + dd;
    return today;
}