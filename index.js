let get_btn = document.getElementById("generate_btn");
let get_activities_responseElement = document.getElementById("activities_response");

async function onButtonClick() {
    get_btn.addEventListener("click", async e => {

        let activitiesApi = await fetch('https://www.boredapi.com/api/activity/', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let response = await activitiesApi.json()

        get_activities_responseElement.innerHTML = response.activity;

    })
}
onButtonClick();

