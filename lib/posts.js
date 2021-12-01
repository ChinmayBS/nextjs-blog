import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

console.log(postsDirectory);

export function getSortedPostsData() {
  //get filenames under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Important: The returned list is not just an array of strings — it must
//be an array of objects that look like the comment above. Each object must have
//the params key and contain an object with the id key
// (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// export function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContenets = fs.readFileSync(fullPath, "utf-8");

//   //use gray-matter to parse the post meta section
//   const matterResult = matter(fileContenets);

//   //Combine the data with id
//   return {
//     id,
//     ...matterResult.data,
//   };
// }

//fetch markdown data
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContenets = fs.readFileSync(fullPath, "utf-8");

  //use gray-matter to parse the post meta section
  const matterResult = matter(fileContenets);

  //use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  //Combine the data with id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
