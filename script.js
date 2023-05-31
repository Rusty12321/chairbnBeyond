import http from "k6/http";
import { sleep } from "k6";
export const options = {
  // vus: 3000,
  // duration: "1m",
  stages: [
    { duration: '2m', target: 3000 },
    { duration: '1m', target: 0 }
  ]
};
export default function () {
  for (let i = 1; i <= 1000; i++) {
    http.get(`http://localhost:3003/api/about/${i}`);
    http.get(`http://localhost:3002/api/amenities/${i}`);
    http.get(`http://localhost:3002/api/amenities/ten/${i}`);
    http.get(`http://localhost:3010/api/gallery/photo_url/${i}`);
    http.get(`http://localhost:4001/api/users/${i}`);
    http.get(`http://localhost:4001/api/hosts/about/${i}`);
    http.get(`http://localhost:4001/api/reviews`);
    http.get(`http://localhost:3005/api/reviews/${i}`);
    http.get(`http://localhost:4001/api/hosts/photo/${i}`);
    http.get(`http://localhost:4000/api/location/${i}`);
    http.get(`http://localhost:4000/api/location/description/${i}`);
  }
  sleep(1);
}
