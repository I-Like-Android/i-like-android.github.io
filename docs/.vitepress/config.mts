import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "📱 I Like Android",
  description: "Previously your go-to resource for privacy tools specifically designed for Android devices. Now, your go-to resource for everything related to Android devices.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '🔒 I Like Android Privacy', link: 'https://moistcatawumpus.github.io/i-like-android-privacy/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '👋 Welcome', link: '/welcome-page'},
        ]
      },
      {
        text: '',
        items: [
          { text: '🚫 Adblocking', link: '/adblocking' },
          { text: '🔐 Security', link: '/security' },
          { text: '🌐 Downloading', link: '/downloading'},
        ]
      },
      {
        text: 'ARCHIVE',
        collapsed: true,
        items: [
          { text: '🔒 I Like Android Privacy', link: '/archive-collection'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MoistCatawumpus' },
    ]
  }
})
