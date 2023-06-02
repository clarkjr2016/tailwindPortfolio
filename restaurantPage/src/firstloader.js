import chicken_wings from "./chicken_wings.jpg";

export default function initial() {
  const container = document.querySelector("#content");

  if (container.children.length > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    } // removes all child nodes
  }

  // Creating and appending the header element
  const header = document.createElement("h1");
  header.textContent = "Eugene's Marvelous Chicken Wings";
  container.appendChild(header);

  // Creating and appending the image element
  const cw = document.createElement("img");
  cw.src = chicken_wings;
  cw.id = "chicken_wings";
  container.appendChild(cw);

  // Creating and appending the paragraph element
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc,";
  container.appendChild(paragraph);
}
