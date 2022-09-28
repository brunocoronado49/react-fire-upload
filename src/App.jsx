import { useState } from "react";
import { upload } from "./config/firebase";

function App() {
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await upload(file);
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </form>
    </div>
  );
}

export default App;
