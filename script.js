// Access key:
// qwwWd7dndFaHnsWr9XWgbDMhCZeDPSwv5kwB8GrCr8Q
// alert('hi js');
const searchform = document.getElementById("searchform");
const inputform = document.getElementById("inputform");
const btn = document.getElementById("btn");
const divsection = document.getElementById("divsection");

const ApiKey = "qwwWd7dndFaHnsWr9XWgbDMhCZeDPSwv5kwB8GrCr8Q";

const page=1;
async function ImageSearch(){
  keyword=inputform.value;
  console.log(keyword);
  const URL =`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${ApiKey}&page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();

  if (page===1){
    divsection.innerHTML="";

  }

  console.log(data);
  results = data.results;
  console.log(results);
  results.map((result)=>{
    console.log(result);
    const Image= document.createElement("img");
  Image.src= result.urls.small;
  const ImgLink = document.createElement('a');
  ImgLink.href = result.links.html;
  ImgLink.target="_blank";
  Image.appendChild(ImgLink);
  divsection.appendChild(Image);

 

  })
}
searchform.addEventListener('submit',(e)=>{
  e.preventDefault();
  ImageSearch();
})

