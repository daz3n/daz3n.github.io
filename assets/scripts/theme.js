
function setTheme(name)
{
	document.getElementById("theme").setAttribute("href","/assets/themes/" + name + ".css");	
	document.cookie = "theme=" + name + "; path =/;";
}

function getCookie(name)
{
	 // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");    
	
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return			
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

function getTheme()
{
	var t = getCookie('theme'); 
	if (t == null) return 'light'
	return t;
}

function hackyToggleTheme()
{
	var curr = getTheme();
	
	if (curr == 'dark') setTheme('light');
	else setTheme('dark');
}

function reloadTheme()
{
	var perfEntries = performance.getEntriesByType("navigation");

	if (perfEntries[0].type === "back_forward") {
		/*location.reload(true); */
		
		setTheme(getTheme());
	}
}
