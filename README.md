# 🕹️ TicTacToe (Jogo da Velha) - Experimento de IA Generativa

Este projeto é parte de uma pesquisa educacional para investigar o **débito cognitivo no desenvolvimento de software utilizando IA Generativa**. A conclusão das atividades propostas neste repositório vale **3 pontos da ATV2**.

## 📄 Termo de Consentimento
Na pasta raiz deste projeto, dentro de `artifacts/consentimento.md`, você encontra o formulário de consentimento. Antes de iniciar, leia e decida se você concorda ou não com o uso dos seus dados (que serão devidamente anonimizados) no experimento científico para contribuir com a pesquisa.

## 🛠️ Configuração Inicial (Fork e Upstream)
Para iniciar o trabalho, você deve criar a sua própria versão (fork) do repositório base e configurar o upstream:

1. Acesse o repositório original e clique no botão **Fork**:
   [https://github.com/viccsneto/tictactoe_experiment](https://github.com/viccsneto/tictactoe_experiment)
2. Clone o repositório "forkado" para o seu ambiente local:
   ```bash
   git clone https://github.com/SEU_USUARIO/tictactoe_experiment.git
   cd tictactoe
   ```
3. Configure o repositório original como *upstream* para manter seu ambiente sincronizado (e possibilitar a PULL REQUEST):
   ```bash
   git remote add upstream https://github.com/viccsneto/tictactoe_experiment
   ```

---

## 📝 Tarefas do Experimento

O contexto de desenvolvimento envolverá a resolução de duas tarefas usando a assistência do GitHub Copilot.

### Tarefa 1: Emojis no lugar de X e O
Nesta primeira missão, você deve **substituir os símbolos tradicionais `X` e `O`** do jogo da velha por emojis:
- Onde era `X`, passará a ser 🐱 (cat face).
- Onde era `O`, passará a ser 🐶 (dog face).

**⚠️ Regras da Tarefa 1 (Pipeline MasteryAware):**
- Durante esta etapa, o assistente Copilot operará sob as regras do pipeline **MasteryAware**, projetado para garantir que você se mantenha como o "designer do software" em vez de apenas um revisor passivo de código gerado.
- **Passo 1: Todo.md (Especificação Formal):** Antes do Copilot gerar qualquer código para você, **VOCÊ** deve preencher manualmente o arquivo `brainsback/TODO.md`. Ele serve como sua lousa para articular o problema, os requisitos e os critérios de sucesso. O Copilot é proibido de editar este arquivo; se você tentar pedir ajuda sem preenchê-lo, ele se recusará a codificar.
- **Passo 2: Implementação Assitida:** Uma vez que o `TODO.md` for preenchido com suas diretrizes, você e o Copilot formarão uma dupla (*Pair Programming*). Interaja naturalmente com o agente para atingir o objetivo, realizando testes contínuos da solução. O Copilot eventualmente gerará um artefato autônomo de relatório (`brainsback/REPORT.md`) resumindo o que construiu.
- **Passo 3: REACTO.md (Prova de Domínio):** Após a implementação concluir, **VOCÊ** elaborará ativamente o artefato `brainsback/REACTO.md` unindo a análise do sumário gerado pela IA com a conferência das linhas de código. O formato `REACTO` significa:
  - **R (Repeat):** Reafirme o problema com suas próprias palavras.
  - **E (Examples):** Dê exemplos de entrada/saída (ou ação/resultado) em casos de teste na vida real.
  - **A (Approach):** Qual estratégia em alto nível foi utilizada para solucionar o problema?
  - **C (Code):** Exponha os trechos mais cruciais, que funções realizam o quê, em quais arquivos estão definidas e quem as chama.
  - **T (Test):** Rastreie os resultados relatando testes e cenários experimentados (manuais, automáticos).
  - **O (Optimize):** Sugira melhorias de complexidade ou discuta os *"trade-offs"* estabelecidos na implementação. Nem sempre isso se aplica.
- Você pode e deve fazer qualquer questionamento ou tirar dúvidas com o próprio GitHub Copilot e/ou com o professor durante o processo.
- **Antes de fazer o commit**, você **deve perguntar ao Copilot**: *"Minha tarefa está pronta para commit e de acordo com as regras do pipeline mastery-aware?"*
- Apenas quando o Copilot validar sua conclusão (verificando os artefatos) e der o "OK", você deverá realizar o commit de todos os arquivos modificados nesta primeira etapa.

### Tarefa 2: Implementação do Placar (Score)
Nesta segunda missão, você deverá **implementar um sistema de pontuação**, contabilizando e exibindo as vitórias do Gato (🐱) e do Cachorro (🐶).

**⚠️ Regras da Tarefa 2:**
- **Importante:** Antes de escrever o código ou conversar com o Copilot sobre essa tarefa, **desabilite o pipeline**. Para isso, execute no terminal o script adequado ao seu Sistema Operacional:
  - Linux / Mac: `./pipeline.sh OFF`
  - Windows: `pipeline.bat OFF`
- A partir de agora, o desenvolvimento não será mais monitorado pelo pipeline MasteryAware. Você deve desenvolver toda a solução interagindo livremente com o Copilot pelo chat.
- Garanta que a sua implementação esteja funcionando corretamente através de testes manuais e valide se os testes unitários do projeto continuam passando.
- Assim que o placar estiver totalmente funcional, realize um novo commit contendo as modificações referentes à segunda tarefa.

---

## 🔍 Revisão final e Pull Request

Após as implementações, finalizaremos com uma dinâmica de perguntas.
- Solicite explicitamente ao Copilot no chat: **"Quero iniciar a revisão socrática."**
- O agente revisor irá analisar os códigos que você produziu e realizará algumas perguntas para compreender sua linha de raciocínio e testar seu domínio sobre o código.
- Essa etapa irá gerar mais dois artefatos (arquivos) consolidados na pasta do projeto ao fim da interação.
- **Atenção:** Você apenas poderá commitar seus arquivos finais e submeter o **Pull Request** para aprovação do repositório original da disciplina quando o revisor socrático concluir a revisão e afirmar explicitamente que *está tudo pronto para o PR*.