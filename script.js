function loadContent(url) {
    if (url === 'projects') {
      fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
          const div = document.getElementById("content");
          div.innerHTML = "<h1>Projetos</h1>";
          data.projects.forEach(item => {
            const newDiv = document.createElement("div");
            newDiv.classList.add('items');
            newDiv.innerHTML = `
            
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            
            `;
            div.appendChild(newDiv);
          });      
        })
        .catch(error => console.log(error));
    } else if(url === 'experience'){
        fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
          const div = document.getElementById("content");
          div.innerHTML = "";
          data.academicexperience.forEach(item => {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `
            
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            
            `;
            div.appendChild(newDiv);
          });      
        })
        .catch(error => console.log(error));
    }
    else {
      fetch(url)
       .then(response => response.text())
       .then(data => {
         document.getElementById("content").innerHTML = data;
       });
    }
  }
  
  