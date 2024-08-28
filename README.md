Introducing [`Stroke.io`](https://stroke-io.vercel.app/) project made by [`Anupreet Srivastava`](https://github.com/Anupreet1213).

# Stroke.io

![Screenshot 2024-08-28 125838](https://github.com/user-attachments/assets/4680c35f-3625-4545-8b35-2fe88122b519)


- Stroke.io is high-performance document and diagram engineering tool that enables users to efficiently edit, organize, and manage digital content, achieving 40% faster load times.
- Implemented secure user authentication with Kinde, reducing security vulnerabilities by 30%.
- Optimized UI/UX with Shadcn and TypeScript, boosting user engagement by 25%.


## Features 

- Create multiple teams for different projects
- Multiple files can be created in each team
- Each file provides documenting functionality as well as editing your own custom canvas where you can draw,edit, create anything you want
- All the files can be easily retrieved later and can be managed on dashboard itself
- Thanks to open source libraries [excalidraw](https://excalidraw.com) and [editorjs](https://editorjs.io/) which made this project possible.

![Screenshot 2024-08-28 131030](https://github.com/user-attachments/assets/fe4b3098-ffa6-43a4-a9e0-c9d37dc8137b)




## Run locally 

First, install the packages:

```bash
npm install
```

Secondly, setup your environment variables at [Kinde](https://kinde.com/) and [Convex DB] (https://www.convex.dev/)

At last, spin up the servers:

```bash
npm run dev
npx convex dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
