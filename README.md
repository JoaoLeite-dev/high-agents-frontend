# High Agents Frontend

Este é um frontend React desenvolvido com Vite e TypeScript para consumir a API do High Agents Chat.

## Funcionalidades

- Interface de chat moderna e responsiva
- Integração com API REST do backend
- Suporte a mensagens em tempo real
- Design responsivo com animações suaves
- Validação de entrada e tratamento de erros

## Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server rápido
- **Axios** - Cliente HTTP para requisições API
- **CSS3** - Estilização com animações e responsividade

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
├── services/           # Serviços de API
├── types/             # Definições de tipos TypeScript
├── App.tsx            # Componente principal
├── App.css            # Estilos da aplicação
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## Como Executar

### Pré-requisitos

- Node.js (versão 20.19+ ou 22.12+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/JoaoLeite-dev/high-agents-frontend.git
cd high-agents-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## API Endpoints

O frontend consome os seguintes endpoints da API:

- `POST /api/Chat/start` - Inicia uma nova conversa
- `POST /api/Chat/send` - Envia uma mensagem
- `POST /api/Chat/test` - Testa o endpoint de mensagens
- `GET /api/Chat/{conversationId}` - Busca histórico da conversa

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm run lint` - Executa o linter
- `npm run preview` - Preview da build de produção

## Desenvolvimento

### Estrutura de Pastas

- `src/services/` - Contém os serviços para comunicação com a API
- `src/types/` - Definições de interfaces TypeScript
- `src/components/` - Componentes reutilizáveis (se houver)

### Estilização

O projeto utiliza CSS puro com:
- Design system consistente
- Animações suaves
- Layout responsivo
- Tema claro

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
