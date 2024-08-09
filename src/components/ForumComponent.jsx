// ForumComponent.js
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

function ForumComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('posts').onSnapshot(snapshot => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ForumComponent;
