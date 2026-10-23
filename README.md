# Achadim · landing page

Site estático: não precisa de build. Basta enviar esta pasta para qualquer hospedagem (Vercel, Netlify, GitHub Pages, Cloudflare Pages ou o servidor de vocês).

```
index.html          Página principal
termos.html         Termos de uso (em elaboração, fora do Google)
privacidade.html    Política de privacidade (em elaboração, fora do Google)
css/styles.css      Todos os estilos
js/main.js          Cabeçalho, botão "Quero cadastrar minha loja" e formulários da lista de espera
img/                Imagem de compartilhamento (1200x630), símbolo e favicon PNG
favicon.svg         Ícone da aba
apple-touch-icon.png  Ícone quando salvam o site na tela do iPhone
robots.txt          Libera o site para buscadores e assistentes de IA
sitemap.xml         Lista de páginas para o Google
llms.txt            Resumo do produto em texto para assistentes de IA
```

## Antes de publicar

1. **Domínio.** O site usa `https://achadim.com.br` como endereço provisório. Se o domínio for outro, faça "localizar e substituir" de `https://achadim.com.br` em `index.html`, `robots.txt`, `sitemap.xml` e `llms.txt`.
2. **Lista de espera.** Em `js/main.js`, preencha `WAITLIST_ENDPOINT` com a URL que recebe os e-mails (Formspree, Tally ou Supabase). Vazio, o formulário só mostra a confirmação na tela.
3. **Lojas de aplicativos.** Quando o app sair, troque os selos "Em breve" no `index.html` por links para a App Store e o Google Play.

## Depois de publicar

- Cadastre o domínio no **Google Search Console** e envie o `sitemap.xml`.
- Teste os dados estruturados em https://search.google.com/test/rich-results
- Teste a imagem de compartilhamento colando o link no WhatsApp ou em https://developers.facebook.com/tools/debug/
- Ao alterar o conteúdo, atualize a data em `<lastmod>` no `sitemap.xml`.
