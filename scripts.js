
$(document).ready(



)

var headerText = $('#header-text')
var button = $('#change-text-button')
var appendSection = $('#append-section')





button.on('click' ,function() {
    headerText.toggle(function() {
        headerText.text('Toggle one')
    }, function() {
        headerText.text('Toggle two')
    }
    )
})

// appendSection.prepend("<p>This was appended with jQuery</p>")
// appendSection.append(button)

// appendSection.before("<p>This was appended with jQuery</p>")
// appendSection.after(button)


for (var i = 1; i <= 10; i++) {
    appendSection.append("<p class='list'>" + i + ": lorem ipsum</p>")
}

var listClass = $('.list')

console.log(listClass)

listClass.each(function(i) {
    $(this).css({
        "color": "rgb(" + i*35 + ",150,150)"
    })
})

var textInput = $('#text-input')
var sliderInput = $('#slider-input')

var inputTextReadout = $('#input-text-readout')
var inputSliderReadout = $('#input-slider-readout')


textInput.on('change input', function() {
    inputTextReadout.text( $(this).val() )
})

sliderInput.on('change input', function() {
    inputSliderReadout.text( $(this).val() )
})

