function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}










$(document).ready(function() {
 $('.textarea').bind('copy paste cut',function(e) { 
 e.preventDefault(); //disable cut,copy,paste
 });
});









// Iterate over each select element
$('select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});










document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);










$('.fontsize').on('input',function(e) {
    $(this).parent().next(".textarea").css("font-size", $(this).val() + "px").css("line-height", $(this).val() + "px");
});

$('.fontsize').on('input',function(e) {
    $(this).parent().next(".textarea.exposit").css("font-size", $(this).val() - 20 + "px").css("line-height", $(this).val() + "px");
});

$('.uppercase').on('change',function(e) {
    $(this).toggleClass('active');
    $(this).parent().next(".textarea").toggleClass('textarea-uppercase');
});

$('.ss01').on('change',function(e) {
     $(this).toggleClass('active');
   $(this).parent().next(".textarea").toggleClass('textarea-ss01');
});

$('.ss02').on('change',function(e) {
     $(this).toggleClass('active');
   $(this).parent().next(".textarea").toggleClass('textarea-ss02');
});

$('.ss03').on('change',function(e) {
    $(this).toggleClass('active');
    $(this).parent().next(".textarea").toggleClass('textarea-ss03');
});

$('.ss04').on('change',function(e) {
     $(this).toggleClass('active');
   $(this).parent().next(".textarea").toggleClass('textarea-ss04');
});

$('.ss05').on('change',function(e) {
    $(this).toggleClass('active');
    $(this).parent().next(".textarea").toggleClass('textarea-ss05');
});

$('.ss06').on('change',function(e) {
     $(this).toggleClass('active');
   $(this).parent().next(".textarea").toggleClass('textarea-ss06');
});

$('.textarea').on('keydown',function(e) {
     $('.textarea').removeClass('focus');
     $(this).toggleClass('focus');
});




$('.textarea').on('keydown paste', function(event) { //Prevent on paste as well

  //You can add delete key event code as well over here for windows users.
  if($(this).text().length === 70 && event.keyCode != 8) { 
    event.preventDefault();
  }
});





$('.footerlinks li.newsletterform').hide();

$('.newsletter').click(function() {
	$('.footerlinks li').hide();
	$('.footerlinks li.newsletterform').show();
});





$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop > this.previousTop && currentTop > 25) {
        $(".nav").css("top", "-150px");
    } else {
        $(".nav").css("top", "-100px");
    }
    this.previousTop = currentTop;
});




setInterval(function(){blink()}, 1500);
    function blink() {
        $(".updated").fadeTo(450, 0).fadeTo(500, 1.0);
    };
    
    





$(document).ready(function(){


$('.textarea').each(function () {
    var $this = $(this);

   $this.html($this.text().replace(/[^AÁĂǍÂÄȦẠÀĀĄÅÃÆǼǢBCĆČÇĈĊDÐĎĐEÉĔĚÊËĖẸÈĒĘFGĞĜĢĠHĦĤIĲÍĬǏÎÏİỊÌĪĮĨJĴKĶLĹĽĻĿŁMNŃŇŅŊÑOÓŎǑÔÖỌÒŐŌØǾÕŒPÞQRŔŘŖSŚŠŞŜȘTŦŤŢȚUÚŬǓÛÜỤÙŰŪŲŮŨVWẂŴẄẀXYÝŶŸỲȲZŹŽŻaáăǎâäȧạàāąåãæǽǣbcćčçĉċdðďđeéĕěêëėẹèēęfgğĝģġhħĥiıíĭǐîïìĳīįĩjȷĵkķlĺľļłmnńňņŋñoóŏǒôöọòőōǫøǿõœpþqrŕřŗsśšşŝșßtŧťţțuúŭǔûüụùűūųůũvwẃŵẅẁxyýŷÿỳȳzźžżμ0123456789❶❷❸❹❺❻❼❽❾❿①②③④⑤⑥⑦⑧⑨⑩₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁄½⅓⅔¼¾⅛⅜⅝⅞*\·•:,…!¡#.?¿"';\/\_\{\}\[\]\(\)\—\–\-\­«»‹›„“”‘’‚ ¢¤$€ƒ£¥+−×÷=≠><≥≤±≈~¬∅∞∫∏∑√µ∂%‰↑↗→↘↓↙←↖↔↕◊☺✱@&¶§©®™°|¦ℓ†‡^]/g, ''));
    });
});





