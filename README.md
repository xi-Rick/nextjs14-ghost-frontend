# NextJS 14 Ghost Frontend

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fmy-nextjs-ghost-app)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/my-nextjs-ghost-app)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/your-username/my-nextjs-ghost-app)

![Link Name](https://i.ibb.co/02QSTNy/image.png)

## Table of Contents

- [Introduction](#introduction)

- [Features](#features)

- [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

- [Installation](#installation)

- [Configuration](#configuration)

- [Setting Up Ghost Content API](#setting-up-ghost-content-api)

- [Running the App](#running-the-app)

- [Contributing](#contributing)

- [License](#license)

## Introduction

Transform your Ghost-powered blog into a visual masterpiece with this state-of-the-art React frontend. Built with the robust capabilities of Next.js, TypeScript, and the Aceternity UI library.

## Features

- **Next.js** for server-side rendering and static site generation. ![Next.js Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-nextjs.svg)

- **TypeScript** for type safety and better development experience. ![TypeScript Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-typescript.svg)

- **Aceternity UI** for modern and customizable UI components. ![React Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-react.svg)

- **PWA support** with `@ducanh2912/next-pwa`. ![PWA Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/parking-circle.svg)

- **Icon library** with `@tabler/icons-react`. ![Icons Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/icons.svg)

- **Animations** with `framer-motion`. ![Animations Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/keyframe.svg)

- **Markdown support** with `react-markdown`. ![Markdown Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/markdown.svg)

- **Theme switching** with `next-themes`. ![Next.js Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-nextjs.svg)

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- Node.js (version 14.x or higher)

- npm or yarn

### Installation

1. Clone the repository:

```sh

git  clone  https://github.com/your-username/my-nextjs-ghost-app.git

cd  my-nextjs-ghost-app

```

2. Install dependencies:

```sh

npm  install

# or

yarn  install

```

## Built for Ghost ![Ghost Icon](https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/ghost.svg)

This setup allows you to seamlessly integrate your Ghost CMS content into a beautifully designed UI, bypassing the limitations of handlebars, and enhancing user experience.

## Configuration

### Setting Up Ghost Content API

To integrate your Ghost content, follow these steps to obtain your API key:

1.  **Access Ghost Admin Panel** :

- Log in to your Ghost admin panel at `https://your-ghost-site.com/ghost`.

2.  **Navigate to Integrations** :

- Click on "Integrations" in the sidebar.

3.  **Create a New Custom Integration** :

- Click on "Add custom integration".

4.  **Generate API Key** :

- Give your integration a name and generate an API key.

5.  **Copy API Key** :

- Copy the generated API key. This key will be used as `NEXT_PUBLIC_GHOST_CONTENT_API_KEY` in your Next.js application.

6.  **Save Changes** :

- Save the integration details.

To get started, simply set up the following environment variables:

- `NEXT_PUBLIC_GHOST_API_URL`: Your Ghost API URL.

- `NEXT_PUBLIC_GHOST_CONTENT_API_KEY`: Your Ghost Content API key.

These variables are essential to fetch and display your Ghost CMS content securely.

## Running the App

To start the development server:

```sh

npm  run  dev

# or

yarn  dev

```

To build the application for production:

```sh

npm  run  build

# or

yarn  build

```

To start the production server:

```sh

npm  start

# or

yarn  start

```

### Scripts

- `dev`: Starts the development server.

- `build`: Builds the application for production.

- `start`: Starts the production server.

- `lint`: Runs ESLint to check for linting errors.

## Contributing

Contributions are welcome! Please follow the standard GitHub flow for contributions:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-branch`).

3. Make your changes.

4. Commit your changes (`git commit -m 'Add some feature'`).

5. Push to the branch (`git push origin feature-branch`).

6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.
