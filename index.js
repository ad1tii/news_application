const API_KEY="99a9d9233c0192aba6435485fa9fa71a";
const url="https://gnews.io/api/v4/search?q=";
const max=20;
window.addEventListener('load',() => fetchNews("India"));

async function fetchNews(query){
    const res= await fetch(`${url}${query}&max=20&apikey=${API_KEY}`);
    const data= await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer=document.getElementById("cards-container");
    const newsCardTemplate=document.getElementById("template-news-card");
 
    cardsContainer.innerHTML="";

    articles.forEach((article) => {

        const cardClone = newsCardTemplate.content.cloneNode(true);
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

    // const date=new Date(article.publishedAt).toLocaleDateString("en-US", {
    //     timeZone:"Asia/Vijayawada",
    // });

    // newsSource.innerHTML=`${article.source.name} . ${date}`;

    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    });
}


let curSelectedNav=null;
function navItemClick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav=navItem;
    curSelectedNav.classList.add("active");


}

const searchButton=document.getElementById('search-button');
const searchText=document.getElementById('search-text');

searchButton.addEventListener("click",() => {
    const query=searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav=null;
})

// const cardsContainer=document.getElementById("cards-container");
// const newsCardTemplate=document.getElementById("template-news-card");
// const cardClone=newsCardTemplate.content.cloneNode(true);
// cardsContainer.appendChild(cardClone);

