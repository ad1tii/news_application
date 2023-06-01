// const API_KEY="99a9d9233c0192aba6435485fa9fa71a";
const url="https://gnews.io/api/v4/search?q=";


window.addEventListener('load',() => fetchNews("India"));

async function fetchNews(query){
    const res= await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data= await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer=document.getElementById("cards-container");
    const newsCardTemplate=document.getElementById("template-news-card");
 
    cardsContainer.innerHTML="";

    articles.forEach((article) => {

        if(!article.image) return;
        const cardClone=newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
        
    });
}

function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src=article.image;
    newsTitle.innerHTML=article.title;
    newsSource.innerHTML=article.source.name;
    newsDesc.innerHTML=article.description;
}

// const cardsContainer=document.getElementById("cards-container");
// const newsCardTemplate=document.getElementById("template-news-card");
// const cardClone=newsCardTemplate.content.cloneNode(true);
// cardsContainer.appendChild(cardClone);

