const post = {
  name: "post",
  title: "post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: "string",
          validation: (Rule: any) =>
            Rule.custom((fields: any) => {
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
                return "Tags should be lowercase and without spaces";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "PublishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  Preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { title, author, media } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: author && `by ${author}`,
      });
    },
  },
};


export default post;