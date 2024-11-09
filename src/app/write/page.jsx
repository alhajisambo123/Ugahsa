// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   storage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "@/utils/firebase"; // Import from firebase.js
// import "react-quill/dist/quill.bubble.css";
// import Image from "next/image";
// import styles from "./writePage.module.css";
// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.bubble.css";

// const WritePage = () => {
//   const { status } = useSession();
//   const router = useRouter();

//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [title, setTitle] = useState("");
//   const [value, setValue] = useState("");
//   const [catSlug, setCatSlug] = useState("style");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   useEffect(() => {
//     if (!file) return;

//     const uploadFile = () => {
//       const name = `${new Date().getTime()}-${file.name}`;
//       const storageRef = ref(storage, name);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//           console.log(`Upload is ${progress}% done`);
//         },
//         (error) => {
//           console.error("Upload failed:", error);
//         },
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           setMedia(downloadURL);
//         }
//       );

//       return () => uploadTask.cancel();
//     };

//     uploadFile();
//   }, [file]);

//   if (status === "loading")
//     return <div className={styles.loading}>Loading...</div>;
//   if (status === "unauthenticated") {
//     router.push("/");
//     return null;
//   }

//   const slugify = (str) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   const handleSubmit = async () => {
//     if (isSubmitting) return;
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/posts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title,
//           desc: value,
//           img: media,
//           slug: slugify(title),
//           catSlug,
//         }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         router.push(`/posts/${data.slug}`);
//       } else {
//         console.error("Failed to create post:", res.statusText);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         placeholder="Title"
//         className={styles.input}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <select
//         className={styles.select}
//         value={catSlug}
//         onChange={(e) => setCatSlug(e.target.value)}
//       >
//         <option value="RT">RT</option>
//         <option value="MedLab">MedLab</option>
//         <option value="Physio">Physio</option>
//         <option value="OT">OT</option>
//         <option value="Radio">Radio</option>
//         <option value="Diet">Diet</option>
//       </select>
//       <div className={styles.editor}>
//         <button className={styles.button} onClick={() => setFile(null)}>
//           {/* <Image src="/plus.png" alt="Add Media" width={16} height={16} /> */}
//         </button>
//         <input
//           type="file"
//           id="fileInput"
//           style={{ display: "none" }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <label htmlFor="fileInput" className={styles.addButton}>
//           {/* <Image src="/image.png" alt="Upload Image" width={16} height={16} /> */}
//         </label>

//         <ReactQuill
//           className={styles.textArea}
//           theme="bubble"
//           value={value}
//           onChange={setValue}
//           placeholder="Tell your story..."
//         />
//       </div>

//       {uploadProgress > 0 && (
//         <div className={styles.progressBar}>
//           <div
//             className={styles.progress}
//             style={{ width: `${uploadProgress}%` }}
//           />
//         </div>
//       )}

//       <button
//         className={styles.publish}
//         onClick={handleSubmit}
//         disabled={isSubmitting || !title || !value || !media}
//       >
//         {isSubmitting ? "Publishing..." : "Publish"}
//       </button>
//     </div>
//   );
// };

// export default WritePage;

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   storage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "@/utils/firebase"; // Import from firebase.js
// import "react-quill/dist/quill.bubble.css";
// import Image from "next/image";
// import styles from "./writePage.module.css";
// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const WritePage = () => {
//   const { status } = useSession();
//   const router = useRouter();

//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState(""); // Stores the uploaded image URL
//   const [title, setTitle] = useState(""); // Title for the post or activity
//   const [value, setValue] = useState(""); // Description for the blog or activity
//   const [activityDescription, setActivityDescription] = useState(""); // Specific to activity
//   const [catSlug, setCatSlug] = useState("style"); // Category for blog or activity
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isActivity, setIsActivity] = useState(false); // State to determine whether it's an activity or not

//   // File upload handling
//   useEffect(() => {
//     if (!file) return;

