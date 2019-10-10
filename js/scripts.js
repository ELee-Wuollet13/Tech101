// CODE IS DOES NOT FUNCTION - This code was created only to test out the modal.

// $(document).ready(function() {
  // $("#blanks form").submit(function(event) {
    //   var formIds = ["#name", "#skill", "#career", "#career-change", "#words", "#stress-level", "#path-walk"];
    //
    //   formIds.forEach(function() {
      //     var name = $("#name").val();
      //     var skill = parseInt($("#skill").val());
      //     var career = parseInt($("#career").val());
      //     console.log(career)
      //     var careerChange = parseInt($("#career-change").val());
      //     var words = parseInt($("#words").val());
      //     var stressLevel = parseInt($("#stress-level").val());
      //     var pathWalk = parseInt($("#path-walk").val());
      //
      //     var results = skill + career + careerChange + stressLevel + pathWalk ;
      //     if (results >= 0 && results <= 12) {
        //         $('#result-product').show();
        //         $('#result-product').hide();
        //       } else if (results >= 12 && results <= 25) {
          //         $('#result-engineer').show();
          //         $('#result-product, #result-security').hide();
          //       } else if (results >= 26) {
            //         $('#result-security').show();
            //         $('z').hide();
            //       } else {
              //         $('#result-security').show();
              //         $('#result-engineer, #result-product').hide();
              //       }
              //
              //       $(".text").text(name);
              //     });
              //     event.preventDefault();
              //   });
              // });





              $(document).ready(function(){
                // insert form here
                $("#blanks form").submit(function(event) {
                  event.preventDefault();
                  var  name = $("#name").val();
                  var  education = parseInt($("#education").val());
                  console.log(education)
                  var  skill = parseInt($("#skill").val());
                  console.log(skill)
                  var  career = parseInt($("#career").val());
                  console.log(career)
                  var  careerChange = parseInt($("#careerChange").val());
                  console.log(careerChange)
                  // var  words = parseInt($("#words").val());
                  // console.log(words)
                  var  stress = parseInt($("#stressLevel").val());
                  console.log(stress)

                  var resultsInt = skill + education + career + careerChange +  stress ;
                  // var resultsInt = parseInt(results).val();
                  // console.log(resultsInt)

                  if (resultsInt >= 0 && resultsInt <= 12){
                    $("#result-engineer").show();
                    $("#result-security, #result-product").hide();

                  } else if (resultsInt >= 13 && resultsInt <= 36){
                    $("#result-security").show();
                    $("#result-product, #result-engineer").hide();

                  } else {
                    $("#result-product").show();
                    $("#result-security, #result-engineer").hide();

                  }


                  $(".text").text(name);

                });
              });
