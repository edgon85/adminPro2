$(document).ready(function() {
  // -------- Contact Form Handler --------

  var contactForm = $(".contact-form");
  var contactFormMethod = contactForm.attr("method");
  var contactFormEndpoint = contactForm.attr("action");

  function displaySubmitting(submitBtn, defaultText, doSubmit) {
    if (doSubmit) {
      submitBtn.addClass("disabled");
      submitBtn.html('<i class="fas fa-spinner"></i> Sending...');
    } else {
      submitBtn.removeClass("disabled");
      submitBtn.html(defaultText);
    }
  }

  contactForm.submit(function(event) {
    event.preventDefault();

    var contactFormSubmitBtn = contactForm.find('[type="submit"]');
    var contactFormSubmitBtnTxt = contactFormSubmitBtn.text();

    var contactFormData = contactForm.serialize();
    var thisForm = $(this);
    displaySubmitting(contactFormSubmitBtn, "", true);

    $.ajax({
      method: contactFormMethod,
      url: contactFormEndpoint,
      data: contactFormData,
      success: function(data) {
        contactForm[0].reset();
        $.alert({
          title: "Success!",
          content: data.message,
          theme: "modern"
        });
        setTimeout(function() {
          displaySubmitting(
            contactFormSubmitBtn,
            contactFormSubmitBtnTxt,
            false
          );
        }, 500);
      },
      error: function(error) {
        console.log(error.responseJSON);
        var jsonData = error.responseJSON;
        var msg = "";

        $.each(jsonData, function(key, value) {
          msg += key + ": " + value[0].message + "<br/>";
        });
        $.alert({
          title: "Oops!",
          content: msg,
          theme: "modern"
        });

        setTimeout(function() {
          displaySubmitting(
            contactFormSubmitBtn,
            contactFormSubmitBtnTxt,
            false
          );
        }, 500);
      }
    });
  });

  // -------- End Contact Form Handler --------

  // -------- Auto Search --------------

  var searchForm = $(".search-form");
  var searchInput = searchForm.find('[name="q"]');
  var typingTimer;
  var typingInterval = 500;
  var searchBtn = searchForm.find('[type="submit"]');

  searchInput.keyup(function(event) {
    // key release
    clearTimeout(typingTimer);
    typingTimer = setTimeout(performSearch, typingInterval);
  });

  searchInput.keydown(function(event) {
    //key pressed
    clearTimeout(typingTimer);
  });

  function displaySearching() {
    searchBtn.addClass("disabled");
    searchBtn.html("<i class='fas fa-spinner'></i> Searching...");
  }

  function performSearch() {
    displaySearching();
    var query = searchInput.val();
    setTimeout(function() {
      window.location.href = "/search/?q=" + query;
    }, 1000);
  }

  // -------- Fin Auto Search --------------

  // -------- Cart + Add Products --------------
  var productForm = $(".form-product-ajax");
  productForm.submit(function(evento) {
    event.preventDefault();
    // console.log('Form is not sending')
    var thisForm = $(this);
    // var actionEndpoint = thisForm.attr('action'); // API endpoint
    var actionEndpoint = thisForm.attr("data-endpoint");
    var httpMethod = thisForm.attr("method");
    var formData = thisForm.serialize();

    $.ajax({
      url: actionEndpoint,
      method: httpMethod,
      data: formData,
      success: function(data) {
        var submitSpan = thisForm.find(".submit-span");
        if (data.added) {
          submitSpan.html(
            // 'In cart <button type="submit" class="btn btn-link">Remove?</button>'
            // '<button type="submit" class="btn boton">X</button>'
            '<button type="submit" class="btn boton" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Producto" data-toast-message="Eliminado del carrito!">X</button>' 
          );
        } else {
          submitSpan.html(
            // '<button type="submit" class="btn btn-success">Add to cart</button>'
            // '<button type="submit" class="btn boton"><i class="fa fa-shopping-basket"></i></button>'
            '<button type="submit" class="btn boton" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Producto" data-toast-message="agregado al carrito!"><i class="fa fa-shopping-basket"></i>'
          );
        }

        var navbarCount = $(".navbar-cart-count");
        navbarCount.text(data.cartItemCount);
        if (window.location.href.indexOf("cart") != -1) {
          refreshChart();
        }
      },
      error: function(errorData) {
        //  console.log('error')
        //  console.log(errorData)
        $.alert({
          title: "Oops!",
          content: "An error occurred",
          theme: "modern"
        });
      }
    });
  });

  function refreshChart() {
    console.log("in current cart");
    var cartTable = $(".cart-table");
    var cartBody = cartTable.find(".cart-body");
    // cartBody.html('<h1>Changed</h1>')
    var productRows = cartBody.find(".cart-product");
    var currentUrl = window.location.href;

    var refreshCartUrl = "/api/cart/";
    var refreshCartMethod = "GET";
    var data = {};

    $.ajax({
      url: refreshCartUrl,
      method: refreshCartMethod,
      data: data,
      success: function(data) {
        var hiddenCartItemRemoveForm = $(".cart-item-remove-form");

        if (data.products.length > 0) {
          productRows.html("");
          i = data.products.length;
          $.each(data.products, function(index, value) {
            console.log(value);
            var newCartItemRemove = hiddenCartItemRemoveForm.clone();
            newCartItemRemove.css("display", "block");
            // newCartItemRemove.removeClass('hidden-class')
            newCartItemRemove.find(".cart-item-product-id").val(value.id);
            cartBody.prepend(
              '<tr><td scope="row">' +
                i +
                '</td><td><a href="' +
                value.url +
                '"><h5>' +
                value.name +
                "</h5></a>" +
                newCartItemRemove.html() +
                "</td><td>" +
                value.price +
                "</td></tr>"
            );

            i--;
          });

          cartBody.find(".cart-subtotal").text(data.subtotal);
          cartBody.find(".cart-total").text(data.total);
        } else {
          window.location.href = currentUrl;
        }
      },
      error: function(errorData) {
        //  console.log('error')
        //  console.log(errorData)
        $.alert({
          title: "Oops!",
          content: "An error occurred",
          theme: "modern"
        });
      }
    });
    // -------- Fin Cart + Add Products --------------
  }
});
