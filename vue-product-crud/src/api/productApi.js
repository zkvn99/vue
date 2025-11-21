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
  const res = await api.get(`/products/${productCode}`)
  return res.data.data;
}

export async function createProduct(form) {
  const formData = new FormData();
  const productCreateRequest = {
    productName : form.productName,
    productPrice : form.productPrice,
    productDescription : form.productDescription,
    categoryCode : form.categoryCode,
    productStock : form.productStock,
  };

  formData.append(
      'productCreateRequest',
      new Blob([JSON.stringify(productCreateRequest)], {type:'application/json'})
  )

  if(form.productImgFile) {
    formData.append('productImg', form.productImgFile);
  }

  const res = await api.post('/products', formData, {
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  });

  return res.data.data;
}

export async function updateProduct(productCode, form) {
  const formData = new FormData();
  const productUpdateRequest = {
    productName : form.productName,
    productPrice : form.productPrice,
    productDescription : form.productDescription,
    categoryCode : form.categoryCode,
    productStock : form.productStock,
    status : form.status
  };

  formData.append(
      'productUpdateRequest',
      new Blob([JSON.stringify(productUpdateRequest)], {type:'application/json'})
  )

  if(form.productImgFile) {
    formData.append('productImg', form.productImgFile);
  }

  const res = await api.put(`/products/${productCode}`, formData, {
    headers : {
      'Content-Type' : 'multipart/form-data'
    }
  });

  return res.data;    // ApiResponse<Void>
}

export async function deleteProduct(productCode) {
    const res = await api.delete(`/products/${productCode}`);
    return res.data;    // ApiResponse<Void> 로 반환 된 객체
}
