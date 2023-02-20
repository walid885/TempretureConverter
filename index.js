const celEL = document.getElementById("celsuis")
const ferEL = document.getElementById("ferenheit")

const kelEL = document.getElementById("kelvin")



function computeTemp(event){
        const currentVal = +event.target.value

        switch (event.target.name) {
            case "celsuis":
                kelEL.value = (currentVal + 273.32).toFixed(2)
                ferEL.value = (currentVal * 1.8 +32 ).toFixed(2)
                break;
            case "ferenheit":
                    celEL.value = ((currentVal-32) / 1.8).toFixed(2)
                    kelEL.value = ((currentVal -32)/1.8 + 273.32).toFixed(2)
                    break;
            case "kelvin":
                        celEL.value = (currentVal - 273.32).toFixed(2)
                        ferEL.value = ((currentVal -273.32)*1.8 + 32).toFixed(2)
                        break;
            default:
                break;
        }
}