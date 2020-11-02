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
};

export const getMonth = (monthStr) => {
  switch(monthStr){
    case "01": return "Jan";
    case "02": return "Feb";
    case "03": return "Mar";
    case "04": return "Apr";
    case "05": return "May";
    case "06": return "Jun";
    case "07": return "Jul";
    case "08": return "Aug";
    case "09": return "Sep";
    case "10": return "Oct";
    case "11": return "Nov";
    case "12": return "Dec";
    default: return "";
  }
}

export const getDateObjectFromString = (dateStr) => {
  if (dateStr !== null) {
    var year = dateStr.slice(0, 4);
    var month = getMonth(dateStr.slice(5, 7));
    var date = dateStr.slice(8, 10);
    return String(" " + date +" " + month + ", " + year + " ");
  }
  else{
    return null;
  }
};
