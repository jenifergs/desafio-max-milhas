# Seleciona uma imagem linux que contém já instalado o node e o npm a versão alpine é uma versão reduzida diminuido o tamanho do download
FROM node:18-alpine as backend_node 



ARG ENVIRONMENT


# Define a area de trabalho que é onde os arquivos vão ficar como /backend
WORKDIR /backend

# Copia o package json para dentro de backend
COPY package.json ./

# Adiciona tudo que não estiver no .dockerifleignore dentro de backend
ADD . ./


# No Bloco de codigo abaixo criamos um arquivo de script que será executado quando o container for iniciado, ele é criado para que possamos rodar os comandos de forma sequencial dentro do container
# Instala todas as dependencias
RUN echo "npm install --silent" > 'init.sh' 
# Transforma arquivos TS em JS e os adiciona a pasta build
RUN echo "npm run build" >> 'init.sh'
# Roda as migrações do banco de dados
RUN echo "npm run migrate" >> 'init.sh'
# Roda o servidor no modo de desenvolvimento
RUN echo "npm run prod" >> 'init.sh'

# Da permissão de execução para o arquivo init.sh
RUN chmod +x init.sh

# Roda o servidor no modo de produção
CMD ["sh", "init.sh"]


