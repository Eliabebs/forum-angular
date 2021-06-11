# Angular - Perguntas e Respostas

## Síntese
Nessa aplicação, usuários anônimos poderão adicionar perguntas ao site e também poderão responder perguntas já existentes

## API
  - ### Banco de Dados 
    - #### Tabelas
      - [x] Perguntas
      - [x] Respostas
      - **_Crie outras, se necessário_**
    - #### Regras iniciais
      - [x] Essas tabelas (perguntas e respostas) devem se relacionar. Analise a maneira mais eficaz em sua opinião de como elas devem se relacionar. 
      - [x] Sem exceções, qualquer usuário no site pode criar perguntas ou respondê-las
    - ### Tipo de Banco
      - [x] Use MySQL (Sequelize) ou Mongodb (Mongoose)

## Frontend
  - ### Páginas
    - [] **Home**: Na página inicial, listará as perguntas (da mais atual a mais antiga) em cards onde mostrará o título da pergunta, o conteúdo da pergunta e um botão _ver mais_ para poder ver mais dados da pergunta e suas respectivas respostas. Além disso, no topo da página, haverá um campo para adicionar uma nova pergunta, com o campo de título e conteúdo da pergunta e um botão para adicionar
    - [] **Página da pergunta**: Na página da pergunta mostrará um card com os mesmos dados mostrados na home da pergunta. Além disso, abaixo da pergunta, terá um campo para escrever uma nova resposta e um botão para adicioná-la. E abaixo desse campo, a listagem, também cards, das respostas da respectiva pergunta

## Para a instalação
    - [] MySQL
    - [] MySQL Workbench
    - [] Insomnia
