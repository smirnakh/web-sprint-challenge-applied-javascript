import axios from "axios"

const Card = (article) => {
  
  const divCard = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  divCard.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent =`By ${article.authorName}`;

  divCard.appendChild(headline);
  divCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  divCard.addEventListener('click', () =>{
    console.log(headline);
   });

   return divCard;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = async (selector) => {
  
  fetch('http://localhost:5001/api/articles')
    .then(resp => resp.json())
    .then(data => {
      console.log('fetch response', data);
    })

  const resp = await fetch('http://localhost:5001/api/articles')
  const json = await resp.json()
  console.log('await response', json);
  const articles = json.articles;
 

  articles.javascript.forEach(article => {
    document.querySelector(selector).appendChild(Card(article));
  });
  articles.bootstrap.forEach(article => {
    document.querySelector(selector).appendChild(Card(article));
  });
  articles.technology.forEach(article => {
    document.querySelector(selector).appendChild(Card(article));
  });
  articles.jquery.forEach(article => {
    document.querySelector(selector).appendChild(Card(article));
  });
  articles.node.forEach(article => {
    document.querySelector(selector).appendChild(Card(article));
  });


  // const cardContainer = document.querySelector(selector);

  // axios.get('http://localhost:5001/api/articles')
  // .then(res => {
  //   const data = res.json();
  //   console.log(data);
  //    data.forEach( item => {
  //     console.log(data)
  //      const articleElem = Tabs(item)
  //       cardContainer.appendChild(articleElem)
  //    })
  // })
  //  .catch(err => console.error(err))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
