function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output")
         firebase_message_id = childKey;
         message_data = childData;
  
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glythicon glythicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_witth_tag +like_button + span_with_tag;
        document.getElementBtId("output").innerHTML += row;

   }   });   }); } 

getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}