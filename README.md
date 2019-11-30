## 考试成绩查询

### 整体结构

为了方便只展示 src 目录下的文件

```
│  App.tsx
│  config.ts // 配置信息
│  index.tsx
│  react-app-env.d.ts
│  serviceWorker.ts
│  styled.ts // 全局样式
│
├─assets
│  └─img
│          error.png
│          happy.png
│          headerbg.png
│          iconClassroom.png
│          iconSite.png
│          iconTime.png
│
├─component
│      BHeader.tsx // 基础的头部
│      BWarn.tsx   // 基础提醒
│      Content.tsx // 主要部分
│      Copyright.tsx // 版权
│      ExamGrade.tsx // 考试成绩
│      ExamGradeList.tsx // 考试成绩列表
│      ExamSchedule.tsx // 考试补考
│      ExamScheduleList.tsx // 考试补考列表
│      Info.tsx
│
├─fun
│      computeTime.ts // 通过学期周数计算具体时间
│
├─hook
│      getInfo.ts // 获得学生信息
│      useFetch.ts // api
│
└─interface
        dto.ts // dto
```

## 技术栈

- react
- swiper



## 项目运行

使用 CRA 创建，按照标准即可完成

.env

```
REACT_APP_BE_URL=https://***
REACT_APP_NAME=考试/成绩查询
REACT_APP_DESC=考试/成绩查询
REACT_APP_ICO=https://***
PUBLIC_URL=https://**
```


  ## 更新日志

  本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志由 `standard-changelog` 自动生成。完整日志请点击 [CHANGELOG.md](./CHANGELOG.md)

## 图例

![考试查询](README.assets/%E8%80%83%E8%AF%95%E6%9F%A5%E8%AF%A2.png)
![成绩查询](README.assets/%E6%88%90%E7%BB%A9%E6%9F%A5%E8%AF%A2.png)
![补考查询](README.assets/%E8%A1%A5%E8%80%83%E6%9F%A5%E8%AF%A2.png)