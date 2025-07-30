document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contato-form");
  const botao = form.querySelector(".contato-botao");

  // Cria a mensagem de feedback
  const feedback = document.createElement("p");
  feedback.textContent = "Abrindo seu cliente de e-mail..."; // Mensagem ajustada para mailto:
  feedback.style.color = "#10b981"; // verde
  feedback.style.marginTop = "10px";
  feedback.style.display = "none"; // inicia escondido
  form.appendChild(feedback);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio tradicional

    // Pega os dados
    const nome = document.getElementById("nome").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const emailUsuario = document.getElementById("email").value.trim(); // Renomeado para evitar conflito
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagemUsuario = document.getElementById("mensagem").value.trim(); // Renomeado

    // --- Nova estrutura da mensagem profissional ---
    const assuntoEmail = `Proposta Comercial - ${servico} - ${nome} (${empresa})`;
    const corpoEmail = `
Prezados(as) da Tecup SAC,

Gostaria de solicitar uma proposta comercial referente ao serviço de ${servico}.

Abaixo estão os meus dados para contato e detalhes adicionais:

Nome Completo: ${nome}
Empresa: ${empresa}
E-mail para Contato: ${emailUsuario}
Telefone: ${telefone}

Mensagem Adicional:
${mensagemUsuario || "Não foi fornecida uma mensagem adicional."}

Agradeço a atenção e aguardo o breve retorno de vocês.

Atenciosamente,

${nome}
${empresa}
    `;

    // Endereço de e-mail do destinatário
    const emailDestino = "tecup.sac@gmail.com";

    // Cria o link mailto:
    const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(
      assuntoEmail
    )}&body=${encodeURIComponent(corpoEmail)}`;

    // Mostra o feedback
    feedback.style.display = "block";

    // Limpa o formulário
    form.reset();

    // Aguarda 1.5 segundos e tenta abrir o cliente de e-mail
    setTimeout(() => {
      window.location.href = mailtoLink; // Abre o link mailto:
      // A mensagem de feedback não será escondida automaticamente, pois o navegador sai da página ou abre outro app.
      // Se quiser que ela apareça brevemente antes de tentar abrir, mantenha o setTimeout.
    }, 1500);
  });
});


