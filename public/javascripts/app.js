
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var firstname   = $("#firstname").val();
        var lastname   = $("#lastname").val();
        var email      = $("#email").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var dob        = $("#dob").val();
        var country    = $("#country").val();
        var state    = $("#state").val();
        var city   = $("#city").val();
        var gender     = $('input[name="gender"]:checked').val(); 
        

        if(!firstname || !lastname || !email || !password || !cpassword || !dob || !country || !state || !city || !gender){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
        } 
        
        else{ 
            $.ajax({
                url: "/register",
                method: "POST",
                data: { first_name: firstname, last_name: lastname, email: email, password: password, cpassword: cpassword, dob: dob, country: country, state : state, city : city, gender: gender }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});