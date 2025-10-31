# Hydro Pastebin Plus

由 [`hydro_pastebin`](https://www.npmjs.com/package/hydrooj_pastebin) 二次开发。

~现已适配 Hydro 最新版本。~

This project is now deprecated. For current hydrooj users please check [`hydrooj-pastebin-plus-fix`](https://github.com/Floating-Ocean/hydrooj-pastebin-plus-fix).

## 使用说明

1. 进入您的 HydroOJ 安装目录
2. 在 `/packages/ui-default/templates/layout/html5.html` 中 `<head>` 标签结束前位置插入如下代码
   ```html
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
   ```
3. 执行如下命令
   ```bash
   yarn global add hydrooj-pastebin-plus
   hydrooj addon add hydrooj-pastebin-plus
   ```
4. 重启您的 HydroOJ
5. 在首页菜单加入超链接至 `/paste/create`

## 版权

本项目在 `hydrooj_pastebin` 基础上开发

非商业使用遵 AGPL v3 协议

原電郵地址 `liyanqwq<at>duianit.cn` 沒有再使用，可以在我的個人網站上面記載的聯絡方式和我聯絡。

應該沒有人會再商業使用這個版本，所以商業使用請自便。
