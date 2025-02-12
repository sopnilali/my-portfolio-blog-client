export interface TBlog {
  _id: string;
  blogtitle: string
  blogImage: string
  blogContent: string
  blogAuthor: string
}

export type Tproject = {
  _id: string;
  projecttitle: string;
  projectdescription: string;
  projecttools: string;
  projectimage: string;
  githubfrontend: string;
  liveurl: string;
  githubbackend: string;
  projectduration: string;
  projectstatus: string;
}