document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const newPostForm = document.getElementById('new-post-form');

    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            // Create a new blog post
            const newPost = document.createElement('article');
            newPost.innerHTML = `
                <h2>${title}</h2>
                <p class="meta">Published on ${getCurrentDate()}</p>
                <p>${content}</p>
            `;

            // Append the new post to the container
            blogPostsContainer.appendChild(newPost);

            // Clear the form
            newPostForm.reset();
        }
    });

    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }
});