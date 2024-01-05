import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a category</option>
          <option value="laptop">Laptop</option>
          <option value="phone">Phone</option>
          <option value="pheriperal">Pheriperal</option>
          <option value="tablet">Tablet</option>
          <option value="case">Case</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
