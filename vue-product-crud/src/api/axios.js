import axios from 'axios';

// TODO: axios 인스턴스를 생성하고
// 1) baseURL 에 import.meta.env.VITE_API_BASE_URL 사용
// 2) 공통 응답 인터셉터에서 ApiResponse(success, data, errorCode, message) 구조 처리
// 3) 에러(HTTP 4xx, 5xx) 시 적절히 throw

const api = axios.create({
    // TODO: baseURL 설정
});

// TODO: 응답 인터셉터 등록
// api.interceptors.response.use(
//   (response) => {
//     // 성공이지만 success=false인 경우 에러 처리
//   },
//   (error) => {
//     // HTTP 에러 처리
//   }
// );

export default api;
