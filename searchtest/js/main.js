var options = {
  valueNames: [ 'tts', 'unicode', 'files', 'tags', 'author', 'sentiment'],
  item: '<tr></td><td class="files"><td class="tts"></td><td class="tags"></td><td class="author"></td></tr>'
};

var emojiList = new List('emojis', options, emoji);

$('.tags').each(function() {
    var text = $(this).html();
    $(this).html(text.replace(/,/g, '#')); 
    text = $(this).html();
    $(this).html(text.replace(/^/,'#'));
});

$('.author').each(function() {
    var text = $(this).html();
    $(this).html(text.replace(/,/g, ', ')); 
});


// var newtags = $(".tags").text().replace(",", "#")
// console.log(newtags);