import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="iPhone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="200000" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="White" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Medium" />
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
            placeholder="Description of Product"
          >
            {" "}
          </textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
