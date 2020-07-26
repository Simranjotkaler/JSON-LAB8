let locationBtn = document.getElementById("mylocation");
	let header = document.querySelector("header");

	let para = document.getElementById("location");
	let button = document.querySelector("button");
	let mapLink = document.getElementById("map-link");

	mapLink.href = "";
	mapLink.textContent = "";

	function getLocation() {
		/*returns a Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.
        navigator.geolocation.getCurrentPosition(showPosition);
        /*The Geolocation.getCurrentPosition() method is used to
        get the current position of the device.*/
		//success callback
		if (!navigator.geolocation) {
			para.textContent = "Geolocation is not supported by your browser";
		} else {
			para.textContent = "Locating…";
			/* success
			A callback function that takes a GeolocationPosition object as its sole input parameter.
			error Optional
			An optional callback function that takes a GeolocationPositionError object as its sole input parameter.
			*/
			navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
		}
	}

	function showPosition(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		para.textContent = "";
		mapLink.textContent = "Check out the map!";
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = "View The Map!";
	}

	function errorMsg() {
		para.textContent = "Sorry, something went wrong!";
	}

	button.onclick = getLocation;
