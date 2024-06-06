

const footer = document.querySelector("footer"),
new_footer_html = `
        <thanksgiving>
            <h3>thanks for watching</h3>
            <h2>Glory to Ukraine</h2>
            <img-wrapper><img src="./img/ukr.svg" alt="флаг України"></img-wrapper>
        </thanksgiving>
        <bottom>
            <ul>
                <a href=""><li>woman</li></a>
                <a href=""><li>man</li></a>
                <a href=""><li>all</li></a>
            </ul>
           <a href=""><img-wrapper><img src="./img/nike&Ukraine.svg" alt="Nike і Україна"></img-wrapper></a> 
            <ul class="choices">
                <a class="workout"><li>workout</li></a>
                <a class="run"><li>run</li></a>
                <a class="football"><li>football</li></a>
            </ul>
        </bottom>
`;



footer.insertAdjacentHTML('afterbegin', new_footer_html);