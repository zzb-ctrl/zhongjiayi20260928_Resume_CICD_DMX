// 作品数据。数据与界面完全分离——
// 想加一个作品，只在这里加一个对象，HTML 一个字都不用动。
//
// 六个字段各管一件事：
//   title        卡片标题
//   description  一句话说明（建议写成「做了什么 + 用了什么技术」）
//   image        封面图路径
//   url          点击去哪
//   year         年份，用来排序和显示右上角徽标
//   tags         标签数组，用来筛选。一个作品可以有多个标签
//
// TODO 核对：下面的 description 已按「做了什么 + 技术点」改写，
// 请按你的真实完成情况再确认一遍；若作品基于课程脚手架，
// 建议如实写明「基于课程脚手架完成 XX 功能」，这样更可信。
const works = [
  {
    title: '长风成卷 · 博客应用',
    description: '文章列表与详情展示，打通后端接口与数据库完成数据读写。',
    image: 'assets/work-blog.png',
    url: 'https://ffd-p2-blog.netlify.app/',
    year: 2026,
    tags: ['前端', '后端', '数据库'],
  },
  {
    title: '群像云图 · 社区应用',
    description: '内容发布与社区互动，实现数据持久化存储与页面渲染。',
    image: 'assets/work-community.png',
    url: 'https://ffd-p3-community.netlify.app/',
    year: 2026,
    tags: ['前端', '数据库', '部署'],
  },
  {
    title: '一笺心意 · 祝福卡片',
    description: '卡片内容编辑与作品分享，接入 AI 生成能力完成个性化制作。',
    image: 'assets/work-greeting-card.png',
    url: 'https://ffd-p4-greeting-card.netlify.app/',
    year: 2025,
    tags: ['前端', 'AI'],
  },
  {
    title: '星声音乐站 · 音乐应用',
    description: '网页音频播放与播放列表交互，配套基础功能测试。',
    image: 'assets/work-music-station.png',
    url: 'https://ffd-p5-music-station.netlify.app/',
    year: 2025,
    tags: ['前端', '测试'],
  },
]
