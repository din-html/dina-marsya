<script>
alert("Selamat Datang");
function mula() {
    alert ("Boleh start isi borang. Tunggu apa lagi");
	}
function hantaq (){
    var nama = document.getElementById("Name").value;
	var fon = document.getElementById("Phone").value;
	var email = document.getElementById("Email").value;
	var comp = document.getElementById("complain").value;
	
	alert ("Terima kasih " + nama +" kami akan hubungi anda di " + fon);
	
	document.getElementById("result").innerHTML = "Terima kasih " + nama + 
	"kami akan hubungi anda di" + fon + "atau" + email;
	}
function darkmode(){
   document.getElementById("first-page").style.color="red";
   document.getElementById("first-page").style.backgroundColor="darkblue";
}

function lightmode(){
   document.getElementById("first-page").style.color="black";
   document.getElementById("first-page").style.backgroundColor="yellow";
}
      
function LargeText(){
   document.getElementById("first-page").style.fontSize="200%";}
   
function SmallText(){
   document.getElementById("first-page").style.fontSize="50%";}
   
function borang(){
   document.getElementById("form").style.backgroundColor="lightgreen";}
   
function welc(){
   document.getElementById("welcome").style.backgroundColor="pink";}

</script>
   