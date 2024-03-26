export function createUserAPI(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://crud-mern-api-self.vercel.app/api/user/create", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserAPI() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://crud-mern-api-self.vercel.app/api/user/get");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://crud-mern-api-self.vercel.app/api/user/get/" + id);
    const data = await response.json();
    resolve({ data });
    console.log("response",response)
  });
}



export function deleteUserAPI(delet) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://crud-mern-api-self.vercel.app/api/user/delete/"+delet.id, {
      method: "DELETE",
      body: JSON.stringify(delet),
      headers: { "content-type": "application/json" },
    })
    const data = await response.json();
    resolve({data})
  });
}
