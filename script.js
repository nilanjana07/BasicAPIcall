const button=document.getElementById('searchbutton');
const input=document.getElementById('city-input');
const cityname=document.getElementById('city-name');
const citytime=document.getElementById('city-time');
const citytemp=document.getElementById('city-temp');
async function getData(cityname)
{
 const promise=await fetch(
    `http://api.weatherapi.com/v1/current.json?key=45eb70d1b5dd4765b8b222730241506&q=${cityname}&aqi=no`
 );
 return await promise.json();
}
button.addEventListener("click",async () =>{
    const val=input.value;
    const result=await getData(val);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
    citytime.innerText=`${result.location.localtime}`;
    citytemp.innerText=`${result.current.feelslike_c}`;
});
//http://api.weatherapi.com/v1/current.json?key=45eb70d1b5dd4765b8b222730241506&q=London&aqi=no