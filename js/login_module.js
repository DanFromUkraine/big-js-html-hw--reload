
const html_login_module_container = `
<div class="cont">
        <div class="login_module">
            <h2>Module for entrance</h2>
            <h3>Email:</h3>
            <input type="email" class = "email_input" placeholder="type your email" required>
            <h3>Password:</h3>
            <input type="password" class = "password_input" placeholder="type your password" required>
            <!-- <h3></h3> -->
            <div class="options">
                <h3>or continue with: </h3>
                <div class="google"><a><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt=""></a></div>
            </div>
            
            <div class="group">
                <label for="myCheckbox" class="checkbox-label">Ви ж поставите 12?)</label>
                <input type="checkbox" id="myCheckbox">
            </div> 
            <button class="submit"> Приймаю </button>
        </div>
    </div>
`;

let logined = false,
name = "";
const loginBtn = document.querySelector(".loginBtn");
function login_module_logic(event) {

    if (!logined) {
        document.body.insertAdjacentHTML('beforebegin', html_login_module_container);
    } else {
        document.body.insertAdjacentHTML('beforebegin', `<h2 style="display:flex; justify-content: center; align-items: center;">Вітаю, ${name}, ви вже залогінились!</h2>`);
    }
    const refs = {
        wrapper: document.querySelector("wrapper"),
        checkbox: document.querySelector("#myCheckbox"),
        submit: document.querySelector(".submit"),
        email_input: document.querySelector(".email_input"),
        password_input: document.querySelector(".password_input"),
        html_login_module: document.querySelector(".cont"),
        active: false,
    }
    const functions = {
        checkbox_onclick: function() {
            refs.active = !refs.active;
            functions.colorize_inputs();
            refs.submit.disabled = functions.check();
        },
        submit_onclick: function() {
            refs.submit.disabled = functions.check();
            functions.colorize_inputs();
            logined = true;
            refs.html_login_module.remove();  
            refs.wrapper.classList.remove("blur");
          
            name = refs.email_input.value;
        },
        html_login_module_quit: function(e) {
            if (e.target === e.currentTarget) {
                refs.html_login_module.remove();
                refs.wrapper.classList.remove("blur");
            }
        },
        check: function() {
            return refs.active && refs.email_input.value && refs.password_input.value ? false : true;
        },
        colorize_inputs: function() {
            if (!refs.email_input.value) {
                refs.email_input.style.borderColor = "red";
            }
            if (!refs.password_input.value) {
                refs.password_input.style.borderColor = "red";
            }
        },
    }
        event.preventDefault();
        refs.wrapper.classList.add("blur");
        refs.submit.disabled = true;

    
    refs.checkbox.addEventListener('click', functions.checkbox_onclick);
    refs.submit.addEventListener('click', functions.submit_onclick);
    refs.html_login_module.addEventListener('click', functions.html_login_module_quit);
}

loginBtn.addEventListener('click', login_module_logic);  

export {logined, name, login_module_logic};