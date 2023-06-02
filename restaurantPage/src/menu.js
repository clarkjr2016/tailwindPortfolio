export default function menu() {
  const container = document.querySelector("#content");

  if (container.children.length > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    } // removes all child nodes
  }

  // Creating and appending the header element
  const header = document.createElement("h1");
  header.textContent = "Menu";
  container.appendChild(header);

  //create a list of menu items and append to container
  const menuList = document.createElement("ul");
  menuList.id = "menuList";
  container.appendChild(menuList);

  //create menu items and append to menuList
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Chicken Wings";
  menuList.appendChild(menuItem1);

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Chicken Wings";
  menuList.appendChild(menuItem2);

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Chicken Wings";
  menuList.appendChild(menuItem3);
}
