// Valor vindo do sistema (fixo ou carregado do backend)
    const valorPagamento = 149.90; // <-- altere aqui para o valor real da compra
    document.getElementById("valor-pagamento").textContent = `R$ ${valorPagamento.toFixed(2).replace('.', ',')}`;

    const btnCartao = document.getElementById("btn-cartao");
    const btnPix = document.getElementById("btn-pix");
    const formCartao = document.getElementById("form-cartao");
    const formPix = document.getElementById("form-pix");
    const qrContainer = document.getElementById("qr-container");
    const chavePix = document.getElementById("chavePix").textContent;
    const codigoPix = document.getElementById("codigoPix");
    const copiarPix = document.getElementById("copiarPix");

    // Alterna entre cartão e Pix
    btnCartao.addEventListener("click", () => {
      formCartao.classList.remove("hidden");
      formPix.classList.add("hidden");
      btnCartao.classList.add("bg-green-600", "text-white");
      btnPix.classList.remove("bg-green-600", "text-white");
    });

    btnPix.addEventListener("click", () => {
      formPix.classList.remove("hidden");
      formCartao.classList.add("hidden");
      btnPix.classList.add("bg-green-600", "text-white");
      btnCartao.classList.remove("bg-green-600", "text-white");
      gerarQrPix();
    });

    // Gera o QR Code Pix automaticamente
    function gerarQrPix() {
      const nome = "Minha Empresa LTDA";
      const cidade = "SAO PAULO";
      const txid = "TX" + Math.floor(Math.random() * 1000000);

      // payload Pix simples (exemplo funcional)
      const payload = `00020126360014BR.GOV.BCB.PIX0114${chavePix}520400005303986540${valorPagamento.toFixed(2)}5802BR5913${nome}6009${cidade}62070503${txid}6304`;

      // Gera QR Code
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(payload)}&size=200x200`;
      qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code Pix" class="rounded-lg border p-2" />`;

      // Mostra o código para copiar manualmente
      codigoPix.textContent = payload;
    }

    // Copiar código Pix
    copiarPix.addEventListener("click", () => {
      navigator.clipboard.writeText(codigoPix.textContent);
      copiarPix.textContent = "Código Copiado!";
      setTimeout(() => (copiarPix.textContent = "Copiar Código Pix"), 2000);
    });