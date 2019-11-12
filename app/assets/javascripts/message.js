$(function(){

  function buildMessage(message){
    var image =  message.image ? `<img class="lower-message__image" src= ${message.image}`: '';
    var html = `<div class="message"  data-id=${message.id } >
                 <div class="upper-message">
                  <div class="upper-message__user-name">
                  ${message.user_name}
                </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                   <div class="lower-message">
                   <p class="lower-message__content">
                     ${message.content}
                   </p>
                    ${image}
                  </div>
                  `
    return html;
  }

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.contents__text').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.contents__text').animate({scrollTop: $('.contents__text')[0].scrollHeight}, 0);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
      $('.form__submit').prop('disabled', false);
    })
  })


  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data('id');
        $.ajax({
          url: 'api/messages',
          type: 'GET',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          console.log(messages)
            var insertHTML = '';
            messages.forEach(function (message) {
              insertHTML = buildMessage(message); 
              $('.contents__text').append(insertHTML);
            })
              $('.contents__text').animate({scrollTop: $('.contents__text')[0].scrollHeight}, 0);
        })
        .fail(function() {
          console.log(last_message_id);
        });
      }
    };
  setInterval(reloadMessages, 5000);

});

