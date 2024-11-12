$(document).ready(function () {
  $("#opciones").select2({
    minimumResultsForSearch: Infinity,
    templateResult: formatState,
    templateSelection: formatState,
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="' +
        $(state.element).data("image") +
        '" style="width:20px; height:20px; margin-right:8px; aling-items:center; margin:2px auto" />' +
        state.text +
        "</span>"
    );
    return $state;
  }
});

$(document).ready(function () {
  new Swiper(".swiper-container", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /* autoplay: {
      delay: 3000, // Cambia cada 3 segundos
      disableOnInteraction: true,
    }, */
    slidesPerView: 1, // Número de slides visibles
    spaceBetween: 10, // Espacio entre slides en píxeles
  });
});
