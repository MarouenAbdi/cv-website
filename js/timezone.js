function updatePortoTime() {
	const portoTimeElement = document.getElementById('my-timezone');
	const now = new Date();

	// AM/PM format
	const amPmOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true, // AM/PM format
		timeZone: 'Europe/Lisbon', //Europe/Lisbon timezone
	};

	// 24-hour format
	const militaryTimeOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false, // 24-hour format
		timeZone: 'Europe/Lisbon',
	};

	const amPmTime = new Intl.DateTimeFormat('en-US', amPmOptions).format(now);

	const militaryTime = new Intl.DateTimeFormat(
		'en-GB',
		militaryTimeOptions
	).format(now);

	const timeZoneOffset = -now.getTimezoneOffset() / 60;

	const timeZoneString = `UTC${
		timeZoneOffset >= 0 ? '+' : ''
	}${timeZoneOffset}`;

	portoTimeElement.textContent = `${amPmTime} - ${militaryTime} (${timeZoneString})`;
}

updatePortoTime();
setInterval(updatePortoTime, 60000);
