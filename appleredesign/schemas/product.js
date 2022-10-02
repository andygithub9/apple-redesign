import { RiMacbookLine } from "react-icons/ri";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: RiMacbookLine,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      // type: "reference" 表示這是一個外鍵
      // to: [{ type: "category" }] 表示外鍵參考到 category 這個表
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
};