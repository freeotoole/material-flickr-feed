type Settings = {
  gap: 'sm' | 'md' | 'lg' | 'xl'
  columns: 2 | 3 | 4
  siteName: string | null
  siteDescription?: string | null
  colophon?: string | null
  albums: { [key: string]: Album }
  perPage: number
  gallery?: {
    title?: string
    subtitle?: string
    slug: string
  }
}

type Album = {
  id: string
  slug: string
  title: string
  subtitle: string
  icon?: string
}

// get this year from date
const year = new Date().getFullYear()

export const settings: Settings = {
  gap: 'md',
  columns: 3,
  siteName: "Free's Flickr Feed",
  siteDescription:
    "**FLICKR GALLERY** by [Free O'Toole](https://freeotoole.com)",
  colophon: `**© ${year}** | Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and the [Flickr API](https://www.flickr.com/services/api).`,
  albums: {
    analogue: {
      id: '72177720313681808',
      slug: 'analogue',
      title: 'Analogue adventures',
      subtitle: 'Shots from my various analog cameras',
      icon: 'CameraRoll',
    },
    challenges: {
      id: '72177720313003477',
      slug: 'challenges',
      title: 'Flickr challenges',
      subtitle: "Photos taken for various Flickr challenges'",
      icon: 'EmojiEvents',
    },
    street: {
      id: '72177720313094870',
      slug: 'street',
      title: 'Street',
      subtitle: '',
      icon: 'Traffic',
    },
    ['black-and-white']: {
      id: '72177720313590163',
      slug: 'black-and-white',
      title: 'Black & White',
      subtitle: '',
      icon: 'Monochrome',
    },
  },
  perPage: 12,
  gallery: {
    title: 'My latest photos',
    subtitle:
      '8-bit gochujang photo booth gatekeep lomo, blog shoreditch tattooed. Celiac actually narwhal listicle, mukbang sus kinfolk pug banjo brunch.',
    slug: 'gallery',
  },
}