//     const uploadFile = () => {
//       const name = `${new Date().getTime()}-${file.name}`;
//       const storageRef = ref(storage, name);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadProgress(progress);
//           console.log(`Upload is ${progress}% done`);
//         },
//         (error) => {
//           console.error("Upload failed:", error);
//         },
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           setMedia(downloadURL); // Save the uploaded image URL to state
//         }
//       );

//       return () => uploadTask.cancel();
//     };

//     uploadFile();
//   }, [file]);

//   if (status === "loading")
//     return <div className={styles.loading}>Loading...</div>;
//   if (status === "unauthenticated") {
//     router.push("/");
//     return null;
//   }

//   const slugify = (str) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//       const handleSubmit = async () => {
//         if (isSubmitting) return;
//         setIsSubmitting(true);

//         try {
//           const endpoint = isActivity ? "/api/activitys" : "/api/posts"; // Set endpoint based on type
//           const description = isActivity ? activityDescription : value; // Set description based on type

//           const res = await fetch(endpoint, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               title,
//               desc: description, // Use the correct description based on type
//               img: media, // Image URL
//               slug: slugify(title),
//               catSlug,
//             }),
//           });

//           if (res.ok) {
//             const data = await res.json();
//             router.push(
//               isActivity ? `/activitys/${data.slug}` : `/posts/${data.slug}`
//             );
//           } else {
//             console.error("Failed to create:", res.statusText);
//           }
//         } catch (error) {
//           console.error("Submission error:", error);
//         } finally {
//           setIsSubmitting(false);
//         }
//       };
//   return (
//     <div className={styles.container}>
//       {/* Input for Title */}
//       <input
//         type="text"
//         placeholder="Title"
//         className={styles.input}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       {/* Category Selection */}
//       <select
//         className={styles.select}
//         value={catSlug}
//         onChange={(e) => setCatSlug(e.target.value)}
//       >
//         <option value="RT">RT</option>
//         <option value="MedLab">MedLab</option>
//         <option value="Physio">Physio</option>
//         <option value="OT">OT</option>
//         <option value="Radio">Radio</option>
//         <option value="Diet">Diet</option>
//       </select>

//       {/* Toggle between Activity or Post */}
//       <div className={styles.toggleButtons}>
//         <button
//           onClick={() => setIsActivity(false)} // Set to post
//           className={isActivity ? styles.inactive : styles.active}
//         >
//           Publish Post
//         </button>
//         <button
//           onClick={() => setIsActivity(true)} // Set to activity
//           className={!isActivity ? styles.inactive : styles.active}
//         >
//           Publish Activity
//         </button>
//       </div>

//       {/* Image Upload */}
//       <div className={styles.imageUpload}>
//         <label htmlFor="fileInput" className={styles.addButton}>
//           <Image
//             src="/image-icon.png"
//             alt="Upload Image"
//             width={24}
//             height={24}
//           />
//           Upload Image
//         </label>
//         <input
//           type="file"
//           id="fileInput"
//           style={{ display: "none" }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//       </div>

//       {/* Image Preview */}
//       {media && (
//         <div className={styles.imagePreview}>
//           <img
//             src={media}
//             alt="Uploaded image preview"
//             className={styles.previewImage}
//           />
//         </div>
//       )}

//       {/* Conditional Editor for Post or Activity */}
//       <div className={styles.editor}>
//         <ReactQuill
//           className={styles.textArea}
//           theme="bubble"
//           value={isActivity ? activityDescription : value} // Conditional rendering of description field
//           onChange={isActivity ? setActivityDescription : setValue} // Set appropriate value depending on type
//           placeholder={
//             isActivity ? "Describe the activity..." : "Tell your story..."
//           }
//         />
//       </div>

//       {/* File Upload Progress */}
//       {uploadProgress > 0 && (
//         <div className={styles.progressBar}>
//           <div
//             className={styles.progress}
//             style={{ width: `${uploadProgress}%` }}
//           />
//         </div>
//       )}

//       {/* Submit Button for Post or Activity */}
//       <button
//         className={styles.publish}
//         onClick={handleSubmit}
//         disabled={
//           isSubmitting ||
//           !title ||
//           !(isActivity ? activityDescription : value) ||
//           !media
//         }
//       >
//         {isSubmitting
//           ? "Publishing..."
//           : isActivity
//           ? "Publish Activity"
//           : "Publish Post"}
//       </button>
//     </div>
//   );
// };

// export default WritePage;
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/utils/firebase"; // Import from firebase.js
import "react-quill/dist/quill.bubble.css";
import Image from "next/image";
import styles from "./writePage.module.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(""); // Stores the uploaded image URL
  const [title, setTitle] = useState(""); // Title for the post or activity
  const [value, setValue] = useState(""); // Description for the blog or activity
  const [activityDescription, setActivityDescription] = useState(""); // Specific to activity
  const [catSlug, setCatSlug] = useState("style"); // Category for blog or activity
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isActivity, setIsActivity] = useState(false); // State to determine whether it's an activity or not

  // File upload handling
  useEffect(() => {
    if (!file) return;

    const uploadFile = () => {
      const name = `${new Date().getTime()}-${file.name}`;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setMedia(downloadURL); // Save the uploaded image URL to state
        }
      );

      return () => uploadTask.cancel();
    };

    uploadFile();
  }, [file]);

  if (status === "loading")
    return <div className={styles.loading}>Loading...</div>;
  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const endpoint = isActivity ? "/api/activitys" : "/api/posts"; // Set endpoint based on type
      const description = isActivity ? activityDescription : value; // Set description based on type

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc: description, // Use the correct description based on type
          img: media, // Image URL
          slug: slugify(title),
          catSlug,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(
          isActivity ? `/activitys/${data.slug}` : `/posts/${data.slug}`
        );
      } else {
        console.error("Failed to create:", res.statusText);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Input for Title */}
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Category Selection */}
      <select
        className={styles.select}
        value={catSlug}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="RT">RT</option>
        <option value="MedLab">MedLab</option>
        <option value="Physio">Physio</option>
        <option value="OT">OT</option>
        <option value="Radio">Radio</option>
        <option value="Diet">Diet</option>
      </select>

      {/* Toggle between Activity or Post */}
      <div className={styles.toggleButtons}>
        <button
          onClick={() => setIsActivity(false)} // Set to post
          className={isActivity ? styles.inactive : styles.active}
        >
          Publish Post
        </button>
        <button
          onClick={() => setIsActivity(true)} // Set to activity
          className={!isActivity ? styles.inactive : styles.active}
        >
          Publish Activity
        </button>
      </div>

      {/* Image Upload */}
      <div className={styles.imageUpload}>
        <label htmlFor="fileInput" className={styles.addButton}>
          <Image
            src="/image-icon.png"
            alt="Upload Image"
            width={24}
            height={24}
          />
          Upload Image
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      {/* Image Preview */}
      {media && (
        <div className={styles.imagePreview}>
          <img
            src={media}
            alt="Uploaded image preview"
            className={styles.previewImage}
          />
        </div>
      )}

      {/* Conditional Editor for Post or Activity */}
      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={isActivity ? activityDescription : value} // Conditional rendering of description field
          onChange={isActivity ? setActivityDescription : setValue} // Set appropriate value depending on type
          placeholder={
            isActivity ? "Describe the activity..." : "Tell your story..."
          }
        />
      </div>

      {/* File Upload Progress */}
      {uploadProgress > 0 && (
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}

      {/* Submit Button for Post or Activity */}
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={
          isSubmitting ||
          !title ||
          !(isActivity ? activityDescription : value) ||
          !media
        }
      >
        {isSubmitting
          ? "Publishing..."
          : isActivity
          ? "Publish Activity"
          : "Publish Post"}
      </button>
    </div>
  );
};

export default WritePage;
