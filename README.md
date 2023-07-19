# Fpass Test

Esse projeto foi criado para o desafio da vaga de backend da empresa Fpass.

## 💻 Tencologias utilizadas

- [Node.js](https://nodejs.org/en)
- [NestJS](https://nestjs.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

Resumidamente, este teste foi desenvolvido utilizando Node.js com o framework NestJS e banco de dados SQLITe em memória, seguindo os princípios da clean architecture e do SOLID. O Docker foi utilizado para criar uma imagem padrão, facilitando os testes e garantindo consistência entre os ambientes. Para realizar os testes unitários, foi utilizado o Jest, enquanto o Swagger foi empregado para criar uma documentação e uma forma mais simples de testar a API.

## 🛠️ Requisitos de execução/instalação

Para rodar este projeto, precisa ter o node ou Docker instalado em sua máquina. Se não tem o Docker ou Node instalado, pode encontrá-los no site oficial para download: [Docker](https://www.docker.com/), [Node.js](https://nodejs.org/en).

## Instalação

1. Clone o repositório em sua máquina:

   ```bash
   git clone https://github.com/IgorVVieira/test_fpass_igorvvieira.git
   ```

2. Mude para o diretório do projeto:

   ```bash
   cd test_fpass_igorvvieira
   ```

3. Rode o projeto utilizando Docker Compose (Caso queira):
   ```bash
    docker build -t test_fpass_igorvvieira .
    docker run --name test_fpass_igorvvieira -p 3000:3000 test_fpass_igorvvieira
   ```
4. Rode Node local:
   ```bash
     npm install
     npm run start:dev
   ```
5. O projeto estará rodando em sua máquina na porta 3000.

## Como testar

Para facilitar a realização dos testes e torná-los mais visualmente acessíveis, foi adicionada uma documentação do Swagger que permite testar todos os endpoints da API. Após instalar o projeto, você pode acessar a documentação em [Documentação](http://localhost:3000/docs) para explorar e testar os endpoints de forma mais fácil e interativa.

## ✨ Deploy

Com o objetivo de implementar novas funcionalidades além das requeridas no projeto, a aplicação foi implantada utilizando o [Render](https://render.com/), tornando-a disponível em [Produção](https://test-fpass.onrender.com/api/heroes). Agora, é possível realizar todas as operações no endpoint, e os dados são persistidos em um banco em memória. O deploy é feito automaticamente sempre que um novo código é enviado para a branch master, garantindo um processo de implantação contínuo.

## 🧪 Rodar testes de unidade

Por padrão, a cada push em qualquer uma das branches deste projeto, os testes unitários serão executados automaticamente. Isso foi implementado por meio das actions do GitHub, garantindo que cada nova funcionalidade adicionada seja testada e verificada quanto a possíveis regressões, garantindo assim a integridade do código existente. Essa abordagem ajuda a assegurar que o novo código esteja correto e não cause problemas nas funcionalidades já existentes.

Para rodar os testes de forma manual usando Docker:

```bash
docker exec -it test_fpass_igorvvieira npm run test
```

Usando Node local

```bash
npm run test
```

## 🧪 Rodar testes End-to-End (E2E)

A aplicação possui dois controladores: [FavoriteHeroesController](./src//favorite-heroes//favorite-heroes.controller.ts) e [HeroesController](./src//heroes/heroes.controller.ts). Para cada um deles, foram desenvolvidos dois testes end-to-end (E2E). No caso do FavoriteHeroesController, optou-se por utilizar um banco de dados SQLite, que é salvo localmente, especificamente para executar os testes de integração. Esse banco de dados de teste, localizado em [Database Test](./database/test.sqlite), não interfere na aplicação principal, que continua a utilizar o banco em memória. Essa abordagem permite que os testes de integração sejam executados de forma isolada, garantindo a integridade dos dados da aplicação em produção.

Para rodar os testes e2e usando Docker:

```bash
docker exec -it test_fpass_igorvvieira npm run test:e2e
```

Usando Node local:

```bash
npm run test:e2e
```

## 🎉 Requisitos

Além dos requisitos mencionados no desafio, decidi implementar algumas regras de negócio, validações relevantes e melhorias, que incluem:

- [x] Ao salvar um herói como favorito, também é armazenado um objeto JSON simples contendo os dados essenciais do herói, como nome e descrição. Isso facilita a busca e compreensão dos dados posteriormente.
- [x] Impedir a adição de um herói aos favoritos caso ele não exista na API da Marvel.
- [x] Evitar que o mesmo herói seja adicionado como favorito duas vezes.
- [x] Não permitir a remoção de um herói dos favoritos se ele não estiver presente na lista de favoritos.
- [x] Por consequência, não é possível excluir um herói favorito que não está presente na API da Marvel.
- [x] Realização de deploy simplificado para produção.
- [x] Utilização de ambiente Docker para executar o projeto.
- [x] Documentação completa da API.
- [x] Implementação de testes unitários.
- [x] Implementação de testes de integração.

Todas essas funcionalidades adicionais, além dos requisitos obrigatórios, foram implementadas e estão cobertas por testes de unidade e integração.

## 😁Considerações finais

Foi extremamente gratificante participar desse desafio, pois pude aplicar conceitos fundamentais da arquitetura limpa e do SOLID. Além disso, tive a oportunidade de integrar a API da Marvel, realizar testes de unidade e integração para garantir a qualidade e consistência do produto. Através desse projeto, adquiri conhecimentos valiosos e pude praticar habilidades essenciais. Mesmo sendo um projeto simples, estou satisfeito em demonstrar meu comprometimento com a entrega. Agradeço pela oportunidade! Estou à disposição caso haja alguma dúvida.
