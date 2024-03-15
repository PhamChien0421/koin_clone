import ProductItem from "./productItem";
import styles from "./productsList.module.css";

///http://localhost:8001/product?items_per_page=2&page&sortBy&keyword=test

const productsList = {
  data: [
    {
      id: 1,
      name: "test product - api (update)",
      description: "descrion",
      product_images:
        "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-stay-wild-koin-4.webp",
      created_at: "2024-01-08T08:23:31.232Z",
      updated_at: "2024-01-10T08:45:53.664Z",
      discount: 33,
      items: [
        {
          id: 1,
          sku: "TEST261",
          qty_in_stock: 120,
          price: 100,
          product_images: "/product_img.png",
          created_at: "2024-01-10T09:39:45.144Z",
          updated_at: "2024-01-10T09:39:45.144Z",
        },
        {
          id: 2,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          price: 150,
          product_images: "/1.png,2p.png",
          created_at: "2024-01-10T14:12:34.822Z",
          updated_at: "2024-01-10T14:12:34.822Z",
        },
        {
          id: 3,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:16:58.738Z",
          updated_at: "2024-01-10T14:16:58.738Z",
        },
        {
          id: 4,
          sku: "TEST_OTD dsfwec",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:25:25.926Z",
          updated_at: "2024-01-10T14:25:25.926Z",
        },
      ],
      category: {
        id: 2,
        category_name: "test2",
      },
    },
    {
      id: 1,
      name: "test product - api (update)",
      description: "descrion",
      product_images:
        "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-stay-wild-koin-4.webp",
      created_at: "2024-01-08T08:23:31.232Z",
      updated_at: "2024-01-10T08:45:53.664Z",
      discount: 33,
      items: [
        {
          id: 1,
          sku: "TEST261",
          qty_in_stock: 120,
          price: 100,
          product_images: "/product_img.png",
          created_at: "2024-01-10T09:39:45.144Z",
          updated_at: "2024-01-10T09:39:45.144Z",
        },
        {
          id: 2,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          price: 150,
          product_images: "/1.png,2p.png",
          created_at: "2024-01-10T14:12:34.822Z",
          updated_at: "2024-01-10T14:12:34.822Z",
        },
        {
          id: 3,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:16:58.738Z",
          updated_at: "2024-01-10T14:16:58.738Z",
        },
        {
          id: 4,
          sku: "TEST_OTD dsfwec",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:25:25.926Z",
          updated_at: "2024-01-10T14:25:25.926Z",
        },
      ],
      category: {
        id: 2,
        category_name: "test2",
      },
    },
    {
      id: 1,
      name: "test product - api (update)",
      description: "descrion",
      product_images:
        "https://koinclothing.vn/wp-content/uploads/2023/11/ao-thun-stay-wild-koin-4.webp",
      created_at: "2024-01-08T08:23:31.232Z",
      updated_at: "2024-01-10T08:45:53.664Z",
      discount: 33,
      items: [
        {
          id: 1,
          sku: "TEST261",
          qty_in_stock: 120,
          price: 100,
          product_images: "/product_img.png",
          created_at: "2024-01-10T09:39:45.144Z",
          updated_at: "2024-01-10T09:39:45.144Z",
        },
        {
          id: 2,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          price: 150,
          product_images: "/1.png,2p.png",
          created_at: "2024-01-10T14:12:34.822Z",
          updated_at: "2024-01-10T14:12:34.822Z",
        },
        {
          id: 3,
          sku: "TEST_OTD",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:16:58.738Z",
          updated_at: "2024-01-10T14:16:58.738Z",
        },
        {
          id: 4,
          sku: "TEST_OTD dsfwec",
          qty_in_stock: 200,
          product_images: "/1.png,2p.png",
          price: 150,
          created_at: "2024-01-10T14:25:25.926Z",
          updated_at: "2024-01-10T14:25:25.926Z",
        },
      ],
      category: {
        id: 2,
        category_name: "test2",
      },
    },
  ],
  totalPage: 6,
  page: 1,
  nextPage: null,
  prevPage: null,
  lastPage: 1,
};

export default function ProductsList({}) {
  return (
    <div className={`${styles.product_list} flex_row`}>
      {productsList.data.map((item) => (
        <ProductItem
          name={item.name}
          key={item.name}
          image={item.product_images}
          price={item.items[0].price}
          currentPrice={Math.ceil(
            (item.items[0].price * (100 - item.discount)) / 100
          )}
          discount={item.discount}
          className={`${styles.product_item}`}
        />
      ))}
    </div>
  );
}
