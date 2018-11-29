    $('[data-toggle="tooltip"]').tooltip({
      // container: "body",
      delay: {
        "show": 0,
        "hide": 10
      }
    });
    $('.tooltip-right').tooltip({
      placement: 'right',
      viewport: {
        selector: 'body',
        padding: 2
      }
    });