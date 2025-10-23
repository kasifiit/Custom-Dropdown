document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const btn = document.querySelector(".btn");
  const list = document.querySelector(".list");
  const li = document.querySelectorAll("li");

  const openList = () => {
    list.classList.toggle("open");
    if(list.classList.contains('open')){
      btn.style.setProperty('--arrow', '"▲"');
    }else{
      btn.style.setProperty('--arrow', '"▼"');
    }
  };
  btn.addEventListener("click", openList);
  li.forEach(function (item) {
    item.addEventListener("click", () => {
      btn.style.setProperty('--arrow', '"▼"');
      btn.textContent = item.textContent;
      list.classList.remove("open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!container.contains(e.target)) {
      list.classList.remove("open");
      btn.style.setProperty('--arrow', '"▼"');
    }
  });
});
