# goit-js-hw-07

## goit-js-hw-07

> > Задание 1

Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3
категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и
количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

    Категория: Животные
    Количество элементов: 4

---

> > Задание 2

В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>

В JS есть массив строк.

const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы', ];

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну
операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

---

> > Задание 3

Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>

Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки
и insertAdjacentHTML().

    Все элементы галереи должны добавляться в DOM за одну операцию вставки.
    Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [ { url:
'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt:
'White and Black Long Fur Cat', }, { url:
'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt:
'Orange and White Koi Fish Near Yellow Koi Fish', }, { url:
'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt:
'Group of Horses Running', }, ];

---

---

---
