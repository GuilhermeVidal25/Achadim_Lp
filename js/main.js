/*
- Lista de espera. Para receber os e-mails de verdade, preencha WAITLIST_ENDPOINT
- com a URL de um serviço de formulários (Formspree, Tally, Google Apps Script)
- ou de uma tabela do Supabase. Vazio = só mostra a confirmação na tela.
 */
var WAITLIST_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzch0UoO3hKDhvFEpf_BtF8UOHpZluZDaOXcmGyCk1ZIdSwsSuUM8zw0V9WGy0b-LubUg/exec';

(function () {
  var header = document.getElementById('top');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // "Quero cadastrar minha loja" já marca o perfil lojista no formulário final.
  document.querySelectorAll('[data-role="lojista"]').forEach(function (a) {
    a.addEventListener('click', function () { var r = document.getElementById('perfil-lojista'); if (r) r.checked = true; });
  });

  var valid = function (v) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim()); };

  document.querySelectorAll('form.signup').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type=email]');
      var msg = form.querySelector('.form-msg');
      var perfil = form.querySelector('input[name=perfil]:checked');
      if (!valid(input.value)) {
        msg.className = 'form-msg err';
        msg.textContent = 'Confira o e-mail: ele precisa ter @ e um domínio, como nome@email.com.';
        input.focus();
        return;
      }
      var data = { email: input.value.trim(), perfil: perfil ? perfil.value : 'cliente', origem: form.id };
      var done = function () {
        msg.className = 'form-msg ok';
        msg.textContent = data.perfil === 'lojista'
          ? 'Pronto! Avisamos ' + data.email + ' assim que o cadastro de lojas abrir na sua cidade.'
          : 'Pronto! Avisamos ' + data.email + ' quando o Achadim chegar na sua cidade.';
        input.value = '';
      };
      if (!WAITLIST_ENDPOINT) return done();
      
      fetch(WAITLIST_ENDPOINT, { 
        method: 'POST', 
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
        body: JSON.stringify(data) 
      })
        .then(function (r) { done(); })
        .catch(function () { msg.className = 'form-msg err'; msg.textContent = 'Não conseguimos registrar agora. Tente de novo em alguns minutos.'; });
    });
  });
})();