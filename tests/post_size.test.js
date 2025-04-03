import { assert } from 'chai';
import postSize from '../public/assets/postSize.js';

describe('Функция проверки расчета размера поста', function () {
  it('Тест 1: пустая строка', function () {
    const expectedResult = 0;
    const result = postSize('');
    assert.equal(result, expectedResult);
  });

  it('Тест 2: простой текст без ссылок', function () {
    const expectedResult = 12;
    const result = postSize('Всем привет!');
    assert.equal(result, expectedResult);
  });

  it('Тест 3: текст с одной ссылкой', function () {
    const expectedResult = 23 + 23; // длина текста + 23 за ссылку
    const result = postSize('Мой профиль https://twitter.com/user');
    assert.equal(result, expectedResult);
  });

  it('Тест 4: текст с несколькими ссылками', function () {
    const expectedResult = 26 + 23 * 2; // длина текста + 23 за каждую ссылку
    const result = postSize('Посмотрите https://example.com и https://twitter.com');
    assert.equal(result, expectedResult);
  });

  it('Тест 5: текст с длинной ссылкой', function () {
    const expectedResult = 13 + 23; // длина текста + 23 за ссылку (независимо от длины)
    const result = postSize('Статья: https://www.example.com/articles/this-is-very-long-url-for-interesting-article');
    assert.equal(result, expectedResult);
  });

  it('Тест 6: текст только с ссылкой', function () {
    const expectedResult = 23; // только ссылка
    const result = postSize('https://example.com');
    assert.equal(result, expectedResult);
  });

  it('Тест 7: текст с эмодзи', function () {
    const expectedResult = 15; // эмодзи считаются как 2 символа
    const result = postSize('Привет! 👋😊');
    assert.equal(result, expectedResult);
  });

  it('Тест 8: текст с эмодзи и ссылкой', function () {
    const expectedResult = 17 + 23; // текст с эмодзи + ссылка
    const result = postSize('Смотрите! 👉 https://example.com');
    assert.equal(result, expectedResult);
  });



  it('Тест 9: максимально допустимый размер поста', function () {
    // Создаем строку из 280 символов
    const text = 'A'.repeat(280);
    const expectedResult = 280;
    const result = postSize(text);
    assert.equal(result, expectedResult);
  });

  it('Тест 10: превышение максимального размера поста', function () {
    // Создаем строку из 300 символов
    const text = 'A'.repeat(300);
    const expectedResult = 300;
    const result = postSize(text);
    assert.equal(result, expectedResult);
  });
});