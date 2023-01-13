import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "1s",
  // thresholds: {
  //   http_req_duration: ["p(90)<200", "p(95)<300"],
  // },
};

export default function () {
  const pages = ["/data"];
  for (const page of pages) {
    const resHome = http.get("http://localhost:8080", {
      tags: { what: "home" },
    });
    check(resHome, {
      "status was 200": (r) => r.status == 200,
    });
    const resPage = http.get("http://localhost:8080" + pages);
    check(resPage, {
      "status was 200": (r) => r.status == 200,
    });
    sleep(1);
  }
}
