import { getDocs, collection, query, orderBy } from "firebase/firestore"; 
import { db } from "./firebase";

export const getPosts = async () => {
  const postsCollection = query(collection(db, 'posts'), orderBy('timestamp', 'desc')); // zwraca instancję obiektu bazodanowego
  const posts_ref = await getDocs(postsCollection); // wywołuje query i dostarcza dane
  const data = [];

  posts_ref.forEach((post) => {
    data.push({
      id: post.id,
      data: post.data(),
    });
  });

  return data;
}