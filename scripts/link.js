const baseURL = "https://andrewjayasinghe.github.io/wdd230/";

const linksURL = "https://andrewjayasinghe.github.io/wdd230/data/links.json";

fetch('https://andrewjayasinghe.github.io/wdd230/data/links.json')
.then(response => response.json())
.then(data => populateMenu(data))
.catch(error => console.error('Error fetching JSON:', error));


  function populateMenu(data) {
    const menu = document.getElementById('menu1');
    
    data.weeks.forEach(week => {
      const listItem = createMenuItem(week);
      menu.appendChild(listItem);
    });
  }

  function createMenuItem(weekData) {
    const listItem = document.createElement('li');
    listItem.textContent = `${weekData.week}: `;
    
    weekData.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      
      listItem.appendChild(anchor);
      listItem.appendChild(document.createTextNode(' | ')); // Separator between links
    });

    // Remove the last separator
    listItem.lastChild.remove();

    return listItem;
  }