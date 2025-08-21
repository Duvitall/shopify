// Mostrar cadastro ou login
function mostrarCadastro() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("cadastroForm").style.display = "block";
}

function mostrarLogin() {
  document.getElementById("cadastroForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}
   document.getElementById("cadastroForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nomeCadastro").value.trim();
      const senha = document.getElementById("senhaCadastro").value;

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const jaExiste = usuarios.find((usuario) => usuario.nome === nome);
      if (jaExiste) {
        alert("Este nome de usuário já está cadastrado.");
        return;
      }

      usuarios.push({ nome, senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("Cadastro realizado com sucesso!");
      window.location.href = "indexpag2.html"; // Redireciona para login
    });

// Login de usuário
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senha);

  if (usuario) {
    alert(`Bem-vindo, ${usuario.nome}!`);
    window.location.href = "index.html";
    // Aqui você pode redirecionar para outra página: window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
});
