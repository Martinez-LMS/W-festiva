export const ASSETS = {
  logo: {
    wFestival: '/logo/vector.png',
  },
  nav: {
    home: '/nav/icon.png',
    live: '/nav/icons.png',
    musicalStyles: '/nav/icone4.png',
    exclusiveContent: '/nav/icone5.png',
  },
  artists: {
    'iron-maiden': '/artists/4847f49c38741e27d74b4d56a55b5ba9204cb16c.png',
    alok: '/artists/2795bd5706948c68cfaaeff6606823c9dc2bbf4d.png',
    'rita-ora': '/artists/62e2f69934fb385de838b0299b6b1706dd0d9588.png',
    'dream-theatre': '/artists/26185ff81486c613f7d6d84d2420e5f97c6ddb27.png',
    maneskin: '/artists/c5effda54924b507d94a0c9b1402171b0a4f7bf4.png',
    marshmello: '/artists/5c6dcc0465b5b8f62e503413b2957ec064088f54.png',
    'dua-lipa': '/artists/a17e851d574eb43d7b6445bc9fda6dc33b0d719b.png',
    coldplay: '/artists/9d47ce55a1fef74c98d9158c23a838025e02c21a.png',
    offspring: '/artists/bac9f2ded926d389094606216ce2117354874de4.png',
    'avril-lavigne': '/artists/70b441feb1d4012bd93aea413d9638c6f8dab084.png',
    'black-pantera': '/artists/ab6cba5d56552b8c944339117a35e0966a45ebd0.png',
    'demi-lovato-sunset': '/artists/84297d29c6360383aac10f28c7c4e6ba18683563.png',
    'demi-lovato-world': '/artists/357bd39f222b0eae62b28003bf3dc69b8efe70fa.png',
    'demi-lovato-favela': '/artists/de6c3f9d813317630aefe9162f275607b5c44450.png',
  },
  videos: {
    avrilLiveFull: '/videos/' + encodeURIComponent('Avril Lavigne - Sk8er Boi Live at Rock in Rio (1).mp4'),
    avrilLiveShort: '/videos/avril-live.mp4',
  },
  player: {
    list: '/player/' + encodeURIComponent('Icons Player 4.png'),
    pip: '/player/' + encodeURIComponent('Icons Player 3.png'),
    volume: '/player/' + encodeURIComponent('Icons Player 2.png'),
    settings: '/player/' + encodeURIComponent('Icons Player.png'),
  },
  badges: {
    googlePlay: '/badges/google-play-badge.png',
    appStore: '/badges/' + encodeURIComponent('image 82.png'),
  },
  social: {
    networks: '/social/' + encodeURIComponent('Frame 39.png'),
  },
  carousel: {
    bg: '/carousel/' + encodeURIComponent('Group 92161.png'),
    arrow: '/carousel/arrow.png',
  },
  content: {
    backStage: '/content/5e70c59dc9340ac96088d51733fcd40be7f26205.jpg',
    interviews: '/content/ac305c69ae2c3ab1e2977485dcdc7d79d6804c6e.jpg',
  },
  brands: {
    tesla: '/brands/c1ac28b90b7c69f045c9f9d03cd976ca77034382.png',
    cocaCola: '/brands/3d2fafb44246715242e2579bbdfba740ff1259d9.png',
  },
  nike: {
    logo: '/nike/291bb1d52b82d81ec680f51b756a50aa9a0e9df0.png',
    shoe: '/nike/6247f8989182b9cf19a9adf38be5462ca7845b2a.png',
    thumb1: '/nike/531f1ffe2cc166341d916b3fc8314e6673ddb991.png',
    thumb2: '/nike/291bb1d52b82d81ec680f51b756a50aa9a0e9df0.png',
    thumb3: '/nike/4c32893b1fc644db22038e9558de688568cd6d02.png',
    thumb4: '/nike/10bc9dba89ccde600a285f51dbb285d0c8e022c8.png',
  },
} as const

export const NAV_ICON_SRCS = [
  ASSETS.nav.home,
  ASSETS.nav.live,
  ASSETS.nav.musicalStyles,
  ASSETS.nav.exclusiveContent,
] as const
