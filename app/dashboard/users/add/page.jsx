import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="Username" required />
        <input type="email" placeholder="Email" name="Email" required />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          required
        />
        <input type="phone" placeholder="Phone" name="Phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="Address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddUser;
