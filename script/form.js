document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contato-form");
  const botao = form.querySelector(".contato-botao");

  // Cria a mensagem de feedback
  const feedback = document.createElement("p");
  feedback.textContent = "Mensagem enviada ✅";
  feedback.style.color = "#10b981"; // verde
  feedback.style.marginTop = "10px";
  feedback.style.display = "none"; // inicia escondido
  form.appendChild(feedback);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio tradicional

    // Pega os dados
    const nome = document.getElementById("nome").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    // Monta a mensagem
    const texto = `
Olá! Gostaria de uma proposta.

👤 Nome: ${nome}
🏢 Empresa: ${empresa}
📧 E-mail: ${email}
📱 Telefone: ${telefone}
🛠️ Serviço: ${servico}
📝 Mensagem: ${mensagem}
    `;

    // Mostra o feedback
    feedback.style.display = "block";

    // Limpa o formulário
    form.reset();

    // Aguarda 1.5 segundos e redireciona
    setTimeout(() => {
      const numeroWhatsApp = "5519999330406";
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");

      // Esconde a mensagem depois
      feedback.style.display = "none";
    }, 1500);
  });
});


