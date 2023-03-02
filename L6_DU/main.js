//Ukol1

const parseDate = (datum) => {
	return {
		day: Number(datum.slice(0, 2)),
		month: Number(datum.slice(3, 5)),
		year: Number(datum.slice(6)),
	}
}



//Ukol2

function formatDate (date) {
const {day, month, year} = date;

return day.toString().padStart(2, '0') + '/' + month.toString().padStart(2, '0') + '/' + year.toString().padStart(4, '0');}

formatDate({ day: 6, month: 4, year: 2021 })


//Ukol3

const round = (cislo) => {
const celaCast = Math.trunc(cislo)
const necelaCast = cislo - celaCast
	if (Math.abs(necelaCast) === 0.5) {
		if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2 * necelaCast
		}
	}
	return Math.round(cislo)
}
round (3.7)