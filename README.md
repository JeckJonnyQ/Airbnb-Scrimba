# React + Vite

1. Устанавливаем gh-pages в зависимости npm install gh-pages --save-dev
2. В package.json прописываем "homepage": "https://JeckJonnyQ.github.io/Airbnb-Scrimba" с никнеймом
   гитхаба через домен io и название проекта.
3. Далее прописываем в "scripts" ----> "deploy": "npm run build && gh-pages -d dist", для
   создания ветки gh-pages при деплое проекта, где дист название папки со сбилдженым проектом.
4. Прописать base: "/Airbnb-Scrimba" в Vite конфиге (путь к репозиторию с названием нашей папки/проекта)
5. Удалить папку dist (если она уже создана)
6. npm run build (билдим проект).
7. npm run deploy (билдим проект на гх-пейджес).
