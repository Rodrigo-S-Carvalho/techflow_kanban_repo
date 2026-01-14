# techflow_kanban_repo
Repositório de projeto para empresa fictícia TechFlow Solutions
Projeto contém o repositório chamado techflow_kanban_repo e o projeto KanBan chamado teckflow_kanban.
#Objetivo

#Levantamento de requisitos

* Criar um sistema prático, confiável e intuitivo de controle logístico, com status de entregas e possibilidade de edição e exclusão de informações, exceto em caso de entregas já concluídas que passam a ser provas documentais concretas.

* Cliente solicita criação de um jogo da velha básico. Jogo deve conter sistema de placar e jogador não pode modificar jogadas já realizadas. Não há limites de partidas e não haverá multiplayer nesta versão.

#Requisitos Funcionais

SISTEMA PRINCIPAL
* Controle logístico com login de usuário (login padrão é user admin@logistica.com e senha: 1234). Sistema logístico dará acesso ao jogo, através do botão "Happy Hour". Controle logístico permite listagem e exclusão de entregas a fazer e possui status visual de cada entrega. Entregas realizads não devem ser editadas nem excluídas

JOGO 
* Sistema de cadastro e login de usuário e salvamento de pontos por partida (histórico de pontuações)
* Permitir escolha de símbolo X ou O e mudança de nome do jogador (até 20 caracteres)
* Tabuleiro HTML 3 x 3 com blocos clicáveis.
* Sistema de placar Jogador vs CPU
* Indicação do status da partida
* Botão "Reiniciar Partida"
* Partidas alternam entre jogador humano e CPU, aumentando o desafio entre cada partida.

#Requisitos Não Funcionais

SISTEMA PRINCIPAL
*Sistema de fácil acesso, confiável e intuitivo ao usuário. Sistema deve ser protegido por login. 

JOGO
* Jogo simples para um jogador
* Tema amigável e responsivo
* Sem limites de tempo ou de números de partidas
* Sem restrições de acesso ou de idade
* Sem coleta de dados persistentes de usuários
* Sem versões pagas nem versões adicionais para download
* Sem links externos
* Experiência sem anúncios

#Escopo

#Tecnologia

#Gestão do projeto

*Metodologia Kanban via GitHub Projects

* Modificação do modelo Kanban original, mantendo apenas colunas "A fazer", "Em progresso" e  "Concluída", traduzidas do inglês, caso alguém da equipe tenha dificuldades com o idioma original.

*Histórico de desenvolvimento

*Hitórico de commits

Commits: feat, fix, docs, test e build, perf, style, refactor, chore, ci, raw, cleanup e remove

#Entrevista original com o cliente
#Essa entrevista não prevê futuras modificações solicitadas pelo cliente. Modificações serão acrescidas ao log deste arquivo. A primeira versão do jogo deve conter o que se segue:

#Pergunta 1 - Do que se trata o projeto?

#Resposta 1 - um jogo da velha simples em HTML, CSS e JavaScript. O projeto principal e final deve ser um sistema de controle logístico para o cliente. 

#Pergunta 2 - Qual a mecânica do jogo?

#Resposta 2 - jogador deve clicar em um dos blocos da matrix 3 x 3 do jogo. Após jogar, CPU faz sua própria jogada. Jogador deve ser impedido de editar movimentos próprios ou da CPU.

#Pergunta 3 - O jogador pode escolher entre X ou O?

#Resposta 3 - Sim. Jogador deve ser capaz de escolher X ou O antes de cada nova partida iniciar.

#Pergunta 4 - Há sistema de pontos?

#Resposta 4 - Sim, deve haver sistema de pontos a cada partida concluída. Tanto CPU quanto jogador devem receber pontos.

#Pergunta 5 - O jogo deve permitir multiplayer?

#Resposta 5 - Ainda não. Por enquanto, o jogo deve ser single player e um banco de dados (back-end) ainda não deve ser implementado. (fix - sistema de login e salvamento de partidas e pontos criados na issue #5)

#Pergunta 6 - Há um limite de tempo ou de pontos para novas partidas?

#Resposta 6 - Não. O jogador deve ser capaz de jogar indefinidamente, até desistir fechar o jogo.

#Pergunta 7 - Apesar de não haver banco de dados, o jogador pode escolher o nome a ser exibido?

#Resposta 7 - Sim, o jogador pode informar o nome, que não deve ser salvo em banco de dados quando jogo for fechado (nome pode ficar salvo no histórico ou na cache do navegador do jogador, mas isso deve independer do sistema do jogo, e sim do próprio navegador utilizado).


#Pergunta 8 - Deve haver algum disclaimer, alguma restrição ou alguma limitação legal para o jogo?

#Resposta 8 - Não, o jogo não deve impor nenhuma limitação nem coletar nenhuma informação identificável ou persistente do jogador, incluindo não gerar cookies. No entanto, é sensato que haja uma página com o aviso de que não há nenhum cookie a ser confirmado e deixar claro que nenhuma coleta de dados é feita, e nem restrições de idade ou de qualquer outro tipo existem.

#Pergunta 9 - Deve haver algum tipo de link externo?

#Resposta 9 - Não, o jogo não deve conduzir o jogador a nenhum outro lugar.

#Pergunta 10 - Há alguma versão paga e/ou para download do jogo, com mais recursos?

#Resposta 10 - Não, nenhuma outra versão além dessa deve ser disponibilizada no momento.

#LOG de mudanças

1 Cliente solicitou que o jogo inicie com possibilidade de escolha de símbolos X ou O e mudança do próprio nome (até 20 caracteres), antes da partida. Mudanças feitas em commits anteriores. (concluído na issue #3)

2 Usuário percebeu que jogo é muito fácil para o jogador humano, pois é ele quem sempre inicia o jogo. Alternar entre jogador primeiro, então CPU começando cada partida para aumentar o desafio. (concluído na issue #4).

3 Cliente decidiu incluir um sistema de login ao projeto. Agora, o usuário deve logar com algum e-mail e uma senha. Nada muda internamente, a não ser o salvamento automático das pontuações de cada partida. Jogador pode consultar o resultado em um log.

4 Cliente solicitou a implementação do sistema principal, um controle logístico ao projeto, sendo este agora o projeto principal. O jogo segue sendo acessível dentro do sistema principal.
