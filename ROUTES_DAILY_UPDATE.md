# 城市归山｜五条线路固定页面与每日更新说明

## 固定页面（全部放在仓库根目录）

中文：`land.html`、`water.html`、`wind.html`、`fire.html`、`space.html`

英文：`land-en.html`、`water-en.html`、`wind-en.html`、`fire-en.html`、`space-en.html`

这些 HTML 文件必须与 `index.html`、`en.html`、`style.css` 同级，不要放进 `data/`。

## 每天只需要改一个文件

打开 `data/today.json`，更新以下字段：

- `date`：日期，固定格式 `YYYY.MM.DD`，例如 `2026.10.30`
- `theme_cn`：必须包含线路代码，例如 `水 WATER · 让一切流动`
- `theme_en`：必须包含同一线路代码，例如 `WATER · Let Things Flow`
- `route_cn`、`route_en`：当天的路线简述
- `time`：当天时间，例如 `14:00 - 17:00`
- `people_cn`、`people_en`：当天活动形式

保存并 Commit changes。首页会自动更新日期、主题、路线、时间和形式；报名按钮也会根据线路代码自动跳转到对应中英文详情页。详情页的日期、时间和报名表隐藏字段会自动读取当天数据。

## 五条线路对应关系

| 代码 | 中文主题 | 英文主题 | 中文页面 | 英文页面 |
|---|---|---|---|---|
| LAND | 地 · 身体回来 | Return to the Body | `land.html` | `land-en.html` |
| WATER | 水 · 让一切流动 | Let Things Flow | `water.html` | `water-en.html` |
| WIND | 风 · 安静下来 | Become Quiet | `wind.html` | `wind-en.html` |
| FIRE | 火 · 回到生活 | Return to Life | `fire.html` | `fire-en.html` |
| SPACE | 空 · 什么都不做 | Do Nothing | `space.html` | `space-en.html` |

## 发布后检查

1. 打开中文首页和英文首页，检查日期、主题和时间。
2. 点击报名按钮，确认进入当天线路的正确详情页。
3. 检查详情页日期、时间、表单字段与语言。
4. 如果页面未更新，等待 GitHub Pages 部署并刷新页面。

## 保留的现有设置

表单仍使用当前 Formspree 地址 `https://formspree.io/f/xaenvjqk`，成功页仍使用 `success.html` 和 `success-en.html`，二维码仍使用 `assets/wechat-qrcode.png`。

页面文案沿用私人 1–4 人体验、¥699 起、周六另设公开小组活动。若实际价格、人数或运营规则改变，需要同步修改各页面中的相关文案。提交表单仅表示参与意向，不等于预约确认。
