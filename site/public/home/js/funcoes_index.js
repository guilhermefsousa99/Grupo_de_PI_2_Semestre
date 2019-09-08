logged_not_logged();

function logged_not_logged() {
	if (sessionStorage.usuario != undefined) {
		navbarlegal.innerHTML = `
			<li class="active"><a href="#main-header">Home</a></li>
	        <li class=""><a href="#feature">About</a></li>
	        <li class=""><a href="#service">Services</a></li>
	        <li class=""><a href="#portfolio">Portfolio</a></li>
	        <li class=""><a href="#testimonial">Testimonial</a></li>
	        <li class=""><a href="#blog">Blog</a></li>
	        <li class=""><a href="#contact">Contact Us</a></li>
	        <li class="dropdown">
	            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
	                <span class="">${sessionStorage.usuario}</span>
	                <span class="caret"></span>
	            </a>
	            <ul class="dropdown-menu extended logout">
	              <div class="log-arrow-up"></div>
	              <li class="eborder-top">
	                <a href="./dashboard/index.html"><i class="icon_profile"></i> Dashboard </a>
	              </li>
	              <li>
	                <a href="#" onclick="logout()"><i class="icon_key_alt"></i> Logoff</a>
	              </li>
	            </ul>
          </li>
		`
	}
}

function logout() {
	sessionStorage.clear();
	window.location.href = "./index.html"
}