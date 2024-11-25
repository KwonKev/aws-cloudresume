const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://4rmu6rfxpaf2gc7t2klzxu7cc40vqhdd.lambda-url.us-east-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();