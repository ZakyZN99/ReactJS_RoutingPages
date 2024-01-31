import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();
  return (
    <div>
      <h3>INI HALAMAN CATEGORY</h3>
      <h3>INI HALAMAN CATEGORY {params.name}</h3>
    </div>
  );
};
