// Alternar entre login e cadastro
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const linkCadastro = document.getElementById("linkCadastro");
const linkLogin = document.getElementById("linkLogin");

linkCadastro.addEventListener("click", () => {
  formLogin.classList.remove("active");
  formCadastro.classList.add("active");
});

linkLogin.addEventListener("click", () => {
  formCadastro.classList.remove("active");
  formLogin.classList.add("active");
});

// Cadastrar usuário
formCadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const msg = document.getElementById("cadastroMsg");

  if (!nome || !email || !senha || !confirmarSenha) {
    msg.textContent = "Preencha todos os campos!";
    msg.style.color = "red";
    return;
  }

  if (senha !== confirmarSenha) {
    msg.textContent = "As senhas não coincidem!";
    msg.style.color = "red";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.find(u => u.email === email);
  if (existe) {
    msg.textContent = "E-mail já cadastrado!";
    msg.style.color = "red";
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  msg.textContent = "Cadastro realizado com sucesso!";
  msg.style.color = "green";
  formCadastro.reset();

  // Volta pra tela de login após 2s
  setTimeout(() => {
    formCadastro.classList.remove("active");
    formLogin.classList.add("active");
    msg.textContent = "";
  }, 2000);
});

// Login de usuário
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value;
  const msg = document.getElementById("loginMsg");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    msg.textContent = `Bem-vindo, ${usuario.nome}!`;
    msg.style.color = "green";
    formLogin.reset();
  } else {
    msg.textContent = "E-mail ou senha incorretos!";
    msg.style.color = "red";
  }
});
