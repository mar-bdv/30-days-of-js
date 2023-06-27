const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // check if they had the shift key down
    // AND check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        //go ahead and do what we please
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween; //if it's true it will be false. If it's false it will be true. Because this is a checkbox 
            }
            
            if(inBetween) {
                checkbox.checked = true
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck))