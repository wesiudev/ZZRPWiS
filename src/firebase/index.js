import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { query, where, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export async function createDraft(productConfig, customId) {
  const draftDocRef = doc(collection(db, "drafts"), customId);

  const docSnap = await getDoc(draftDocRef);
  if (docSnap.exists()) {
    // Document with customId already exists, do not create a new one
    return draftDocRef;
  } else {
    await setDoc(draftDocRef, {
      ...productConfig,
      createdAt: Date.now(),
    });
    return draftDocRef;
  }
}
export async function deleteBlogPost(postId) {
  const docRef = doc(db, "blog", "blog");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const posts = docSnap.data().posts;
    const postIndex = posts.findIndex((post) => post.postId === postId);
    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      await updateDoc(docRef, { posts });
    }
  }
}
export async function getBlogPosts() {
  const docRef = doc(db, "blog", "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
export async function addBlogPost(post) {
  const docRef = doc(db, "blog", "blog");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, "blog", "blog"), { posts: [post] });
  } else {
    await updateDoc(doc(db, "blog", "blog"), {
      posts: arrayUnion(post),
    });
  }
}
export async function updateBlogPost(postId, updatedPost) {
  const docRef = doc(db, "blog", "blog");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const posts = docSnap.data().posts;
    const postIndex = posts.findIndex((post) => post.postId === postId);
    if (postIndex !== -1) {
      posts[postIndex] = updatedPost;
      await updateDoc(docRef, { posts });
    }
  }
}

export async function getDrafts() {
  const querySnapshot = await getDocs(collection(db, "drafts"));
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getDraft(draftId) {
  const draftDocRef = doc(db, "drafts", draftId);
  const draftDoc = await getDoc(draftDocRef);
  return draftDoc.exists() ? { ...draftDoc.data(), id: draftDoc.id } : null;
}

export async function updateDraft(draftId, updates) {
  console.log(draftId);
  const draftDocRef = doc(db, "drafts", draftId);
  return await updateDoc(draftDocRef, updates);
}

export async function deleteDraft(draftId) {
  const draftDocRef = doc(db, "drafts", draftId);
  return await deleteDoc(draftDocRef);
}

export async function deleteMultipleDrafts(draftIds) {
  const promises = draftIds.map(async (draftId) => {
    const draftDocRef = doc(db, "drafts", draftId);
    await deleteDoc(draftDocRef);
  });
  await Promise.all(promises);
}

export async function deleteMultipleProducts(productIds) {
  const promises = productIds.map(async (productId) => {
    const productDocRef = doc(db, "products", productId);
    await deleteDoc(productDocRef);
  });
  await Promise.all(promises);
}
export async function createProduct(productConfig) {
  const productDocRef = doc(collection(db, "products"), productConfig.id);
  const docSnap = await getDoc(productDocRef);
  if (docSnap.exists()) {
    // Document with customId already exists, do not create a new one
    return productDocRef;
  } else {
    await setDoc(productDocRef, {
      ...productConfig,
      createdAt: Date.now(),
    });
    return productDocRef;
  }
}
export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getProduct(productId) {
  const productDocRef = doc(db, "products", productId);
  const productDoc = await getDoc(productDocRef);
  return productDoc.exists()
    ? { ...productDoc.data(), id: productDoc.id }
    : null;
}
export async function getProductByUrl(url) {
  const products = await getProducts();
  const product = products.find((product) => product.url === url);
  return product ? { ...product, url } : null;
}

export async function updateProduct(productId, updates) {
  const productDocRef = doc(db, "products", productId);
  return await updateDoc(productDocRef, updates);
}

export async function deleteProduct(productId) {
  const productDocRef = doc(db, "products", productId);
  return await deleteDoc(productDocRef);
}

export { storage, auth };
