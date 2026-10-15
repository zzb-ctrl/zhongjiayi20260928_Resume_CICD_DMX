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
// 说明：下面 4 条的封面是 work-*.svg 的示意封面（文件位于仓库根目录），
// 想让卡片更真实，就把自己实验报告里的截图存成同名文件覆盖掉，
// 或者改这里的 image 路径指向新图（建议尺寸 1200×800，比例 3:2）。
const works = [
  {
    title: '课程作业 Deadline 管理清单 · Web App',
    description: '从一句需求描述到可运行应用，支持课程作业与截止日期的增删改查。',
    image: 'work-deadline.svg',
    url: 'https://github.com/zzb-ctrl',
    year: 2026,
    tags: ['前端', 'AI 辅助开发'],
  },
  {
    title: 'AI 健身教练智能体',
    description: '面向零运动基础女生的智能体角色设计与提示词迭代，输出训练与饮食建议。',
    image: 'work-fitness-agent.svg',
    url: 'https://github.com/zzb-ctrl',
    year: 2026,
    tags: ['智能体'],
  },
  {
    title: 'wordbook CLI · AGENTS 规则文件',
    description: '为命令行单词本工具编写完整 AGENTS 规则，约束 AI 编程助手的工程行为。',
    image: 'work-wordbook.svg',
    url: 'https://github.com/zzb-ctrl',
    year: 2026,
    tags: ['工程规范', 'AI 辅助开发'],
  },
  {
    title: '个人简历 / 作品集网站',
    description: '数据与视图分离架构 + GitHub Actions 自动部署，界面视觉已独立重写。',
    image: 'work-resume-site.svg',
    url: 'https://zzb-ctrl.github.io/zhongjiayi20260928_Resume_CICD_DMX/',
    year: 2026,
    tags: ['前端', 'CI/CD'],
  },
]
