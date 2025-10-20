# Zalo Mini App Starter

Một bộ khởi tạo tối giản để chạy trong Zalo Mini App, dùng **React + Vite + TypeScript + ZaUI**.

## Cài đặt
```bash
npm install
```

## Chạy thử
- Chạy trên trình duyệt: 
```bash
npm run dev
# mở http://localhost:3000
```

- Chạy trên thiết bị Zalo (Device mode):
```bash
npm run dev:device
```
> Bạn cần điền `appId` hợp lệ trong `zmp-cli.json` và đăng nhập bằng `npm run login` trước.

## Build & Deploy
```bash
npm run build
npm run deploy
```

## Tệp cấu hình chính
- `app-config.json`: tiêu đề, theme...
- `zmp-cli.json`: cấu hình CLI (appId, port...)
- `src/app.tsx`: nơi render UI (ZaUI)
- `src/styles.css`: Tailwind CSS

## Ghi chú
- Một số API Zalo (như `getUserInfo`) chỉ hoạt động bên trong ứng dụng Zalo.
- Tham khảo tài liệu chính thức:
  - Zalo Mini App SDK: https://mini.zalo.me/documents/api/
  - ZaUI: https://mini.zalo.me/documents/zaui/
  - Zalo Mini App CLI: https://mini.zalo.me/documents/devtools/cli/intro/# zalominiapp
