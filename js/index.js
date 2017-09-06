function openVoter()
{
var base = "http://ec2-13-228-185-241.ap-southeast-1.compute.amazonaws.com:"
	var dataString = '{"nitesh@gmail.com":"20001","nitesh2@gmail.com":"20002"}';
	var data = JSON.parse(dataString);
	console.log(data);
	var email = document.getElementById('email').value;
	if(email.length <5)
	{
		alert("Enter A Valid Email")
	}
	else{
		console.log(data[email]);
		window.open(base+data[email]+"/web/iou/", '_blank');
	}
 
}
function openOrganiser()
{
	var base = "http://ec2-13-228-185-241.ap-southeast-1.compute.amazonaws.com:"
	var dataString = '{"nitesh@gmail.com":"20001","nitesh2@gmail.com":"20002"}';
	var data = JSON.parse(dataString);
	console.log(data);
	var email = document.getElementById('email').value;
	if(email.length <5)
	{
		alert("Enter A Valid Email")
	}
	else{
		console.log(data[email]);
		window.open(base+data[email]+"/web/iou/org.html", '_blank');
	}
}
/*
xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   // Typical action to be performed when the document is ready:
		   console.log(xhttp.responseText);
		}
	};
	xhttp.open("GET", "data.json", true);
	xhttp.send();
	
	console.log(datajson);
	*/