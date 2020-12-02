import request from "@/network/request";

export function getAllSink() {
  return request({
    url: '/consumer/getAllSink',
    method: 'get'
  })
}