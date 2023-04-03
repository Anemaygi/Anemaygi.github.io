function loadContent(url) {
  if (url === 'projects') {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const div = document.getElementById("contentstuff");
        div.innerHTML = "<h1>Projects (em construção)</h1>";
        const wrapper = document.createElement("div");
        wrapper.classList.add('wrapperitems')
        data.projects.forEach(item => {
          const newDiv = document.createElement("div");
          newDiv.classList.add('items');
          newDiv.innerHTML = `
          
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          
          `;
          wrapper.appendChild(newDiv);
        });      
      div.appendChild(wrapper);
      })
      .catch(error => console.log(error));
  } 
  else if (url === 'resume'){
    const urlcv = "https://drive.google.com/uc?export=download&id=1OmtnlYn_Ar4IhaErO8TEUAH_sjCjSKqO";
    const pdfcv = "src/ProfessionalCV_En.pdf"
    const div = document.getElementById("contentstuff");
    div.innerHTML = `
      <center><a class="buttond" href="${urlcv}" target="_blank"> Download CV </a></center>
<iframe src="${pdfcv}" width="100%" height="500px"></iframe>
    `
  }
    
  // else if(url === 'experience'){
  //     fetch('data/data.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       const div = document.getElementById("contentstuff");
  //       div.innerHTML = "<h1>Experience</h1>";
  //       data.academicexperience.forEach(item => {
  //         const newDiv = document.createElement("div");
  //         newDiv.classList.add('items');
  //         newDiv.innerHTML = `
          
  //         <h2>${item.name}</h2>
  //         <p>${item.description}</p>
          
  //         `;
  //         div.appendChild(newDiv);
  //       });       
  //     })
  //     .catch(error => console.log(error));
  // }
  
  else {
    fetch(url)
     .then(response => response.text())
     .then(data => {
       document.getElementById("contentstuff").innerHTML = data;
     });
  }
}

