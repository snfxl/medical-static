import request from "@/network/request";

//查所有
export function getAllDrug() {
  return request({
    url: '/medical/getAllDrug',
    method: 'get'
  })
}

//根据id查询
export function getDrugById(id) {
  return request({
    url: '/medical/getDrugById/id',
    method: 'get'
  })
}

//添加
export function addDrug(sink) {
  return request({
    url: '/medical/addDrug',
    method: 'post',
    data: sink
  })
}

//根据id修改
export function updateDrugById(id) {
  return request({
    url: '/medical/id',
    method: 'put',
  })
}

//根据id删除
export function deleteDrugById(id){
  return request({
    url: '/medical/id',
    method: 'delete',
  })
}