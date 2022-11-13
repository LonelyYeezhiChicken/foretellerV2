import req from '../utils/axiosPlugin'

/** 車種資料維護*/
// 查詢
export const apiCarKindGet = () => {
    return req.get(`/CarKind`, null, undefined)
}
// 新增
export const apiCarKindPost = (data: any) => {
    return req.post(`/CarKind`, { ...data }, undefined)
}
// 修改
export const apiCarKindPut = (data: any) => {
    return req.put(`/CarKind`, { ...data }, undefined)
}
// 刪除
export const apiCarKindDelete = (data: any) => {
    return req.delete(`/CarKind`, { ...data }, undefined)
}