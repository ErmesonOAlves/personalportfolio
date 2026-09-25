# Checklist de SEO — Pós-deploy

Arquivos já no repositório: meta de verificação do Google, `og-image.jpg`, favicons,
`robots.txt`, `sitemap.xml` e dados estruturados (Person + WebSite + ProfilePage).

## 1. Google Search Console (obrigatório)

1. Acesse https://search.google.com/search-console
2. **Adicionar propriedade** → escolha a opção **Arquivo HTML** (o arquivo
   `google27c0c4044396f35f.html` já está publicado na raiz do site)
   - Alternativa, se escolher **Tag HTML**: use o conteúdo
     `google27c0c4044396f35f.html` (também já está no `<head>` do index.html)
3. Clique em **Verificar**
4. Depois de verificar, em **Sitemaps** → envie `sitemap.xml` → **Enviar**
5. Em **Inspeção de URL** → digite `https://personalportfolio-nine-peach.vercel.app/`
   → **Solicitar indexação**

## 2. Bing / DuckDuckGo (alimenta também o Yahoo e o DuckDuckGo)

1. Acesse https://www.bing.com/webmasters
2. Adicione a propriedade (dá para importar do Google Search Console)
3. Envie o sitemap `https://personalportfolio-nine-peach.vercel.app/sitemap.xml`
4. Peça indexação da URL principal

## 3. Sinais de entidade (backlinks gratuitos)

- **GitHub**: torne o repositório público e coloque o link do portfólio no
  README; adicione `https://personalportfolio-nine-peach.vercel.app` no campo
  *website* do perfil (github.com → Edit profile)
- **LinkedIn**: adicione o link do portfólio no campo *Website* do perfil
- Mantenha o nome "Ermeson de Oliveira Alves" igual no site, GitHub e LinkedIn

## 4. Validações (depois do deploy)

- Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- PageSpeed Insights: https://pagespeed.web.dev/

## 5. Acompanhamento

- No Search Console, aba **Páginas indexadas**: deve sair de "Não indexada"
  em 1 a 14 dias após a solicitação
- Checagem manual: buscar `site:personalportfolio-nine-peach.vercel.app`
  e o nome "ermeson de oliveira alves" no Google
