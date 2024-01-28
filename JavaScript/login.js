var languageTexts = {
    "en": {
      "formTitle": "Login",
      "rememberText": "Remember me",
      "forgotText": "Forgot Password ?",
      "loginButtonText": "Login",
      "registerText": "Don't have an account ?",
      "registerLinkText": "Register",
      "orYou":"Or you can log in with the following account :",
      "usernamePlaceholder": "Username",
      "passwordPlaceholder": "Password"
    },
    "vi": {
      "formTitle": "Đăng nhập",
      "rememberText": "Nhớ mật khẩu",
      "forgotText": "Quên mật khẩu ?",
      "loginButtonText": "Đăng nhập",
      "registerText": "Chưa có tài khoản ?",
      "registerLinkText": "Đăng ký ngay",
      "orYou":"Hoặc bạn có thể đăng nhập bằng tài khoản sau:",
      "usernamePlaceholder": "Tên đăng nhập",
      "passwordPlaceholder": "Mật khẩu"
    },
    "zh": {
      "formTitle": "登录",
      "rememberText": "记住我",
      "forgotText": "忘记密码？",
      "loginButtonText": "登录",
      "registerText": "还没有账户？",
      "registerLinkText": "注册",
      "orYou":"或者您可以使用以下账号登录 :",
      "usernamePlaceholder": "用户名",
      "passwordPlaceholder": "密码"

    }
  };

  function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;
    var texts = languageTexts[selectedLanguage];

    document.getElementById("form-title").innerText = texts.formTitle;
    document.getElementById("remember-text").innerText = texts.rememberText;
    document.getElementById("forgot-text").innerText = texts.forgotText;
    document.getElementById("login-button").innerText = texts.loginButtonText;
    document.getElementById("register-text").innerText = texts.registerText;
    document.getElementById("register-link").innerText = texts.registerLinkText;
    document.getElementById("or-you").innerText = texts.orYou;
  }
  document.getElementById("language").onchange = changeLanguage;
  document.querySelector('input[type="text"]').placeholder = texts.usernamePlaceholder;
  document.querySelector('input[type="password"]').placeholder = texts.passwordPlaceholder; 