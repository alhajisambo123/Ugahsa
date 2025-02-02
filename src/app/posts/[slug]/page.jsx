import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`https://ugahsa.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      {data?.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>01.25.2025</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <h1 className={styles.title}>{data?.title}</h1>

          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
