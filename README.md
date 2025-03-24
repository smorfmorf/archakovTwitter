# My Twitter App

## Описание
My Twitter App - это приложение, позволяющее пользователям создавать посты, аналогичные Twitter. В приложении реализована функция `postSize`, которая вычисляет длину текста поста, игнорируя ссылки.

## Установка

1. Склонируйте репозиторий:
   ```
   git clone https://github.com/yourusername/my-twitter-app.git
   ```

2. Перейдите в директорию проекта:
   ```
   cd my-twitter-app
   ```

3. Установите необходимые зависимости (если есть):
   ```
   npm install
   ```

## Использование функции postSize

Функция `postSize` находится в файле `public/assets/post_size.js`. Она принимает строку (текст поста) и возвращает длину текста, игнорируя ссылки.

### Пример использования:

```javascript
import postSize from './public/assets/post_size.js';

const message1 = 'Всем привет!';
console.log(postSize(message1)); // вернет 12

const message2 = 'Привет!<https://github.com>';
console.log(postSize(message2)); // вернет 8
```

## Вклад

Если вы хотите внести свой вклад в проект, создайте новую ветку и отправьте Pull Request с описанием ваших изменений.

## Лицензия

Этот проект лицензирован на условиях MIT License.