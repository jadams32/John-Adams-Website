console.log('It Works!')

$(document).ready(function(){
  $('.button primary').click(function(event){

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(name.length <= 2){
      event.preventDefault()
      statusElm.append('<div>Name is not valid</div>')
    }

    if(email.length < 5 && !email.includes('@') && !email.includes('.')){
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(message.length <= 15){
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
  })
})
