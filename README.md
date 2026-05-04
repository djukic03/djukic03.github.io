# Nemanja Đukić portfolio

Portfolio sajt refaktorisan iz vanilla HTML/CSS/JS projekta u React aplikaciju sa Vite build sistemom i React Router rutiranjem.

## Tehnologije

- React
- React Router
- Vite
- CSS
- EmailJS

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Vite će prikazati lokalni URL, najčešće `http://localhost:5173/`.

## Produkcioni build

```bash
npm run build
npm run preview
```

Build se generiše u `dist/`. Posle build-a se automatski kopira `dist/index.html` u `dist/404.html`, što omogućava da React Router radi i pri direktnom otvaranju ruta kao što su `/about`, `/projects` i `/contact` na GitHub Pages.

## Deployment

Repo sadrži GitHub Actions workflow u `.github/workflows/deploy.yml`.

Za deployment preko GitHub Pages:

1. U GitHub repo podešavanjima otvori `Settings > Pages`.
2. Kao source izaberi `GitHub Actions`.
3. Push na `main` granu će pokrenuti `npm ci`, `npm run build` i objaviti `dist/`.

## EmailJS podešavanje

Kontakt forma koristi EmailJS. Podrazumevano su ostavljene postojeće vrednosti radi kompatibilnosti, ali je preporučeno da se lokalno koriste `.env` promenljive:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=contact_service
VITE_EMAILJS_TEMPLATE_ID=contact_form
```

`.env` fajl je ignorisan kroz `.gitignore`.

## Struktura projekta

```text
src/
  components/
    layout/       Header, Footer, Layout, izbor jezika
    sections/     Home sekcije i kontakt sekcija
    ui/           Male ponovljive komponente
  context/        LanguageProvider i useLanguage hook
  data/           Projekti, veštine, iskustvo, edukacija, profil, asset putanje
  hooks/          Hookovi za formu, scroll, title i timeline animaciju
  i18n/           Prevodi na engleski i srpski ćirilicom
  pages/          Home, About, Projects, Contact
```

## Dodavanje novog projekta

Projekti se dodaju u `src/data/projects.js`.

Dodaj novi objekat u niz `projects`:

```js
{
  id: "new-project",
  category: "personal",
  image: images.someImage,
  imageAlt: "New Project",
  technologies: ["React", "Node.js"],
  title: {
    en: "New Project",
    sr: "Нови пројекат",
  },
  description: {
    en: "Short project description.",
    sr: "Кратак опис пројекта.",
  },
}
```

Ako projekat treba da se prikaže na početnoj strani, dodaj njegov `id` u `featuredProjectIds`.

## Dodavanje iskustva ili edukacije

Iskustva i edukacija su u `src/data/timeline.js`.

- `experienceItems` prikazuje sekciju `experience`
- `educationItems` prikazuje sekciju `education`

Dovoljno je dodati novi objekat sa `eyebrow`, `title` i `date` vrednostima na oba jezika.

## Dodavanje veština

Veštine su u `src/data/skills.js`.

- `items` se koriste za tekst koji ostaje isti na oba jezika, npr. `React`
- `itemKeys` se koriste kada se tekst prevodi preko `src/i18n/translations.js`

## Dvojezičnost

Jezik se bira u header-u i čuva u `sessionStorage`. Svi prevodi su u `src/i18n/translations.js`, a podaci koji imaju jezičke varijante koriste oblik:

```js
{
  en: "English text",
  sr: "Српски текст"
}
```

Trenutno su podržani:

- `en` - engleski
- `sr` - srpski, ćirilica
