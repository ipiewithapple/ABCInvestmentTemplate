Источник https://habr.com/post/350886/.

Структура проекта:

	--dist - папка, в которую собирается проект  
	--src - папка с исходниками
		-favicon - иконки сайта  
		-fonts - шрифты  
		-html - заготовки html-страниц 
			-includes - встариваемые шаблоны(footer, header, components, etc)  
			-views - страницы  
		-img - общие изображения(лого, bg, etc)
		-js - javascript файлы  
		-scss - scss файлы  
		-uploads - изображния статей  
	--package.json - файл настроек Node.js  
	--webpack.config.js - файл настроек Webpack  
Команды:

npm run i - загрузка/обновление пакетов  
npm run dev - сборка проекта без оптимизации  
npm run build - итоговая сборка с оптимизацией  
npm run start - запуск локального сервера (localhost://8080) со слежением за изменениями файлов  

При создании новых html - файлов необходимо пересобирать проект заново командой npm run build

Установленные пакеты:

babel  
bootstrap  
slick-slider  
postcss(autoprefix, cssnano)  
sass(scss)  
jquery  
jquery-ui  
Новые пакеты устанавливать  

npm -i название --save-dev - пакеты необходмые для сборки  
npm -i название --save - библиотеки/фреймворки