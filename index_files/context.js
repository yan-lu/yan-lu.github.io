//
// finally display the last modified date
// as DD-MMM-YY
//
function lastupdate(lmd)
{
  var days = new Array(8); 
  days[1] = "Sunday"; 
  days[2] = "Monday"; 
  days[3] = "Tuesday"; 
  days[4] = "Wednesday"; 
  days[5] = "Thursday"; 
  days[6] = "Friday"; 
  days[7] = "Saturday"; 
  var months = new Array(13); 
  months[1] = "January"; 
  months[2] = "February"; 
  months[3] = "March"; 
  months[4] = "April"; 
  months[5] = "May"; 
  months[6] = "June"; 
  months[7] = "July"; 
  months[8] = "August"; 
  months[9] = "September"; 
  months[10] = "October"; 
  months[11] = "November"; 
  months[12] = "December"; 
  var dateObj = new Date(lmd)
  var wday = days[dateObj.getDay() + 1]
  var lmonth = months[dateObj.getMonth() + 1]
  var date = dateObj.getDate()
  var fyear = dateObj.getYear() 
  if (fyear < 2000) 
    fyear = fyear + 1900
  document.write("Last Updated:" + lmonth + " " + date + ", " + fyear)
}
