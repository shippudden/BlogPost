document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');
    const newPostForm = document.getElementById('new-post-form');

    // Load saved blog posts from local storage on page load
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    savedPosts.forEach(post => {
        createPostElement(post);
    });

    newPostForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const newPost = { title, content, date: getCurrentDate() };

            // Save the new post to local storage
            savedPosts.push(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(savedPosts));

            // Create the post element and append it to the container
            createPostElement(newPost);

            // Clear the form
            newPostForm.reset();
        }
    });

    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }

    function createPostElement(post) {
        const newPost = document.createElement('article');
        newPost.innerHTML = `
            <h2>${post.title}</h2>
            <p class="meta">Published on ${post.date}</p>
            <p>${post.content}</p>
        `;

        blogPostsContainer.appendChild(newPost);
    }
});
