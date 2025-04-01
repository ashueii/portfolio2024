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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*請勿盜圖*/

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  Swal.fire({
    width: 300,
    text: '⚠️  Warring：Content is protected！',
    
    confirmButtonText: 'OK',
    confirmButtonColor: "#333333",
   


    customClass: {
      confirmButton: 'custom-confirm-button', 
    }
  });
});


// 文章資料
const articles = [
  {
    id: 1, title: "River Flow嘻哈文化網站", excerpt: "形象網站", content: `<div class="img-box">
          <img src="/portfolio2024/assets/images/project001/01-001.jpg" alt="">
          <img src="/portfolio2024/assets/images/project001/01-002.jpg" alt="">
          <img src="/portfolio2024/assets/images/project001/01-003.jpg" alt="">
          <div class="item">
          <img class="readmore-box" src="/portfolio2024/assets/images/project001/01-004.jpg" alt="">
          <img class="readmore" src="/portfolio2024/assets/images/project001/01-00402.gif" alt="">
          <img class="sidebtn" src="/portfolio2024/assets/images/project001/01-00403.gif" alt="">
          <img class="scoll" src="/portfolio2024/assets/images/project001/01-00401.gif" alt="">
          <img class="ontop" src="/portfolio2024/assets/images/project001/01-00405.gif" alt="">
          </div>
          <img src="/portfolio2024/assets/images/project001/01-005.jpg" alt="">
          <img src="/portfolio2024/assets/images/project001/01-006.jpg" alt="">
      
        </div>`, introduction: ``,
    client: "Side Project", type: "形象網站、UIUX、前端工程", year: "2024 Aug.", img: "/portfolio2024/assets/images/project001/01-001.jpg"
  },
  {
    id: 2, title: "台灣巧克力節 In PINTUNG", excerpt: "形象宣傳、活動視覺", content: ` <div>
        <div class="img-box">
          <img src="/portfolio2024/assets/images/project002/02-001.jpg" alt="">
           <img src="/portfolio2024/assets/images/project002/02-015.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-014.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-002.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-003.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-004.jpg" alt="">
        </div>
        <div class="img-box2">
        <img src="/portfolio2024/assets/images/project002/02-005.jpg" alt="">
        <img src="/portfolio2024/assets/images/project002/02-006.jpg" alt="">
        <img src="/portfolio2024/assets/images/project002/02-007.jpg" alt="">
        <img src="/portfolio2024/assets/images/project002/02-008.jpg" alt="">
        </div>
        <div class="img-box">
          <img src="/portfolio2024/assets/images/project002/02-013.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-016.jpg" alt="">
        </div>
        <div class="img-box2">
            <img src="/portfolio2024/assets/images/project002/02-009.jpg" alt="">
            <img src="/portfolio2024/assets/images/project002/02-010.jpg" alt="">
        </div>
        <div class="img-box">
          <img src="/portfolio2024/assets/images/project002/02-011.jpg" alt="">
          <img src="/portfolio2024/assets/images/project002/02-012.jpg" alt="">
         
        </div>
      </div>`, introduction: `屏東可可巧克力園區於110年辦理「屏東可可台灣巧克力節」，打造全國性可可年度盛事，吸引眾多民眾進場參與可可饗宴，推動行銷六堆客庄週邊產業。`,
    client: "屏東縣政府客家事務處 Department of Hakka Affairs", type: "主視覺設計、印刷品、道具製作", year: "2023 Nov.", img: "/portfolio2024/assets/images/project002/02-001.jpg"
  },
  {
    id: 3, title: "屏東精品巧克力", excerpt: "活動視覺設計", content: `
      <div class="img-box">
      <img src="/portfolio2024/assets/images/project003/03-016.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-001.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-007.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-010.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-015.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-011.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-012.jpg" alt="">
      </div>
       <div class="img-box2">
            <img src="/portfolio2024/assets/images/project003/03-013.jpg" alt="">
            <img src="/portfolio2024/assets/images/project003/03-014.jpg" alt="">
      </div>
      <div class="img-box">
          <img src="/portfolio2024/assets/images/project003/03-009.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-004.jpg" alt="">
          <img src="/portfolio2024/assets/images/project003/03-003.jpg" alt="">
      </div>
     
      <div class="img-box">
          <img src="/portfolio2024/assets/images/project003/03-002.jpg" alt="">
      </div>
      <div class="img-box2">
            <img src="/portfolio2024/assets/images/project003/03-005.jpg" alt="">
            <img src="/portfolio2024/assets/images/project003/03-006.jpg" alt="">
      </div>`,
    introduction: `在人生的旅程中，我們就像是面對一盒巧克力，永遠不知道下一個會是什麼風味的驚喜。<br>就像電影中「阿甘正傳名言」所說的那樣 Life was like a box of chocolates. You never know what you're gonna get.`,
    client: `農業部農村發展及水土保持署台南分署Tainan Branch,Agency of Rural Development and Soil and Water Conservation,MOA<br>台灣可可與巧克力產業協會TICCA`, type: "主視覺設計", year: "2024 Nov.", img: "/portfolio2024/assets/images/project003/img12.jpg"
  },
  {
    id: 4, title: "南部可可產業加值計畫", excerpt: "形象宣傳", content: `<div class="img-box">
                <img src="/portfolio2024/assets/images/project004/04-001.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-002.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-003.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-004.jpg" alt="">
                <img src="/portfolio2024/assets/images/project004/04-005.jpg" alt="">
            </div>`, introduction: ` `,
    client: "村居品卷有限公司", type: "主視覺設計、印刷品、簡報設計", year: "2023 Dec.", img: "/portfolio2024/assets/images/project004/04-002.jpg"
  },
  {
    id: 5, title: "農萊chill就好", excerpt: "形象宣傳、活動視覺", content: `<div class="img-box">
                <img src="/portfolio2024/assets/images/project005/05-001.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-002.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-003.jpg" alt="">
                <img src="/portfolio2024/assets/images/project005/05-004.jpg" alt="">
            </div>`,
    introduction: "市集活動集結彰化、南投、雲林及嘉義等農村在地好物，現場使用在地食材製作的特色點心、精品咖啡、日月潭紅茶、阿里山茶、長輩手路菜及阿公阿嬤植栽作品等。",
    client: "農業部農村發展及水土保持署南投分署 Nantou Branch,Agency of Rural Development and Soil and Water Conservation,MOA", type: "主視覺設計、印刷品、佈置", year: "2023 Aug.", img: "/portfolio2024/assets/images/project005/05-00.jpg"
  },
  {
    id: 6, title: "認識節肢動物", excerpt: "活動視覺", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project006/06-001.jpg" alt="">
    <img src="/portfolio2024/assets/images/project006/06-002.jpg" alt="">
    <img src="/portfolio2024/assets/images/project006/06-003.jpg" alt="">
         
      </div>`, introduction: "",
    client: "南投縣埔里鎮蜈蚣社區發展協會", type: "海報設計", year: "2024 Sep.", img: "/portfolio2024/assets/images/project006/06-00.jpg"
  },
  {
    id: 7, title: "香草寶盒", excerpt: "形象宣傳", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project007/07-001.jpg" alt="">
    <img src="/portfolio2024/assets/images/project007/07-002.jpg" alt="">
    <img src="/portfolio2024/assets/images/project007/07-003.jpg" alt="">
    <img src="/portfolio2024/assets/images/project007/07-004.jpg" alt="">  
      </div>`, introduction: `用藥草製作的按摩槌，讓社區裡的長輩依照自己喜歡的味道，將藥草填入其中，在按摩時可同時享受香氣，<br>以此概念發想製作的綠色教具，希望綠色照護員能帶領社區的長輩活動。`,
    client: "農業部農村發展及水土保持署南投分署 Nantou Branch,Agency of Rural Development and Soil and Water Conservation,MOA", type: "插圖設計、印刷品", year: "2023 Oct.", img: "/portfolio2024/assets/images/project007/07-00.jpg"
  },
  {
    id: 8, title: "食農教育_玫開四度", excerpt: "形象宣傳、插畫設計", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project008/08-001.jpg" alt="">
    <img src="/portfolio2024/assets/images/project008/08-002.jpg" alt="">
    <img src="/portfolio2024/assets/images/project008/08-003.jpg" alt="">
    <img src="/portfolio2024/assets/images/project008/08-004.jpg" alt=""> 
     <img src="/portfolio2024/assets/images/project008/08-005.jpg" alt="">
   
      </div>
       <div class="img-box2">
            <img src="/portfolio2024/assets/images/project008/08-006.jpg" alt="">
           <img src="/portfolio2024/assets/images/project008/08-007.jpg" alt="">  
        </div>`, introduction: `自然野<br>讓鄉野教育從小紮根<br>也讓許多生活在都市的人們— 在玫開四度食用玫瑰園。<br>能深度體會鄉野之美<br>讓食物不再只是單看標示<br>更是讓人體會生產作物這件事<br>沒有想像中的簡單`,
    client: "自然野TELL ME WILD", type: "插圖設計、印刷品", year: "2023 May.", img: "/portfolio2024/assets/images/project008/08-00.jpg"
  },
  {
    id: 9, title: "食農教育_松茂香菇農場", excerpt: "形象宣傳、插畫設計", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project009/09-001.jpg" alt="">
    <img src="/portfolio2024/assets/images/project009/09-00.jpg" alt="">

      </div>`, introduction: `芒種端陽 產地體驗<br> &#92;&#92 繫一顆五月粽的家味 //<br>「撫育我們生命的，正是味覺。」—辰巳芳子<br>芒種端陽— 和蔡明良與蔡珈禎在茂松香菇農埸<br>我們一起體驗包粽<br>一起細品粽子美味與山珍的香氣<br>最後，繫上一束驅邪避凶的藥草掛飾<br>將山所祝福的平安帶回家`,
    client: "自然野TELL ME WILD", type: "插圖設計", year: "2023 Jun.", img: "/portfolio2024/assets/images/project009/09-00.jpg"
  },
  {
    id: 10, title: "食農教育_製作「屬於自己的脆梅和梅酒」", excerpt: "形象宣傳", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project010/10-001.jpg" alt="">
      </div>`, introduction: `隨著時間的堆疊，梅子漸漸由青轉黃，果香濃郁總引得滿室芬芳。今年春末，自然野邀請您一起來製作「屬於自己的脆梅和梅酒」，經過時間的累積，梅子的風味層層的堆疊，風味便越陳越香了。`,
    client: "自然野TELL ME WILD", type: "插圖設計", year: "2023 Mar.", img: "/portfolio2024/assets/images/project010/10-00.jpg"
  },
  {
    id: 11, title: "食農教育_野地建築師", excerpt: "形象宣傳", content: ` <div class="img-box">
    <img src="/portfolio2024/assets/images/project011/11-00.jpg" alt="">
    <img src="/portfolio2024/assets/images/project011/11-001.jpg" alt="">
      </div>`, introduction: "",
    client: "自然野TELL ME WILD", type: "插圖設計", year: "2023 Mar.", img: "/portfolio2024/assets/images/project011/11-00.jpg"
  },
  {
    id: 12, title: "石虎家族Love&Live", excerpt: "形象宣傳", content: ` 
    <div class="img-box3">
    <img src="/portfolio2024/assets/images/project013/13-001.gif" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-002.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-003.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-004.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-005.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-006.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-007.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-008.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-009.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-010.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-011.jpg" alt="" >
    <img src="/portfolio2024/assets/images/project013/13-012.jpg" alt="" >
          
      </div>`, introduction: "",
    client: "臺中市政府新聞局 行銷企劃科", type: "社群圖文", year: "2021", img: "/portfolio2024/assets/images/project013/13-000.jpg"
  },
];

document.addEventListener('DOMContentLoaded', function() {
  // 自動點擊 ALL 按鈕，來顯示全部專案
  document.querySelector('[data-filter="all"]').click();
});

// 取得篩選按鈕
const buttons = document.querySelectorAll("#filter-buttons button");

// 監聽點擊事件
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter"); // 取得篩選條件

     // 移除所有按鈕的 active
     buttons.forEach(btn => btn.classList.remove("active"));

     // 為當前點擊的按鈕添加 active
     button.classList.add("active");

    filterProjects(filter);
  });
});


// 首頁的程式邏輯
function renderHomePage(filteredArticles) {
  const articleList = document.getElementById("project-list");
  if (!articleList) return;

 
    articleList.innerHTML = "";  // 清空現有內容（只在非首次載入時清空）
  

  // 動態生成
  filteredArticles.forEach(article => {
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



// 篩選專案
function filterProjects(filter) {
  if (filter === "all") {
    renderHomePage(articles);  // 顯示所有專案
  } else {
    const filteredArticles = articles.filter(article => 
      // 篩選條件: 類型或年份包含
      article.excerpt.includes(filter)
    );
    renderHomePage(filteredArticles);  // 顯示篩選後的專案
  }
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
      titleElement.innerHTML = `${article.title}`;
      // subtitleElement.textContent = `${article.title} ${article.excerpt} `; 
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
