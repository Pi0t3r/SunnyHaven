import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {PostModel} from '@/pages/models/post.model';
import {Post} from '../ui/Post';
export const FetchPostData = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState<PostModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/Blog/Blog');
        const data = await response.json();
        if (Array.isArray(data)) {
          setPost(data);
        } else {
          console.error(`Invalid format data: ${data}`);
        }
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Post
                  desc={post.descriptions.shortDesc}
                  {...post}
                  src={post.images[0]}
                  day={post.date.day}
                  month={post.date.month}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
