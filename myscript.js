var choice = window.prompt('Pick a color, black, white or gold?')

var futherChoice = function () {
  var numberChoice = window.prompt('How many would you like to buy?')
  numberChoice = parseInt(numberChoice) && 1
  if (numberChoice >= 1) {
    window.alert('Great! I will order for you.')
  } else {
    window.alert('You seem not like it, maybe Samsung?')
  }
}

// clicks cancel
if (choice === null || choice === undefined) {
  var random = Math.random()

  if (random > 0.8) {
    window.alert('You can\'t decide? There are only three options!')
  } else if (random > 0.6) {
    window.alert('Ok then...')
  } else if (random > 0.4) {
    window.alert('Wow, that was rude. I thought I just start the conversation.')
  } else {
    var anotherChoice = window.confirm('Okok, maybe brighter colors?')

    if (anotherChoice) {
      window.alert('An iPhone XR will fit you.')
    } else {
      window.alert('Man, you are picky.')
    }
  }
  // types an answer
} else {
  choice = choice.trim().toLowerCase()

  if (choice === 'black' || choice === 'white' || choice === 'gold') {
    var screenChoice = window.confirm('Do you like big screens?')
    if (screenChoice) {
      window.alert('I would recommend a ' + choice + ' iPhone XS Max.')
      futherChoice()
    } else {
      window.alert('Try the ' + choice + ' iPhone XS.')
      futherChoice()
    }
  } else {
    window.alert('Sorry, only three options -- black, white or gold.')
  }
}
