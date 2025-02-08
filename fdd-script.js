/* JS used in: charlotte-discussionboard.html */
/* Redirect to other page */
function redirectToPage(targetPage) {
    window.location.href = targetPage;
}

/* JS used in: charlotte-discussionboard.html */
function toggleReplies(postid) {
    var repliesContainers = document.querySelectorAll('.replies-' + postid);

    repliesContainers.forEach(function(container) {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block'; /* Display replies to a post */
        } else {
            container.style.display = 'none'; /* Hide replies to a post */
        }
    });
}

/* JS used in: charlotte-discussionboard.html */
function toggleLike(postid) {
    let likeCountElement = document.querySelector(`#${postid} .likeCount`);
    let currentLikes = parseInt(likeCountElement.textContent);
    if (likeCountElement.classList.contains('liked')) {
        /* Unlike */
        likeCountElement.textContent = currentLikes - 1;
        likeCountElement.classList.remove('liked');
    } else {
        /* Like */
        likeCountElement.textContent = currentLikes + 1;
        likeCountElement.classList.add('liked');
    }
}

/* JS used in: charlotte-discussionboard.html */
/* FUNCTION: Filter posts (based on user's search) */
document.addEventListener('DOMContentLoaded', function() {
    function filterPosts() {
        /* Get the searched word(s) */
        var input = document.querySelector('.searchbar');
        var filter = input.value.toUpperCase();
        var posts = document.querySelectorAll('.post');

        /* Loop through all the posts, and hide the ones that don't match the search query */
        posts.forEach(function(post) {
            var titleElement = post.querySelector('h2');
            var titleText = titleElement.textContent || titleElement.innerText;
            if (titleText.toUpperCase().indexOf(filter) > -1) {
                post.style.display = ""; /* Show the post if it matches */
            } else {
                post.style.display = "none"; /* Hide the post if it doesn't match */
            }
        });
    }

    /* Add event listener to the search bar to trigger the filterPosts function */
    document.querySelector('.searchbar').addEventListener('keyup', filterPosts);
});

/* JS used in: charlotte-createpost.html */
function previewImage() {
    var fileInput = document.getElementById('post-media');
    var imagePreview = document.getElementById('image-preview');
    var removeButton = document.getElementById('remove-media');

    imagePreview.innerHTML = ''; /* Clear previous preview */

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var imgElement = document.createElement('img');
            imgElement.setAttribute('src', e.target.result);
            imgElement.setAttribute('alt', 'Uploaded Image');
            imgElement.setAttribute('class', 'preview-image');
            imgElement.style.maxWidth = '200px'; /* Set maximum width */
            imgElement.style.maxHeight = '200px'; /* Set maximum height */
            imagePreview.appendChild(imgElement);
            removeButton.style.display = 'inline'; /* Show remove button */
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
}

/* JS used in: charlotte-createpost.html */
function removeImage() {
    var imagePreview = document.getElementById('image-preview');
    var fileInput = document.getElementById('post-media');
    var removeButton = document.getElementById('remove-media');

    imagePreview.innerHTML = ''; /* Clear the preview */
    fileInput.value = ''; /* Clear the file input */
    removeButton.style.display = 'none'; /* Hide remove button */
}

/* JS used in: charlotte-newsupdates.html */
/* Change the method of scrolling for section under Health Headlines*/
function scrollHorizontally(event) {
  event.preventDefault();
  const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  document.querySelector('.cards-container').scrollLeft -= (delta * 40); /* Adjust scrolling speed */
} 

/* JS used in: charlotte-newsupdates.html */
/* Redirect user to external links */
function redirectToURL(url) {
    window.location.href = url;
}