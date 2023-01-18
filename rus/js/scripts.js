function switchLang() {
	let selectedLang = document.getElementById("lang").selectedIndex,
		loc = location.href,
		pattern = /\/rus\/?/,
		domainLastIndex = location.href.indexOf(location.host)+location.host.length,
		isRus = loc.match(pattern)
	
	console.log(selectedLang)
	if (selectedLang === 1 && isRus) {
		let firstLoc = location.href.slice(0, domainLastIndex)
		let secondLoc = location.href.slice(domainLastIndex + 4)
		location.href = firstLoc + secondLoc
	} else if (selectedLang === 2 && !isRus) {
		let firstLoc = loc.slice(0, domainLastIndex)
		let secondLoc = loc.slice(domainLastIndex)
		location.href = firstLoc + "/rus" + secondLoc
	} else {
		return false
	}
}