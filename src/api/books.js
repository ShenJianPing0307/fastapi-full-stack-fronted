import request from "@/utils/request";

export function getBooks() {
  return request({
    url: "/books",
    method: "get"
  });
}

export function addBook(author_id,data) {
  return request({
    url: `/book/${author_id}`,
    method: "post",
    data: data
  });
}