import request from "@/network/request";

//查所有
export function getAllSink() {
  return request({
    url: '/medical/getAllSink',
    method: 'get'
  })
}

//根据id查询
export function getSinkById(id) {
  return request({
    url: '/medical/getSinkById/id',
    method: 'get'
  })
}

//添加
export function addSink(sink) {
  return request({
    url: '/medical/addSink',
    method: 'post',
    data: sink
  })
}

//根据id修改
export function updateSinkById(id) {
  return request({
    url: '/medical/id',
    method: 'put',
  })
}

//根据id删除
export function deleteSinkById(id){
  return request({
    url: '/medical/id',
    method: 'delete',
  })
}