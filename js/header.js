const header_container = document.querySelector("header");
const first_ul = `
        <ul>
          <a href="/"><li>woman</li></a>
          <a href="/"><li>man</li></a>
          <a href="/"><li>all</li></a>
        </ul>
`;
const new_header_code = `
${first_ul}
       <a href="" <img-wrapper><img src="./img/yourSNEAKER.svg" alt="логотип" /></img-wrapper> </a>
        <ul>
          <a href="/" id="loginBtn" class = "loginBtn"
            ><li><img src="./img/profile.svg" alt="" /></li
          ></a>
          <a href="/"
            ><li><img src="./img/search.svg" alt="" /></li
          ></a>
          <a href="/" class = "cartBtn"
            ><li><img src="./img/cart.svg" alt="" /></li
          ></a>
        </ul>
`

header_container.insertAdjacentHTML('afterbegin', new_header_code);
