import Layout from '@/layout/index.vue'

const externalLink = [
  {
    path: '/external-link',
    component: Layout,
    redirect: 'noRedirect',
    name: 'external-link',
    meta: {
      title: '外部链接',
      icon: 'link',
    },
    children: [
      {
        path: 'https://github.com/lifangdan/admin-vue3-ts-vite',
        name: 'github',
        meta: { title: 'Github 地址', icon: 'MenuIcon' },
      },
      {
        path: 'iframe',
        component: () => import('@/views/externalLinks/iframe/index.vue'),
        name: 'iframe',
        meta: { title: '内嵌 iframe', icon: 'MenuIcon' },
      },
    ],
  },
]

export default externalLink
