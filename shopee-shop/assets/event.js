$(document).ready(function() {

    $(".register_btn").click(function () {
      $("#modal").show();
      $(".auth-form__register").show();
      $(".auth-form__sign-up").hide();
    })

    $(".signup__btn").click(function () {
        $("#modal").show();
        $(".auth-form__register").hide();
        $(".auth-form__sign-up").show();
      })

    $(".btn-back").click(function(){
        $("#modal").hide();
        $(".auth-form__register").hide();
        $(".auth-form__sign-up").hide();
    })

    $(".auth-form__switch-to-sign").click(function(){
        $(".auth-form__register").hide();
        $(".auth-form__sign-up").show();
    })

    $(".auth-form__switch-to-register").click(function(){
        $(".auth-form__sign-up").hide();
        $(".auth-form__register").show();
    })
    
  });

