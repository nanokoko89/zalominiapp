import React, { useEffect, useState } from 'react';
import { App as ZApp, Page, Header, Button, Text, Box } from 'zmp-ui';
import { getUserInfo, showToast } from 'zmp-sdk';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('bạn');

  useEffect(() => {
    // Lấy thông tin người dùng từ Zalo (chỉ hoạt động trong Zalo)
    getUserInfo({}).then((res) => {
      if (res && res.userInfo && res.userInfo.displayName) {
        setName(res.userInfo.displayName);
      }
    }).catch(() => {
      // Chạy ở trình duyệt bình thường sẽ không có SDK -> ignore
    });
  }, []);

  const onHello = async () => {
    try {
      await showToast({ message: 'Xin chào từ Zalo Mini App!' });
    } catch (_) {
      // Fallback khi chạy ngoài Zalo
      alert('Xin chào từ Zalo Mini App!');
    }
  };

  return (
    <Page className="p-4">
      <Header title="Trang chủ" />
      <Box className="mt-4 space-y-3">
        <Text.Header>Chào {name} 👋</Text.Header>
        <Text>
          Đây là bộ khởi tạo Zalo Mini App dùng React + Vite + TypeScript + ZaUI.
          Bạn có thể sửa nội dung ở <code>src/app.tsx</code>.
        </Text>
        <Button onClick={onHello}>Bấm chào một cái</Button>
      </Box>
    </Page>
  );
};

const AppRoot: React.FC = () => {
  return (
    <ZApp>
      <Home />
    </ZApp>
  );
};

export default AppRoot;
