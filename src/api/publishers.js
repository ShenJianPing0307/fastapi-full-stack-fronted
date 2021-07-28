import request from "@/utils/request";

export function getPublishers() {
  return request({
    url: "/publishers",
    method: "get"
  });
}

export function addPublish(data) {
  return request({
    url: "/publisher",
    method: "post",
    data: data
  });
}