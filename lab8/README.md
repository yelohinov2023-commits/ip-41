# Лабораторна робота 8

SCSS-версія лабораторної 7, варіант 1. Автор: Євгеній Логінов, ІП41.

Сайт: https://yelohinov2023-commits.github.io/ip-41/lab8/

## Збірка

Потрібні Node.js та pnpm. У каталозі lab8:

```sh
pnpm install --ignore-scripts
pnpm run build
pnpm run watch
```

Альтернатива після встановлення Sass: `sass --watch scss:css`.
`css/styles.css` і `css/styles.css.map` згенеровані компілятором та збережені в репозиторії. Браузер підключає CSS, а не SCSS.

## Структура

- scss/_variables.scss — кольори, розміри шрифтів, відступи, мапа breakpoints.
- scss/_mixins.scss — respond-to з sass:map і перевіркою ключів.
- scss/styles.scss — вкладені правила, Flexbox, Grid, анімації та адаптивність.
- images/ — зображення із лабораторної 7; джерело lpnu.ua.

Mobile-first: до 768 px — одна колонка; від 768 px — дві; від 1024 px — чотири. Точка 576 px змінює горизонтальні поля контейнера. Збережено навігацію, видимий фокус і prefers-reduced-motion.

## Перевірка 25.11.2026

Sass 1.93.2 успішно компілює модулі та source map. У Chrome перевірено ширини 390, 576, 768, 1024, 1440 px: горизонтальне переповнення відсутнє, Grid має відповідно 1, 1, 2, 4, 4 колонки. Переглянуто мобільний і настільний вигляд.
