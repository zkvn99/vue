import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true, // HttpOnly refreshToken 쿠키 전송
});

// Request 인터셉터: Authorization 헤더 자동 부착
api.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        // TODO: accessToken 을 읽어서 Authorization 헤더에 Bearer 토큰으로 설정하는 로직 작성
        if(authStore.accessToken && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${authStore.accessToken}`
        }
        return config;
    },
    (error) => Promise.reject(error),
);

let isRefreshing = false;

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const authStore = useAuthStore();
        const originalRequest = error.config;

        if (!error.response) {
            return Promise.reject(error);
        }

        const status = error.response.status;
        const url = originalRequest.url || '';

        // TODO: 401 응답 처리 및 토큰 재발급, 재시도, clearAuthState 호출 등 인터셉터 로직 작성

        return Promise.reject(error);
    },
);

export default api;