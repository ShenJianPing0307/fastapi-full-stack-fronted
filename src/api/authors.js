import request from "@/utils/request";

export function getAuthors() {
  return request({
    url: "/authors",
    method: "get"
  });
}

export function addAuthor(data) {
  return request({
    url: "/author",
    method: "post",
    data: data
  })
}