// The API object contains methods for each kind of request we'll make
class Api {
    constructor(route){
        this.route = route
    }

  save(item) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: `/${this.route}`,
      data: JSON.stringify(item)
    });
  };

  getAll() {
    return $.ajax({
      url: `api/${this.route}`,
      type: "GET"
    });
  };

  delete(itemId) {
    return $.ajax({
      url: `/${this.route}/${itemId}`,
      type: "DELETE"
    });
  };
};

