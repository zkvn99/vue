import api from './axios.js';

// TODO: Product 관련 API 래퍼 함수들을 구현한다.
// - fetchProducts: 목록 조회 (page, size, categoryCode, productName 쿼리)
// - fetchProductDetail: 상품 상세 조회
// - createProduct: multipart/form-data 로 상품 생성
// - updateProduct: multipart/form-data 로 상품 수정
// - deleteProduct: 상품 삭제

export async function fetchProducts({ page = 1, size = 10, categoryCode = null, productName = '' } = {}) {

  const params = {
    page, size
  }

  if(categoryCode) params.categoryCode = categoryCode;
  if(productName) params.productName = productName;

  const res = await api.get('/products', { params });
  return res.data.data;
}

export async function fetchProductDetail(productCode) {
    // TODO:
    // 1) api.get(`/products/${productCode}`)
    // 2) res.data.data 반환
}

export async function createProduct(form) {
    // TODO:
    // 1) FormData 생성
    // 2) productCreateRequest (JSON) + productImg(file) @RequestPart 구조에 맞게 append
    // 3) api.post('/products', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    // 4) res.data.data 반환 (ProductCommandResponse)
}

export async function updateProduct(productCode, form) {
    // TODO:
    // 1) FormData 생성
    // 2) productUpdateRequest (JSON) + productImg(optional) append
    // 3) api.put(`/products/${productCode}`, formData, { headers: ... })
    // 4) ApiResponse<Void> 처리
}

export async function deleteProduct(productCode) {
    // TODO:
    // 1) api.delete(`/products/${productCode}`)
    // 2) ApiResponse<Void> 처리
}
