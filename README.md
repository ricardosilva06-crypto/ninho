# Ninho

O vosso cantinho partilhado: listas, calendário, orçamento, documentos, datas especiais, refeições, horários, receitas, lugares, mensagens, galeria e contactos. É uma app web instalável (PWA) com dados sincronizados em tempo real através do Supabase.

## Configuração (uma vez)

1. **Supabase**: cria um projeto em supabase.com. No *SQL Editor*, cola o conteúdo de `supabase/schema.sql` e carrega em *Run*.
2. Em *Authentication → URL Configuration*, põe o endereço da app (ex.: `https://<utilizador>.github.io/ninho/`) em *Site URL*.
3. Copia o *Project URL* e a chave *anon public* (Project Settings → API) para `js/config.js`.
4. **GitHub Pages**: Settings → Pages → Deploy from a branch → `main` / root.

## Usar

- Um de vocês cria conta e carrega em **Criar o nosso ninho**.
- Em **Nós dois** aparece o código de convite. A outra pessoa cria conta e escolhe **Entrar num ninho** com esse código.
- Para instalar no iPhone: abre no Safari → Partilhar → *Adicionar ao ecrã principal*. No Android: menu do Chrome → *Instalar app*.

## Estrutura

- `index.html`, `css/app.css`, `js/app.js`: a app (sem build, JavaScript simples).
- `js/config.js`: ligação ao Supabase.
- `supabase/schema.sql`: tabelas, regras de segurança (RLS), funções de convite e armazenamento de ficheiros.
- `sw.js`, `manifest.webmanifest`, `icons/`: instalação e funcionamento offline.
