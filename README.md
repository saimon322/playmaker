#Рекомендации по написанию темы

### Правила вывода мета-полей при работе с ACF:
- Каждую секция верстки объединяем [в ACF группу](https://www.advancedcustomfields.com/resources/group/) и выводим нужные поля в Sub Fields. 
- В файле шаблона секции, для примера [template-parts/front-page/section-example-1.php](template-parts/front-page/section-example-1.php), на первой строчке файла получаем массив со всей группой полей секции и работаем уже с полученным массивом.
> Для чего мы это делаем? Потому что все мета-пол куда проще достать одним запросом для блока, нежели делать множество мелких. Помимо этого, такие группы легко переиспользовать на других страницах, ACF позволяет копировать поле в другие в другие группы полей.

### Работа с хуками и фильтрами:
- В директории [app](app), в подпапках, располагаем классы. Файлы классов подключаются автоматически, это реализовано в файле [app/Autoloader.php](app/Autoloader.php)  
- Класс должен отвечать только за предназначенную для него область. Не нужно создавать класс в котором будет код вообще для всего что только можно, все должно быть логично.

> Пример использования: 
> В контроллере [app/Controllers/FrontPageController.php](app/Controllers/FrontPageController.php), в методе-конструкторе мы делаем проверку [is_front_page()](https://misha.agency/wordpress/is_front_page.html) и инициализируем фильтр который нам необходим только на главной странице.

### Работа со скриптами и стилями:
- Вся сборка фронта проекта должна храниться в папке assets
- Стили и скрипты подключаем в [functions.php](functions.php), в функции enqueue_theme_style_scripts()
- В случае, если необходимо передать какие-то переменных в js скрипт нужно использовать [wp_localize_script()](https://misha.agency/wordpress/wp_localize_script.html). Мы не выводим значения переменных для скриптов в header.php и footer.php.

### Подключение Composer
В директории [app](app) делаем `composer init`
После чего [app/Autoloader.php](app/Autoloader.php) самостоятельно подключит Composer и его зависимости.

### Натяжка меню
Для вывода меню в 99% случаев используем стандартную функцию [wp_nav_menu()](https://misha.agency/wordpress/wp_nav_menu.html). В случае, если нужно кастомизировать верстку меню, либо что-то в нее добавить(контакты, к примеру) мы создаем наш кастомный класс, наследуем его от [Walker_Nav_Menu](https://developer.wordpress.org/reference/classes/walker_nav_menu/) и переопределяем нужные методы рендера меню. Для примера в репозиторий я добавил [app/Walkers/HeaderWalker.php](app/Walkers/HeaderWalker.php). Как результат, мы объявляем наш класс в массиве аргументов функции wp_nav_menu().
```php
wp_nav_menu(
    array(
        'theme_location' => 'header-menu',
        'container'      => '',
        'items_wrap'     => '%3$s',
        'walker'         => new HeaderWalker(),
    )
);
```
