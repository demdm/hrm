FROM node:12.2.0-alpine

# Папка приложения
ARG APP_DIR=/var/www/node

RUN mkdir -p ${APP_DIR}
RUN chmod -R 777 ${APP_DIR}

WORKDIR ${APP_DIR}

# Установка зависимостей
COPY package*.json ./

USER node

RUN npm install --chown=node:node
# RUN npm run tsc
# Для использования в продакшне
# RUN npm install --production

# Копирование файлов проекта
COPY --chown=node:node . .

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 8080

# Запуск проекта
## Чтобы работать через nodenom
CMD ["npm", "start"]
## Это для прода
#CMD ["node", "build/server.js"]