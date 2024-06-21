# Figma Radio App

<img width="597" alt="image" src="https://github.com/amathewfigma/FigmaRadio/assets/144811756/588b8a44-a245-40cf-ae77-d254f38554f0">


Stack/Pre-reqs:

[Base UI](https://mui.com/base-ui/) is a library of unstyled React UI components and hooks.

[Vite](https://vitejs.dev/) is a build tool that aims to provide a faster and leaner development experience for modern web projects, consisting of a dev server and a build command

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that provides low-level CSS classes that can be composed to build custom UI designs.

[Storybook] Storybook is a development environment tool that is used as a playground for UI components

# How to use repo

You can download this repo to your local machine using git clone

Once you have downloaded this you will need to cd into /FigmaRadioApp

Since this application is leveraging React you will need to install the below dependenceis to make sure everything is work as expected

# MUI

Run the below to generate all the MUI react components:
npm install @mui/material @emotion/react @emotion/styled

# Tailwind

Tailwind should be good but feel free to run the below 

npm install -D tailwindcss
npx tailwindcss init


# Storybook

Run the below to make sure Storybook is initialized in the repo and the dependencies are installed

npx storybook@latest init

Once you install all the dependencies you can run the application locally using:

npm run dev
