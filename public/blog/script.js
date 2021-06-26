var text;

jQuery.get('blog.txt', function(data) {
    text = marked(data);
    $(".content").html($(".content").html() + text);
});


  $("#blogBlock").scroll(function() {
    var allHeight = $(".content").height() - $("#blogBlock").height();
    var pageWidth = $("#blogBlock").outerWidth() + 1;
    var fromTop = $("#blogBlock").scrollTop();
    var percent = fromTop / allHeight;
    pageWidth = pageWidth * percent;
    $(".progress").css("width", pageWidth + "px");
});
