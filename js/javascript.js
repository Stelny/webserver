$(document).ready(function () {

    function setDate() {
        var currentdate = new Date(); 

        document.getElementById("date").innerHTML = currentdate.getDate()+ "." +(currentdate.getMonth()+1)+"."+currentdate.getFullYear();
        document.getElementById("time").innerHTML = currentdate.getHours() + ":"  + currentdate.getMinutes();
    }

    $(".main-box .box-head p").click(function (e) { 
        e.preventDefault();
        var mainbox = $(this).closest(".main-box");

        if (mainbox.hasClass("box-closed")) {
            mainbox.removeClass("box-closed");
            mainbox.addClass("box-open");
        } else {
            mainbox.addClass("box-closed");
            mainbox.removeClass("box-open");
        }

    });
    $('.sliders-col .range-box input').on("change mousemove", function() {
        var value = $(this).val();
        $(this).closest("form").children(".range-input").val(value);
    });
    $('.sliders-col .range-input').bind('input', function() {
        var value = $(this).val();
        if (value > 255) {
            $(this).val(255);
            value = 255;
        } else if (value < 0 || value == "00") {
            $(this).val(0);
            value = 0;
        }
        $(this).closest("form").children(".range-box").children(".range-slider").val(value);
    });

    setDate();
    
    setInterval(function(){
        setDate();
    }, [1000])




    //Default Checkbox
    const toggleOpen = document.getElementsByClassName("toggle-open");
    for (let item of toggleOpen) {
        let m = item.parentElement.parentElement.parentElement.childNodes;

        for (let i = 0; i < m.length; i++) {
            const element = m[i];
            
            if (element.classList) {
                if (element.classList.contains("toggle-open-auto")) {
                    if(item.checked) {
                        element.style.display = "none";
                    } else {
                        element.style.display = "flex";
                    }
                }
                if (element.classList.contains("toggle-open-man")) {
                    if(item.checked) {
                        element.style.display = "flex";
                    } else {
                        element.style.display = "none";
                    }
                }
            }
        }
        
    }


    $(".toggle-open").change(function(){
        let man = $(this).parent().parent().siblings(".toggle-open-man");
        let auto = $(this).parent().parent().siblings(".toggle-open-auto");
        if(this.checked) {
            auto.css("display","none");
            man.css("display", "flex");
        } else {
            auto.css("display","flex");
            man.css("display", "none");
        }
    }); 
});