import { queryObjects } from "v8";
import { sendResponse } from "../../utils/sendResponse";
import { userModel } from "../user/user.model";
import Iblog from "./blog.interface";
import { blogModel } from "./blog.model";
import QueryBuilder from "../../builder/queryBuilder";

const createBlogInDb = async (blog: Omit<Iblog, "isPublished" | "createdAt" | "updatedAt">) => {
  console.log(blog);
  const isUserExist = await userModel.findById(blog.author);
  if (isUserExist === null) {
    throw new Error("Author does not exist");
  }
  const result = (await blogModel.create(blog)).populate('author');
  if (!result) {
    throw new Error("Blog not created");
  }
  return result;
};
const updateBlogInDb = async (id: string, blog: Omit<Iblog, "isPublished" | "createdAt" | "updatedAt">) => {
console.log(id);
const result = await blogModel.findByIdAndUpdate(
  id,
  {$set:blog},
  {new:true,runValidators:true}
).populate("author")
if(!result){
  throw new Error("Blog not found")
}
return result;
}
const deleteBlogInDb = async (id:string)=>{
const result = await blogModel.deleteOne({_id:id});
if(result.deletedCount===0){
  throw new Error("blogs is not found to delete !")
}
return result;
}
// const getAllBlogsFromDb= async(query:Record<string,unknown>)=>{
// // console.log(query);
// // const queryObj = {...query};
// // const excludedFields =["search"];
// // excludedFields.forEach(key=>{
// //   delete queryObj[key];
// // })
// // const serachTerm = (query?.search || "") as string;
// // const searchQuery = blogModel.find({
// //   $or:["title","content"].map(field=>(
// //   {[field]:{$regex:serachTerm as string, $options:'i'}}
// //   ))
// // })
// // const result = await searchQuery.find(queryObj).populate("author");
// // if(!result || result.length===0){
// //   throw new Error("No blogs found");
// // }

// return result;
// }

const getAllBlogsFromDb = async (payload: Record<string, unknown>) => {
  const blogs = new QueryBuilder(blogModel.find(), payload)
    .search(["content", "title"])
     console.log(blogs.modelQuery)
  const result = await blogs.modelQuery
  return result
}

export const blogService = {
  createBlogInDb,
  updateBlogInDb,
  deleteBlogInDb,
  getAllBlogsFromDb
};


// query:Record<string,unknown>
//{e}


// const result = await blogModel.find({
//   $or:["title","content"].map(field=>(
//   {[field]:{$regex:query.search as string, $options:'i'}}
//   ))
// }).populate("author");
// {title:{$regex:query.searchTerm as string, $options:'i'}},
  // {content:{$regex:query.searchTerm as string, $options:'i'}}

    // excluding query serach term 
//  const duplicateQuery ={...query};
//  const excludedTerms =["search"]
//  excludedTerms.forEach(key=>{
//   delete duplicateQuery[key];
//  })
//  console.log(duplicateQuery)
//  // partial search
//  const searchTerm= (query?.search || "") as string;
//  const serachQuery = blogModel.find({
//   $or:["title","content"].map(field=>(
//   {[field]:{$regex:searchTerm as string, $options:'i'}}  // i mean case insensitive
//   ))
// })
//   console.log();
  
// //filtering
// const result = await serachQuery.find(duplicateQuery).populate("author");

// if(!result || result.length===0){
//   throw new Error("No blogs found");
// }
//  return result;