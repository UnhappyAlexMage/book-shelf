import type{ LibraryBook } from "../../entities/types";

export const libraryBooks: LibraryBook[] = [
    {
        BookId: "a1b2c3d4e5",
        title: "Мастер и Маргарита",
        authors: ["Михаил Булгаков"],
        imageBook: "https://covers.openlibrary.org/b/id/8235628-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8226191-L.jpg",
            "https://covers.openlibrary.org/b/id/8235627-L.jpg",
            "https://covers.openlibrary.org/b/id/8226192-L.jpg",
            "https://covers.openlibrary.org/b/id/8235628-L.jpg"
        ],
        status: "Прочитанные",
        startedAt: "2026-07-15T08:30:00Z",
        notes: "Потрясающая книга! Перечитывал уже третий раз. Особенно впечатлили сцены бала у Сатаны.",
        favorite: true
    },
    {
        BookId: "f6g7h8i9j0",
        title: "Преступление и наказание",
        authors: ["Фёдор Достоевский"],
        imageBook: "https://covers.openlibrary.org/b/id/12728325-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/12728324-L.jpg",
            "https://covers.openlibrary.org/b/id/12728325-L.jpg",
            "https://covers.openlibrary.org/b/id/12728326-L.jpg",
            "https://covers.openlibrary.org/b/id/12728327-L.jpg",
            "https://covers.openlibrary.org/b/id/12728328-L.jpg"
        ],
        status: "Чтение",
        startedAt: "2026-07-14T10:15:00Z",
        notes: "Читаю сейчас, дошёл до момента убийства старухи-процентщицы. Очень напряжённая атмосфера.",
        favorite: false
    },
    {
        BookId: "k1l2m3n4o5",
        title: "1984",
        authors: ["Джордж Оруэлл"],
        imageBook: "https://covers.openlibrary.org/b/id/8225262-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8225262-L.jpg",
            "https://covers.openlibrary.org/b/id/8225263-L.jpg",
            "https://covers.openlibrary.org/b/id/8225264-L.jpg"
        ],
        status: "Прочитанные",
        startedAt: "2026-07-16T07:45:00Z",
        notes: "Жуткая антиутопия. Министерство правды особенно впечатлило.",
        favorite: true
    },
  {
        BookId: "p6q7r8s9t0",
        title: "Цветы для Элджернона",
        authors: ["Дэниел Киз"],
        imageBook: "https://covers.openlibrary.org/b/id/8596220-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8596218-L.jpg",
            "https://covers.openlibrary.org/b/id/8596219-L.jpg",
            "https://covers.openlibrary.org/b/id/8596220-L.jpg",
            "https://covers.openlibrary.org/b/id/8596221-L.jpg",
            "https://covers.openlibrary.org/b/id/8596222-L.jpg",
            "https://covers.openlibrary.org/b/id/8596223-L.jpg"
        ],
        status: "Фавориты",
        startedAt: "2026-07-16T13:00:00Z",
        notes: "Очень хочу прочитать, много слышал об этой книге.",
        favorite: false
  },
  {
        BookId: "u1v2w3x4y5",
        title: "Три товарища",
        authors: ["Эрих Мария Ремарк"],
        imageBook: "https://covers.openlibrary.org/b/id/11148440-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/11148439-L.jpg",
            "https://covers.openlibrary.org/b/id/11148440-L.jpg",
            "https://covers.openlibrary.org/b/id/11148441-L.jpg",
            "https://covers.openlibrary.org/b/id/11148442-L.jpg"
        ],
        status: "Чтение",
        startedAt: "2026-07-10T09:00:00Z",
        notes: "Начал читать вчера. Ремарк прекрасно передаёт дух времени.",
        favorite: true
  },
  {
        BookId: "z6a7b8c9d0",
        title: "451 градус по Фаренгейту",
        authors: ["Рэй Брэдбери"],
        imageBook: "https://covers.openlibrary.org/b/id/11150710-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/11150708-L.jpg",
            "https://covers.openlibrary.org/b/id/11150709-L.jpg",
            "https://covers.openlibrary.org/b/id/11150710-L.jpg",
            "https://covers.openlibrary.org/b/id/11150711-L.jpg"
        ],
        status: "Прочитанные",
        startedAt: "2026-07-08T11:20:00Z",
        notes: "Температура, при которой воспламеняется бумага. Книга о важности литературы.",
        favorite: false
  },
  {
        BookId: "e1f2g3h4i5",
        title: "Убить пересмешника",
        authors: ["Харпер Ли"],
        imageBook: "https://covers.openlibrary.org/b/id/8225268-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8225265-L.jpg",
            "https://covers.openlibrary.org/b/id/8225266-L.jpg",
            "https://covers.openlibrary.org/b/id/8225267-L.jpg",
            "https://covers.openlibrary.org/b/id/8225268-L.jpg",
            "https://covers.openlibrary.org/b/id/8225269-L.jpg"
        ],
        status: "Фавориты",
        startedAt: "2026-07-17T18:00:00Z",
        notes: "Классика американской литературы. Давно хочу познакомиться.",
        favorite: false
  },
  {
        BookId: "j6k7l8m9n0",
        title: "Портрет Дориана Грея",
        authors: ["Оскар Уайльд"],
        imageBook: "https://covers.openlibrary.org/b/id/12729182-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/12729179-L.jpg",
            "https://covers.openlibrary.org/b/id/12729180-L.jpg",
            "https://covers.openlibrary.org/b/id/12729181-L.jpg",
            "https://covers.openlibrary.org/b/id/12729182-L.jpg",
            "https://covers.openlibrary.org/b/id/12729183-L.jpg",
            "https://covers.openlibrary.org/b/id/12729184-L.jpg"
        ],
        status: "Прочитанные",
        startedAt: "2026-07-16T09:00:00Z",
        notes: "Эстетика и мораль в одном флаконе. Уайльд — гений афоризмов.",
        favorite: true
  },
  {
        BookId: "o1p2q3r4s5",
        title: "Над пропастью во ржи",
        authors: ["Джером Д. Сэлинджер"],
        imageBook: "https://covers.openlibrary.org/b/id/8225290-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8225288-L.jpg",
            "https://covers.openlibrary.org/b/id/8225289-L.jpg",
            "https://covers.openlibrary.org/b/id/8225290-L.jpg"
        ],
        status: "Чтение",
        startedAt: "2026-07-16T20:00:00Z",
        notes: "Холден Колфилд — интересный персонаж. Неоднозначное впечатление.",
        favorite: false
  },
  {
        BookId: "t6u7v8w9x0",
        title: "Сто лет одиночества",
        authors: ["Габриэль Гарсиа Маркес"],
        imageBook: "https://covers.openlibrary.org/b/id/8235637-L.jpg",
        reccomendedImages: [
            "https://covers.openlibrary.org/b/id/8235634-L.jpg",
            "https://covers.openlibrary.org/b/id/8235635-L.jpg",
            "https://covers.openlibrary.org/b/id/8235636-L.jpg",
            "https://covers.openlibrary.org/b/id/8235637-L.jpg"
        ],
        status: "Фавориты",
        startedAt: "2026-07-15T16:00:00Z",
        notes: "Магический реализм во всей красе. Очень рекомендовали друзья.",
        favorite: true
  }
];