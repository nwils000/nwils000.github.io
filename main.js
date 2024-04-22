function createAnElement(
  elementType,
  parentId,
  classes = [],
  attributes = [],
  textContent
) {
  let newElement = document.createElement(elementType);
  newElement.classList.add(classes[0], classes[1], classes[2]);
  newElement.setAttribute(attributes[0][0], attributes[0][1]);
  newElement.textContent = textContent;
  let parent = document.getElementById(parentId);
  parent.appendChild(newElement);
}

createAnElement('section', 'cards-container', ['blog-card']);
createAnElement(
  'a',
  'blog-card',
  [],
  [['href', './pages/blog-entries/week-6.html']]
);

/* <section class="blog-card">
  <a href="./pages/blog-entries/week-6.html">
    <div class="cover-image-container">
      <img src="./assets/weather.png" class="cover-image" />
      <div class="cover-image-overlay"></div>
    </div>
    <div class="card-content">
      <h2>Week 6</h2>
      <p>I'm a Programmer</p>
      <p>April 13, 2024</p>
    </div>
  </a>
</section>; */
