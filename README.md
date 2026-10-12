# OSMAN IT — React implementation

Figma asosida tayyorlangan, mobil ekranlarga mos React + Vite loyihasi.

## Ishga tushirish

Node.js 22.12+ yoki 24 tavsiya qilinadi.

```bash
npm install
npm run dev
```

Terminalda chiqqan lokal manzilni brauzerda oching.

```bash
npm run build
npm run preview
```

`dist/` — hostingga tayyor statik sayt. Uni statik server orqali oching; `index.html` faylini `file://` orqali ochish ES-modullar uchun mos emas.

## Tarkibi

- `src/components/` — header, hero, kurs kartasi, modal, bo‘limlar va footer.
- `src/data.js` — kategoriya, kurs va ustoz ma’lumotlari.
- `src/assets.js` — original Figma rasmlariga lokal yo‘llar.
- `src/hero-layers.js` — original hero SVG qatlamlarining koordinatalari.
- `src/styles.css` — dizayn tokenlari, asosiy uslublar va responsive qoidalar.
- `public/assets/` — 75 ta Figma resursi va lokal shriftlar.

## Ishlaydigan qismlar

Kurs qidiruvi, kategoriya filtri, bo‘sh natija holati, filtrni tozalash, mobil menyu, kategoriya oynasi, kurs tafsilotlari, shu qurilmada kurslarni saqlash, login/registratsiya formasi validatsiyasi, FAQ va sahifa bo‘ylab navigatsiya.

Login, registratsiya va darslar backendga ulanmagan. Formaga yozilgan parol va email saqlanmaydi yoki yuborilmaydi. Saqlangan kurslar ro‘yxati `localStorage`da turadi.

## Tekshirish

Avval preview serverni 5173-portda ishga tushiring:

```bash
npm run preview -- --port 5173
npm run test:e2e
```

Testlar Microsoft Edge bilan ishlaydi. Chrome ishlatish uchun `PLAYWRIGHT_CHANNEL=chrome`, boshqa server uchun `PREVIEW_URL` environment qiymatini bering.

Dizaynning mosligi va cheklovlari `IMPLEMENTATION.md`da yozilgan.
