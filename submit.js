var form= document.getElementById('form-control');

form.addEventListener('submit', function(e){
    e.preventDefault();

var expenseName=document.getElementById('expenseName').value;
var description=document.getElementById('description').value;
var category=document.getElementById('category').value;

var user={
    expenseName: expenseName,
    description: description,
    category: category
};

localStorage.setItem(description, JSON.stringify(user));

var displayDiv=document.getElementById('display-items');
var userDiv=document.createElement('div');
userDiv.setAttribute('data-description',description);

userDiv.innerHTML =`${expenseName} - ${description} - ${category}
<button onclick="editUser('${description}')">Edit</button>
<button onclick="deleteUser('${description}')">Delete</button>`;

displayDiv.appendChild(userDiv);


document.getElementById('expenseName').value = '';
  document.getElementById('description').value = '';
  document.getElementById('category').value = '';
});

function editUser(description) { 
    var newDescription = prompt('Enter a new description:');
    
    if (newDescription !== null && newDescription !== '') {
      
      var userJSON = localStorage.getItem(description);
      var user = JSON.parse(userJSON);


      localStorage.removeItem(description);
      user.description = newDescription;

      localStorage.setItem(newDescription, JSON.stringify(user));
      var userDiv = document.querySelector(`[data-description="${description}"]`);

      if (userDiv) {
        
        userDiv.setAttribute('data-description', newDescription);
        
       
        userDiv.innerHTML = `
          ${user.expenseName} - ${newDescription} - ${user.category}
          <button onclick="editUser('${newDescription}')">Edit</button>
          <button onclick="deleteUser('${newDescription}')">Delete</button>
        `;
      }
    }
  }
  

function deleteUser(description) {
    // Remove the user details from the screen
    var userDiv = document.querySelector(`[data-description="${description}"]`);
    if (userDiv) {
        userDiv.remove();
      }
    // Remove the user details from local storage
    localStorage.removeItem(description);
  }


  