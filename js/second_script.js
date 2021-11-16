$(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
      $('li').css('background-color', 'green');
    /*  
      The click below will open a dialog twice if the user clicks the hello btn 2ice 
         $('li').click(() => {
           alert("Hi!");
         });
    */
    //   We have to make an onclick for bot the user and webpage response
      $("ul#user").children("li").first().click(() => {
        //This will remove this node from the childrens list of the parent
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(() => {
        //This will remove this node from the childrens list of the parent
        $(this).remove();
      });
    });

    $("button#goodbye").click(function() {
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      $('li').css('background-color', 'green');
      $("ul#user").children("li").first().click(() => {
        //This will remove this node from the childrens list of the parent
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(() => {
        //This will remove this node from the childrens list of the parent
        $(this).remove();
      });
    });

    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
      $('li').css('background-color', 'green');
      $("ul#user").children("li").first().click(() => {
        //This will remove this node from the childrens list of the parent
        $(this).remove();
      });
      $("ul#webpage").children("li").first().click(() => {
        $(this).remove();
      });
    });

    // The line below won't work because it's executed once the doc is ready 
    //  and when the page finishes loading we still don't have any li elements, so the style won't be added
    $('li').css('background-color', 'green');
});