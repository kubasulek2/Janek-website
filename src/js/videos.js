$(()=>{
  const $main = $('.main-container');
  const $videos = $('.video');
  const $body = $('body');

  $videos.on('click', function (e) {
    e.stopPropagation();

    const videoRatio = parseFloat( $(this).attr("data-ratio") );
    const vidBackground = $('<div class="vid-background"></div>');
    const vidContainer = $('<div class="vid-container"></div>');


    const iframe = $('<iframe></iframe>',{ frameborder:"0", allowfullscreen:'', webkitallowfullscreen:'', mozallowfullscreen:''})
      .attr('src', $(this)
        .data("src"));

    vidContainer.append(iframe);
    vidBackground.append(vidContainer);

    $main.append(vidBackground);
    $(this).attr("class").includes("odd") ? vidContainer.addClass("odd"): vidContainer.addClass("even");

    switch (true) {
      case videoRatio < 45:
        vidContainer.addClass("x-large");
        break;
      case videoRatio < 70:
        vidContainer.addClass("large");
        break;
      case videoRatio <= 120:
        vidContainer.addClass("medium");
        break;
      case videoRatio > 120:
        vidContainer.addClass("small");
        break;
    }

    const videoWidth = vidContainer.css("width");
    const videoHeight = parseFloat(videoWidth) * videoRatio/100;
    vidContainer.css("height", videoHeight);
    iframe.css("height", videoHeight);

    vidBackground.one('click', function (event) {
      event.stopImmediatePropagation();
      $(this).remove();
    })
  });



});
