# Passos para configurar micro front-ends:

## Configurando aplicação com webpack
- Configurar bundle da aplicação com script de build e server de desenvolvimento usando webpack e babel com loaders para typescript, css/sass, file loader, etc
- Configurar libs externas no webpack e carregar react e react-dom por CDN
- Configurar systemjs no index.html e formato do bundle compativel com systemjs no webpack.config
- Alterar carregamento das libs externas de CDN para carregamento dinâmico com systemjs
- Importar arquivo de bundle principal da aplicação com systemjs no index.js

## Usando single-spa
- Instalar single spa e configurar import map com endereços remotos dos micro front-ends
- Configurar 2 arquivos webpack.config, um para aplicação root de desenvolvimento e outro para aplicação exportada pelo single-spa
- Configurar redirects do netlify e proxy no webpack.config.js

## Extras:
- Configurar webpack bundle analyzer
- Configurar loader para webworkers

## Outras coisas para depois
- Jfrog
- Split.io (feature toggle e teste A/B)
- Lerna e monorepo
- Storybook
- Netlify
- UI kit, styled components
- Configuração personalizada do create-react-app com webpack.config.js
- Jest, react testing library
- ESLint e Prettier
- React I18n
- Sentry
- New Relic
- Analytics
- Apollo Client / React query
- XState / Redux
- React Hooks
- Formik, Yup, React-hook-form
- React use
- CircleCI e github actions, workflows, pipelines, jobs, orbs, 
- Netlify
- Lib de mascaras, formatação, datas
- Error boundaries
- DDD
- Cypress
- Lighthouse
- CircleCI github bot para comentários
- Github PR template, CODEOWNERS, CHANGELOG, README
- Security headers
- Github repository as npm dependency - including private repository
- Create react app template
- Gerador de arquivos e templates com plop.js
### Mais dobre micro front-ends
- Framework do airbnb: https://ara-framework.github.io/website/
- Webpack module federation - Workshop no doWhile - https://youtu.be/C41PHrwX7o4
- Canal do Matheus Castiglione - https://www.youtube.com/c/MatheusCastiglioni
- Canal do Jack Herrington - https://www.youtube.com/c/JackHerrington
- FreeCodeCamp Jack Herrington - https://youtu.be/lKKsjpH09dU
- https://martinfowler.com/articles/micro-frontends.html
- https://medium.com/the-hamato-yogi-chronichels/lets-build-micro-frontends-with-nextjs-and-module-federation-b48c2c916680
