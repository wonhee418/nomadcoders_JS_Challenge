const quotes = [
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author: "채근담",
  },
  {
    quote: "한 번 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
    author: "동아프리카속담",
  },
  {
    quote: "친구는 제 2의 자신이다",
    author: "아리스토텔레스",
  },
  {
    quote:
      "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
    author: "도서 ‘어떤 하루’ 中",
  },
  {
    quote: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
    author: "나카무라 미츠루",
  },
  {
    quote: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.",
    author: "도서 ‘프린세스, 라 브라바!’ 中",
  },
  {
    quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "크리스 그로서",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;
