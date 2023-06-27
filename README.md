# Construtora mão na massa

A construtora poderá registrar os projetos de construção de casas.

## Rodando localmente

Em seu terminal execute os seguintes comandos:

Clone o projeto

```bash
  git clone https://github.com/naymiprestes/construtora-mao-na-massa-backend
```

Entre no diretório do projeto

```bash
  cd construtora-mao-na-massa-backend
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as variáveis de ambiente no seu .env. As variáveis estão disponiveis na raíz do projeto em `.env.example`

## Gerando as migratons

Para que os dados permacerem no banco de dados é necessário gerar as migrations

- Initial Migration:

```
  yarn typeorm migration:generate src/migrations/"nome-migration" -d src/data-source
```

- Para permanecer no banco:

```
  yarn typeorm migration:run -d src/data-source
```
