$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
            $("#button").click(function(){
                x = $(".input-text").val();
                $("ol").append(" <li id="+generateUUID()+" class='uncheck'><input name='done-todo' type='checkbox' class='done-todo'>"+x+" </li>");
            });
        
            $(document).on("click",".done-todo",function(){
                $(this).parent().toggleClass("checked");
            });

            // $(".active").click(function(){
            //     $("checked").hide;
            // });
            
            $(".all").click(function(){
                $(".checked").css("display","block");
            });

            $(".active").click(function(){
                $(".checked").removeClass("display");
                $(".checked").css("display","none");
            });
            //  $(".complete").click(function(){
            //     //$(".checked").css("display","block");
            //     $(".uncheck").css("display","none");
            //  });

           
            

            


    });