const AdviseId = document.getElementById("adviseID");
const advise = document.getElementById("advise");
const btn = document.getElementById("btn-sub");
const URL = "https://api.adviceslip.com/advice";


function getAdvise(){
    fetch(URL).then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error("Error fetching data",error));
    


}

function displayData(adiviseData){
    AdviseId.textContent = adiviseData.slip.id;
    console.log(adiviseData)
    advise.textContent = adiviseData.slip.advice;
}




getAdvise();
btn.addEventListener("click", getAdvise);

