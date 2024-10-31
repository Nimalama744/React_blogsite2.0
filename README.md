# React + Vite

# Blog Post Dashboard

## Overview

This project is a simple blog post dashboard built with React.js. Users can view, create, edit, and delete blog posts. The project emphasizes clean design, responsiveness, and efficient state management.

## Features

- **View Posts**: Display a list of blog posts with title, summary, author, and publish date.
- **Create/Edit Posts**: Add new posts or edit existing ones using a form.
- **Delete Posts**: Remove posts with a confirmation prompt.
- **Search**: Filter posts by title or author.
- **Sort**: Display posts in date order, showing the newest first.

## Tech Stack

- **React.js**: UI framework
- **Axios**: HTTP client for API requests
- **json-server**: Mock backend
- **TailwindCSS**: (For styling)

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/blog-dashboard.git
    cd blog-dashboard
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Run Mock Server**

    Ensure `json-server` is installed globally:

    ```bash
    npm install -g json-server
    ```

    Run the server:

    ```bash
    npx json-server --watch db.json --port 8000
    ```

4. **Start the Application**

    ```bash
    npm start
    ```

## Usage

1. **Home Page**: Displays a list of blog posts.
2. **Create Post**: Navigate to `/posts/create` to add a new post.
3. **Edit Post**: Navigate to `/posts/edit/:id` to edit an existing post.
4. **Search**: Use the search bar to filter posts by title or author.
5. **Sort**: Posts are displayed in descending order by date.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT License](LICENSE)

## Acknowledgments

- **React.js**: For the frontend framework
- **Axios**: For handling HTTP requests
- **json-server**: For providing a mock backend
