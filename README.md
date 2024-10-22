# React + Vite

1. Устанавливаем gh-pages в зависимости npm install gh-pages --save-dev
2. В package.json прописываем "homepage": "https://JeckJonnyQ.github.io/Airbnb-Scrimba" с никнеймом
   гитхаба через io и название проекта.
3. Далее прописываем в "scripts" ----> "predeploy": "npm run build" и "deploy": "gh-pages -d dist", для
   создания ветки gh-pages при деплое проекта, где дист название папки со сбилдженым проектом.
4. Удалить папку dist (если она уже создана)
5. npm run build (билдим проект).
6. npm run deploy (билдим проект на гх-пейджес).
