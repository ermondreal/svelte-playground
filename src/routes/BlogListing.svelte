<script>
    let blogData = [
      {
        title: "Introduction to JavaScript",
        author: "John Doe",
        content: "JavaScript is a programming language that enables interactive web pages. It is an essential part of web development.",
        date: "2024-01-01"
      },
      {
        title: "HTML and CSS Basics",
        author: "Jane Smith",
        content: "HTML and CSS are the building blocks of web development. They define the structure and style of web pages.",
        date: "2024-01-02"
      },
      {
        title: "Responsive Web Design",
        author: "Bob Johnson",
        content: "Responsive web design ensures that a website looks good on various devices, including desktops, tablets, and smartphones.",
        date: "2024-01-03"
      }
    ];
  </script>
  
  <style>
    .blog-list {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 20px;
    }
    .blog-item {
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
    }
    .blog-item *:last-of-type{
        margin-bottom:0;
        padding-bottom:0;
    }
  </style>
  
  <h2 class="mb-3">Blog Listing</h2>
  <ul class="blog-list">
    {#each blogData as blog (blog.title)}
      <li class="blog-item">
        <h3>{blog.title}</h3>
        <p><strong>Author:</strong> {blog.author}</p>
        <p>{blog.content}</p>
        <p><strong>Date:</strong> {blog.date}</p>
      </li>
    {/each}
  </ul>
  