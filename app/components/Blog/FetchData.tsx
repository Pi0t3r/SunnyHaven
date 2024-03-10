import {useState, useEffect} from 'react';
import {CircularProgress} from '@mui/material';
import {PostModel} from '@/pages/models/post.model';
import {Post} from '../ui/Post';
import axios from 'axios';
import {ErrorMessage} from '../ui/ErrorMessage';
import {ErrorState} from '@/app/types/types';
export const FetchPostData = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPost] = useState<PostModel[]>([]);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    axios
      .get('/api/Blog/Blog')
      .then((response) => setPost(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });
  if (error) return <ErrorMessage error={error.message} />;

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
