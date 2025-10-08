export function getDayName(datetime) {
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const day = new Date(datetime).getDay()
	return dayNames[day]
}
export function getMonthName(datetime) {
	const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const month = new Date(datetime).getMonth()
	return months[month]
}
export function getDay (datetime) {
 return datetime.split("-")[2]
}
export function formatTime(time) {
	return time.slice(1, 5)
}
export function convertTemp(temp, degree="C") {
  let x = Number(temp);
  if (degree == "C") {
  	return Math.round((x * 9 / 5) + 32);
  } else {
    return Math.round((x - 32) / (9 / 5));
  }
}
export function upper(string) {
	return string[0].toUpperCase() + string.slice(1, string.length)
}