# Space-Themed Portfolio Website

A modern, responsive portfolio website with a space/universe theme, designed for showcasing your projects, skills, and professional information.

## Features

- Responsive design that works on all devices
- Space-themed UI with animated star background
- Modern and clean interface
- Sections for About, Projects, Blogs, and Contact
- Project filtering functionality
- Contact form
- Social media integration
- Smooth scrolling and animations

## Technologies Used

- HTML5
- CSS3 (with custom animations)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome icons
- Google Fonts

## Setup and Usage

1. Clone or download this repository
2. Customize the content in `index.html` with your personal information
3. Replace placeholder images in the `images` folder with your own
4. Update project details, blog posts, and contact information
5. Deploy to your preferred hosting service

## Customization

### Changing Colors

The color scheme can be modified in the `css/style.css` file by updating the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #4e42e8;
    --accent-color: #ff6584;
    /* other color variables */
}
```

### Adding Projects

To add a new project, copy the project card structure in the HTML and update with your project details:

```html
<div class="project-card" data-category="your-category">
    <div class="project-img">
        <img src="images/your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" target="_blank"><i class="fab fa-github"></i> Source Code</a>
        </div>
    </div>
</div>
```

### Adding Blog Posts

Similarly, add new blog posts by copying the blog card structure:

```html
<div class="blog-card">
    <div class="blog-img">
        <img src="images/your-blog-image.jpg" alt="Blog Title">
    </div>
    <div class="blog-info">
        <div class="blog-date">
            <i class="far fa-calendar-alt"></i>
            <span>Date</span>
        </div>
        <h3>Blog Title</h3>
        <p>Blog excerpt goes here.</p>
        <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

## Credits

- Star background images from [Imgur](https://imgur.com/)
- Font Awesome for icons
- Google Fonts for typography

## License

This project is available for personal and commercial use.

---

Feel free to customize this portfolio to showcase your unique skills and projects!
