import DataTable from 'react-data-table-component';
import { useQuery } from '@tanstack/react-query';

const columns = [
  {
    name: 'Title',
    selector: (row) => row,
  },
];

const Featured = () => {
  const { isPending, error, data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: () =>
      fetch('http://localhost:3000/allblogs')
        .then((res) => res.json())
        .then((data) => {
          console.log(data); // Add this line to check the data
          return data.map((blog) => blog.title); // Extract titles from blogs
        }),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <DataTable columns={columns} data={blogs} />
    </div>
  );
};

export default Featured;
