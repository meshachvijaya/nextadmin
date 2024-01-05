// Using server actions

const Page = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("Hello", username);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Page;

// If not using Server Actions

// "use client"

// import { useState } from "react";

// const Page = () => {
//   const [input, setInput] = useState("");

//   return (
//     <div>
//       <form>
//         <input type="text" onChange={e=>setInput(e.target.value)} />
//         <button onClick={send(input)}>Send</button>
//       </form>
//     </div>
//   );
// };

// export default Page;
