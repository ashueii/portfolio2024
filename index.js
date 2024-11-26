/* header效果 */

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // 下滾時隱藏
        navbar.style.top = '-100px'; // 調整隱藏的距離，根據 Navbar 的高度
    } else {
        // 上滾時顯示
        navbar.style.top = '0';
    }

    // 記錄當前的滾動位置
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 修正負數滾動值
});


/* footer */
let mybutton = document.getElementById("ontopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }





// 文章資料
const articles = [
    { id: 1, title: "River Flow嘻哈文化網站", excerpt: "視覺設計,UI/UX,前端工程", content: ``, img: "/portfolio2024/assets/images/project001.png" },
    { id: 2, title: "台灣巧克力節 In PINTUNG", excerpt: "活動視覺設計", content: ` <div>
        <div class="img-box">
          <img src="/portfolio2024/assets/images/project002/02-001.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-002.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-003.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-004.jpg" alt="">
        </div>
        <div class="img-box2">
          <img src="/portfolio2024/assets/images/project002/02-005.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-006.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-007.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-008.jpg" alt="">
          <div class="img-box2">
            <img src="/portfolio2024/assets/images/project002/02-009.jpg" alt="">
            <img src="/portfolio2024/assets/images/project002/02-010.jpg" alt="">
          </div>
        </div>
        <div class="img-box">
          <img src="/portfolio2024/assets/images/project002/02-011.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-012.jpg" alt="">
        </div>
      </div>`,introduction:`屏東可可巧克力園區於110年辦理「屏東可可台灣巧克力節」，打造全國性可可年度盛事，吸引眾多民眾進場參與可可饗宴，推動行銷六堆客庄週邊產業。`,
      client:"屏東縣政府客家事務處 Department of Hakka Affairs",type:"主視覺設計、印刷品、道具製作",year:"2023 Nov.", img: "/portfolio2024/assets/images/project002/02-001.jpg" },
    { id: 3, title: "屏東精品巧克力", excerpt: "活動視覺設計", content: `施工中`,
        introduction:`在人生的旅程中，我們就像是面對一盒巧克力，永遠不知道下一個會是什麼風味的驚喜。<br>就像電影中「阿甘正傳名言」所說的那樣 Life was like a box of chocolates. You never know what you're gonna get.`,
        client:`農業部農村發展及水土保持署台南分署Tainan Branch,Agency of Rural Development and Soil and Water Conservation,MOA<br>台灣可可與巧克力產業協會TICCA`,type:"主視覺設計",year:"2024 Nov.", img: "/portfolio2024/assets/images/project003/img12.jpg" },
    { id: 4, title: "南部可可產業加值計畫", excerpt: "視覺設計", content: `<div class="img-box">
                <img src="/portfolio2024/assets/images/project004/04-001.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-002.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-003.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-004.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-005.jpg" alt="">
            </div>`,introduction:` `,
            client:"村居品卷有限公司",type:"主視覺設計、印刷品、簡報設計",year:"2023 Dec.", img: "/portfolio2024/assets/images/project004/04-002.jpg" },
    { id: 5, title: "農萊chill就好", excerpt: "活動視覺設計", content: `<div class="img-box">
                <img src="/portfolio2024/assets/images/project005/05-001.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-002.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-003.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-004.jpg" alt="">
            </div>`,
        introduction:"市集活動集結彰化、南投、雲林及嘉義等農村在地好物，現場使用在地食材製作的特色點心、精品咖啡、日月潭紅茶、阿里山茶、長輩手路菜及阿公阿嬤植栽作品等。",
        client:"農業部農村發展及水土保持署南投分署 Nantou Branch,Agency of Rural Development and Soil and Water Conservation,MOA",type:"主視覺設計、印刷品",year:"2023 Aug.", img: "/portfolio2024/assets/images/project005/05-00.jpg" },
    { id: 6, title: "認識肢節動物", excerpt: "海報設計", content: "施工中", img: "/portfolio2024/assets/images/project006.jpg" },
    { id: 6, title: "石虎家族Love&Live", excerpt: "圖文設計", content: "施工中", img: "/portfolio2024/assets/images/project007.jpg" },
  ];
  
  // 首頁的程式邏輯
  function renderHomePage() {
    const articleList = document.getElementById("project-list");
    if (!articleList) return;
  
    // 動態生成文章卡片
    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
         <a href="/portfolio2024/article.html?id=${article.id}">
                <div class="project-card ">
                    <div class="img">
                        <img src="${article.img}" alt="${article.title}">
                    </div>
                    <div class="item">
                        <h5>
                        ${article.title}
                        </h5>
                        <span>${article.excerpt}</span>
                    
                    </div>
                </div>
            </a>
      `;
      articleList.appendChild(card);
    });
  }
  
  // 文章頁的程式邏輯
  function renderArticlePage() {
    const titleElement = document.getElementById("article-title");
    const subtitleElement = document.getElementById("article-subtitle");
    const introductionElement = document.getElementById("introduction");
    const contentElement = document.getElementById("article-content");
    const clientElement = document.getElementById("client");
    const typeElement = document.getElementById("type");
    const yearElement = document.getElementById("year");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
  
    if (!titleElement || !contentElement) return;
  
    // 取得 URL 中的文章 ID
    const urlParams = new URLSearchParams(window.location.search);
    let currentId = parseInt(urlParams.get("id")) || 1;
  
    function updateArticle() {
      const article = articles.find(a => a.id === currentId);
      if (article) {
        titleElement.innerHTML = `${article.title} <span>  |  </span> ${article.excerpt} ` ;
        subtitleElement.textContent = `${article.title} ${article.excerpt} ` ;
        introductionElement.innerHTML = article.introduction;
        contentElement.innerHTML = article.content;
        clientElement.innerHTML = article.client;
        typeElement.textContent = article.type;
        yearElement.textContent = article.year;
      }
    }
  
    // 上一篇與下一篇邏輯
    prevButton?.addEventListener("click", () => {
      currentId = currentId > 1 ? currentId - 1 : articles.length;
      updateArticle();
    });
  
    nextButton?.addEventListener("click", () => {
      currentId = currentId < articles.length ? currentId + 1 : 1;
      updateArticle();
    });
  
    // 初始化文章內容
    updateArticle();
  }
  
  // 根據當前頁面執行相應的邏輯
  if (document.getElementById("project-list")) {
    renderHomePage();
  } else if (document.getElementById("article-title")) {
    renderArticlePage();
  }
  