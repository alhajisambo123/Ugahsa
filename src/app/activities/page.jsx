import styles from "./homepage.module.css";
import Featured from "@/components/featured2/Featured2";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/Menu/Menu";
import CardList1 from "@/components/activityList/CardList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList1 page={page} />
        <Menu />
      </div>
    </div>
  );
}
