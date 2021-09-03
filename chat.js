
let refershBtn = document.getElementById("refersh");

let sendBtn = document.getElementById("sendData");

let  tbody = document.getElementById("table");

let inboxMessages = [];

let mailNumber = document.getElementById('messageNumber');

let floderMsgNumber = document.getElementById('floderMsgNumber');

let inboxNumber = document.getElementById('inboxNumber');

let searchMail = document.getElementById('searchMail');

let tableRow  = document.querySelectorAll('.tableRow')



let  date = new Date();
date = `${date.getHours()}.${date.getMinutes()}`

sendBtn.addEventListener('click', () =>{ 

            let message = {
              name :document.getElementById("name").value,
              subject:document.getElementById("message").value,
              time: date
            }
            console.log(message)
        tbody.innerHTML+= 
            `<tr> 
            <td><input class='form-check-input' type= 'checkbox' value='' id='flexCheckChecked'/></td>  
                 <td>${message.name}</td>
                 <td><span class='  text-center  badge rounded text-dark'>-</td></td>      
                 <td>${message.subject}</td>
                 <td> <span class='  text-center  badge rounded  text-dark'>-</td>
                 <td>  ${message.time} </td>
            </tr>
        `
         inboxMessages.push(message);
       console.log(tbody);
       console.log(inboxMessages);
       mailNumber.innerText = inboxMessages.length;
       inboxNumber.innerText = inboxMessages.length;
       floderMsgNumber.innerText = inboxMessages.length;

       document.getElementById('name').value ="";
       document.getElementById('message').value ="";
       alert("email Send")
       event.stopPropagation()
       
      })

      // function filterItems(e){
      //   // convert text to lowercase
      //   var text = e.target.value.toLowerCase();
      //   // Get lis
      //   var items = itemList.getElementsByTagName('li');
      //   // Convert to an array
      //   Array.from(items).forEach(function(item){
      //     var itemName = item.firstChild.textContent;
      //     if(itemName.toLowerCase().indexOf(text) != -1){
      //       item.style.display = 'block';
      //     } else {
      //       item.style.display = 'none';
      //     }
      //   });
      // }

    // searchMail.addEventListener('keyup', (e) =>{
    //   var text = e.target.value.toLowerCase();
    //   // Get lis
    //   var items = tableRow.querySelectorAll('.tableName');
    //   console.log(items)
    //   // Convert to an array
    //   Array.from(items).forEach(function(item){
    //     var itemName = item.firstChild.textContent;
    //     if(itemName.toLowerCase().indexOf(text) != -1){
    //       item.style.display = 'block';
    //     } else {
    //       item.style.display = 'none';
    //     }
    //   });
             
    // })

// ---------------
refershBtn.addEventListener("click", () => {
  fetch("data.json")
  .then((chatResponse) => chatResponse.json())
  .then((finalData) => {
        console.log(finalData)
      var displayChatData = "";
      finalData.forEach((data) => {
        displayChatData = displayChatData + "<tr class ='tablerow' >"+
        "<td>"+ "<input class='form-check-input' type= 'checkbox' value='' id='flexCheckChecked'/>"+"</td>"+
        "<td class = ' tableName '>" + data.name + "</td>"+
        "<td><span class='  text-center  badge rounded bg-warning'>"+ data.notification +"</td>"+
        "<td>" + data.message + "</td>"+
        "<td><span class='  text-center  badge rounded text-dark'>"+ data.icon  +"</td>"+
        "<td>" + data.time + "</td>"+
        "</tr>";
      });
      tbody.innerHTML = displayChatData;
      console.log(displayChatData)
               
    });
});
