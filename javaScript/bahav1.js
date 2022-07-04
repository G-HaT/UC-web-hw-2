const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
  };


const goToTop = () => {
    document.body.scrollIntoView();
  };
  backToTopButton.addEventListener("click", goToTop)


  let subscribe = prompt("هل تريد الاشتراك في منصتي 📺؟ (رد بـ نعم او لا)");

  if (subscribe== "نعم") {
    alert("مرحباً بك في منصتي 👋")
  }
  if (subscribe == "لا") {
    alert("حسناً، عد لنا اذا غيرت رايك ☹️")
  }