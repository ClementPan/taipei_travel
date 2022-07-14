# Travel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 專案說明

從無到有建立一個完整的小型 Angular 專案，內容以小而完善為目標前進。包含 component, service, interface, router, interceptor...

## 使用技術

Angular, TypeScript, SCSS, RxJS...

## API 資料來源：

台北旅遊網 Open API：https://www.travel.taipei/open-api
為了避免本地端啟動時產生 CORS 問題，配置使用 proxy.config.json

## 專案功能

1. 頁面 1：資料列表 (包含分頁)。列出所有景點資訊，並可切換「上一頁」、「下一頁」。
2. 資料可篩選。以下拉式選單切換不同分類編號(categoryIds)，得到不同的景點資料列表。
3. 可勾選單筆或多筆資料加入我的最愛，網頁重整後可保留。
4. 網頁 2：我的最愛列表，列出已加入我的最愛的景點清單。
5. 我的最愛-可單筆編輯後更新 client 端資料，資料通過驗證才可送出儲存。
7. 我的最愛-可勾選單筆或多筆資料,從我的最愛中移除後更新 client 端資料
8. 網頁 1 與 2 需提供連結可互相切換
