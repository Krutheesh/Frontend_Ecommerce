export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch("/orders/own/");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    console.log("loggedIN user");
    try {
      const response = await fetch("/users/own", {});
      console.log(response);
      const data = await response.json();
      console.log(data);
      resolve({ data });
    } catch (error) {
      console.log(error.message, error.code);
    }
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
