import React from 'react';
import DataTable from 'react-data-table-component';
import { useQuery } from '@tanstack/react-query';

const columns = [
  {
    name: 'Serial Number',
    selector: (_, index) => index + 1, // Add 1 to start the numbering from 1
  },
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Owner',
    selector: (row) => row.owner,
  },
  {
    name: 'Owner Profile',
    cell: (row) => <img src={row.owner_profile} alt="Profile" style={{ width: 50, height: 50, borderRadius: '25px' }} />,
  },
];

const WordCount = (text) => {
  if (typeof text === 'string') {
    return text.split(/\s+/).length;
  }
  return 0; // Default to 0 if text is undefined or not a string
};

const Featured = () => {
  const { isPending, error, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch('https://programming-blog-server-three.vercel.app/allblogs')
        .then((res) => res.json())
        .then((data) => {
          console.log(data); // Add this line to check the data

          // Calculate word count for each blog and add it to the data
          const blogsWithWordCount = data.map((blog) => ({
            ...blog,
            count: WordCount(blog.long),
            owner: blog.owner, // Add 'owner' to the mapped data
            owner_profile: blog.owner_profile, // Add 'owner_profile' to the mapped data
          }));

          // Sort blogs based on word count in descending order
          const sortedBlogs = blogsWithWordCount.sort((a, b) => b.count - a.count);

          // Take the top 10 blogs
          const top10Blogs = sortedBlogs.slice(0, 10);

          return top10Blogs;
        }),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <DataTable columns={columns} data={blogs} responsive />
    </div>
  );
};

export default Featured;
