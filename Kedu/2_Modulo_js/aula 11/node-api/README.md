* Rodando o servidor Node.js na sua máquina

O Node.js é um ambiente de desenvolvimento backend para o Javascript. Por meio dele é possivel criar um servidor e faze-lo rodar na sua maquina. Para que funcione, siga estes passos:

** 1. Abra a pasta que contém os arquivos necessários no terminal. (O VSCode possui um terminal)
** 2. Digite o comando `npm install` para instalar as dependencias do projeto a partir do package.json. Ele irá criar uma pasta "node_modules".
** 3. Digite o comando `npm start` e espere aparecer a mensagem "Rodando na porta 5500". Você consegue visualizar se está funcionando digitando no navegador a rota "localhost:5500/api".

* Caso o comando não funcione:

** 1. Apague a pasta node_modules e os arquivos package.json e package-lock.json
** 2. Digite no terminal o comand `npm init` para iniciar o servidor novamente. Ele criará um arquivo package.json e pedirá as informações sobre nome do package, versão e tudo mais. Apenas se atentem quando ele perguntar do `entry point`, digitem `rotas.js`. 
** 3. Depois do arquivo package.json criado, na sessão de scripts, apague a linha "test" e coloque no lugar "start": "nodemon ." (com aspas). Verifique se na linha 5, o "main" está com o valor do arquivo `rotas.js`, senão modifique para tal
** 4. Digite no terminal o comando `npm install`
** 5. Digite entao o comando `npm install nodemon`, que é uma biblioteca que auxilia em mudanças no servidor
** 6. Digite então o comando `npm start` e deverá funcionar.
** 7. Caso dê erro de `module not found` com a biblioteca espress.js, apenas basta instalar `npm install express`. Se der erro com a biblioteca cors , rode o comando `npm install cors`, e tente rodar o `npm start` novamente.