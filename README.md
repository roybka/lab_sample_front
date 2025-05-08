# Lab Sample Telegram Mini App

A simple web application designed to work as a Telegram Mini App.

## Features

- Simple interface with "Hello world" text
- Mobile-responsive design
- Integration with Telegram Mini Apps
- Containerized with Docker for easy deployment

## Development

1. Clone this repository
2. Open index.html in a browser for local testing

## Docker Deployment

1. Build the Docker image: `docker build -t lab-sample-telegram-mini-app .`
2. Run the Docker container: `docker run -d -p 8080:80 lab-sample-telegram-mini-app`
3. Access the app at `http://localhost:8080`

