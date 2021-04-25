//funkcja sprawdzajaca poprawnosc formuly:
function checkForm()
{
    //dane zostaly wpisane poprawnie:
    var error = false;
    
    //dane:
    var contactName = document.getElementById("contact_first_name");
    var contactSur = document.getElementById("contact_last_name");
    var contactEmail = document.getElementById("contact_email");
    var contactInfo = document.getElementById("contact_info");

    //dane - first name:
    if (contactName.value == "")
    {
        document.getElementById("first_name").className = "form-group has-error";
        document.getElementById("error_first_name").className = "alert alert-danger";
        error = true;
    }
    else
    {
        document.getElementById("first_name").className = "form-group has-success";
    }

    //dane - last name:
    if (contactSur.value == "")
    {
        document.getElementById("last_name").className = "form-group has-error";
        document.getElementById("error_last_name").className = "alert alert-danger"; 
        error = true;
    }
    else
    {
        document.getElementById("last_name").className = "form-group has-success";
    }

    //dane - email:
    if(contactEmail.value == "")
    {
        document.getElementById("email").className = "form-group has-error";
        document.getElementById("error_email").className = "alert alert-danger"; 
        error = true;
    } 
    else
    {
        var email = contactEmail.value;

        //warunek dostepnosci znakow:
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

        if(regex.test(email) == false)
        {
            document.getElementById("email").className = "form-group has-error";
            document.getElementById("error_email").innerHTML = "Wrong format!";
            document.getElementById("error_email").className = "alert alert-danger"; 
            error = true;
        }
        else
        {
         document.getElementById("email").className = "form-group has-success";
        }
    }

    //dane - info:
    if (contactInfo.value == "")
    {
        document.getElementById("info").className = "form-group has-error";
        document.getElementById("error_info").className = "alert alert-danger"; 
        error = true;
    }
    else
    {
        document.getElementById("info").className = "form-group has-success";
    }

    if (!error) return true; 
    else return false;
}