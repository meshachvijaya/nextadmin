import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "Color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "Size"}
          />
          <label>Category</label>
          <select name="category" id="category">
            <option value="electronics">Electronics</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder={product.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
