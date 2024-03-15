import styles from "./page.module.css";
import ProductsList from "@/components/product/productsList";

export default function Products() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.desc}>
          <h2>Products</h2>
          <p>
            Chúng tôi tin bằng tất cả sự nổ lực, tâm huyết và tỉ mỉ vào từng sản
            phẩm, những sản phẩm của KOIN sẽ là những chiếc áo thun 100% Cotton
            chất lượng cao mà nhiều bạn trẻ muốn có trong tủ đồ của mình. Rất
            nhiều người đã chọn KOIN, còn bạn ngại gì mà không lựa ngay cho mình
            một chiếc áo để tủ đồ thêm đa dạng chứ?
          </p>
        </div>
        <ProductsList />
      </div>
    </>
  );
}
