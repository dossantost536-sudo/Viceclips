# VICE CLIPS · site de download

Página de apresentação e download do VICE CLIPS. É um site estático (HTML, CSS e JavaScript puros): não tem build nem dependências e funciona direto no GitHub Pages.

O botão de download já aponta para **https://seulink.online/ViceClips**.

## Publicar no GitHub Pages (pelo site do GitHub, sem instalar nada)

1. Entre no GitHub e clique em **New repository**.
   - Nome: `viceclips` (ou outro; ele vira parte do endereço).
   - Marque **Public**. No plano grátis, o GitHub Pages só funciona em repositório público.
   - Clique em **Create repository**.
2. Na página do repositório, clique em **uploading an existing file**.
3. Abra esta pasta no Explorer, selecione **tudo o que está dentro dela** (Ctrl+A) e arraste para a página do GitHub.
   - O `index.html` precisa ficar na raiz do repositório, não dentro de outra pasta.
   - A pasta `assets` vai junto, com as subpastas.
4. Clique em **Commit changes**.
5. Vá em **Settings › Pages**. Em "Build and deployment", deixe **Source: Deploy from a branch**, escolha **Branch: main** e a pasta **/ (root)**, e clique em **Save**.
6. Em 1 ou 2 minutos aparece no topo dessa tela: "Your site is live at `https://SEU_USUARIO.github.io/viceclips/`".

### Depois de publicar (recomendado)

Para a prévia com imagem aparecer quando o link é compartilhado no WhatsApp ou no Discord, troque em `index.html` (dá para editar no próprio GitHub, no lápis ✏️):

```html
<meta property="og:image" content="assets/img/capa.png">
```

pelo endereço completo:

```html
<meta property="og:image" content="https://SEU_USUARIO.github.io/viceclips/assets/img/capa.png">
```

### Pelo terminal (alternativa)

Dentro desta pasta:

```
git init
git add .
git commit -m "Site do VICE CLIPS"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/viceclips.git
git push -u origin main
```

Depois siga o passo 5 acima.

## Mudar o link de download ou a versão

Tudo fica em `assets/js/config.js`:

```js
linkDownload: "https://seulink.online/ViceClips",
versao: "2.1.0",
tamanho: "690 MB",
sha256: "B3C12898…",
```

- Numa versão nova do app, troque `versao`, `tamanho` e `sha256`. O SHA-256 está no `.sha256.txt` gerado junto com o instalador.
- O instalador (~690 MB) **não** vai para o GitHub, que recusa arquivos acima de 100 MB. Ele fica onde o link aponta.

## O que tem na pasta

```
index.html              a página
404.html                página para endereço errado (o GitHub Pages usa sozinho)
robots.txt              libera a página para o Google
.nojekyll               avisa o GitHub Pages para servir os arquivos como estão
assets/css/estilo.css   visual (mesmo tema do app: escuro, rosa de acento, vidro líquido)
assets/js/config.js     link do download, versão, tamanho e SHA-256
assets/js/site.js       botões, animações de entrada e legenda do celular
assets/fonts/           Figtree e Montserrat ExtraBold (licença livre, ver LICENCAS.txt)
assets/img/icone.svg    ícone da aba do navegador
assets/img/capa.png     imagem de compartilhamento (1200x630)
```

## Testar no PC

Dois cliques no `index.html` abrem a página no navegador.
