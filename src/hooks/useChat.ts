import { useRequest } from 'alova/client';
import { chatRegister } from '@/api/chat';
import { imageToast } from '@/components/ui/toaster';

export const useRegister = () => {
  const {
    loading,
    data,
    error,
    send: handleRegister,
  } = useRequest((username: string) => chatRegister(username), {
    immediate: false,
    initialData: {},
  }).onError(() => {
    imageToast.error(`注册失败: 网络错误`);
  });

  return {
    loading,
    data,
    error,
    handleRegister,
  };
};
