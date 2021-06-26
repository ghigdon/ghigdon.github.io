$(document).ready(() => {
    $('body').prepend('<div id="runningCar"></div>')
    $('#runningCar').append('<img class="exterior-img car" src="assets\\images\\chevy_volt.png" height="50" width="100">')

    amountOfPix = 1
    goingUp = true
    changed = false
    setInterval(() => {
        if (amountOfPix > 1050) {
            goingUp = false
            changed = true
        }
        if (amountOfPix < 4) {
            goingUp = true
            changed = true
        }
            
        if (goingUp) amountOfPix += 4
        else amountOfPix -= 4

        if (changed && goingUp) {
            $('#runningCar').empty()
            $('#runningCar').append('<img class="exterior-img car" src="assets\\images\\chevy_volt.png" height="50" width="100">')
        } else if (changed && !goingUp) {
            $('#runningCar').empty()
            $('#runningCar').append('<img class="exterior-img car" src="assets\\images\\chevy_volt_reverse.png" height="50" width="100">')
        }

        $('.car').css('padding-left', amountOfPix + 'px')
        
        changed = false
    }, 30)
})
