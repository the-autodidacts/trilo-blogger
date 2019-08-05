// Get references to page elements
var $blogTitle = $("#blog-title-form");
var $blogSubTitle = $("#blog-sub-title-form");
var $blogContent = $("#blog-content-form");
var $submitBtn = $("#submit-blog-button");
var $blogsList = $("#blogs-list");

// create a new api object for blogs
var API = new Api("blogs");
console.log("ALIVE")
// refreshBlogs gets new blogs from the db and repopulates the list
var refreshBlogs = function() {
  API.getAll().then(function(data) {
    var $blogs = data.map(function(blog) {
      var $a = $("<a>")
        .text(blog.title)
        .attr("href", "/blogs/" + blog.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": blog.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $blogsList.empty();
    $blogsList.append($blogs);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var blog = {
    title: $blogTitle.val().trim(),
    subtitle: $blogSubTitle.val().trim(),
    content: $blogContent.val().trim()
  };
  if (!(blog.title && blog.subtitle && blog.content)) {
    alert("You must enter a blog title, subtitle and content!");
    return;
  }

  API.save(blog).then(function() {
    refreshBlogs();
  });

  $blogTitle.val("");
  $blogSubTitle.val("");
};

// handleDeleteBtnClick is called when an blogs's delete button is clicked
// Remove the blog from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.delete(idToDelete).then(function() {
    refreshBlogs();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$blogsList.on("click", ".delete", handleDeleteBtnClick);
