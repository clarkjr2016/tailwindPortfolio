export default function about() {
  const container = document.querySelector("#content");

  if (container.children.length > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    } // removes all child nodes
  }

  // Creating and appending the header element
  const header = document.createElement("h1");
  header.textContent = "About";
  container.appendChild(header);

  // Creating and appening the paragraph element
  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta nostrum eaque ea veniam nesciunt, natus ipsum, eum omnis repellat blanditiis est quis, cupiditate nemo enim nobis laborum necessitatibus! Incidunt. Nemo id distinctio nam adipisci quidem optio fugit corrupti, molestias assumenda, numquam dignissimos. Placeat rem eos veritatis ex! Pariatur tenetur expedita veniam minima odio, provident at! Excepturi aperiam deleniti dolores.";
  container.appendChild(aboutParagraph);
}
