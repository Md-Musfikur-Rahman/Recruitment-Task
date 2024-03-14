"use client";
import { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:3000/category")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchSubCategories = () => {
    fetch("http://localhost:3000/sub_category")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setSubCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {categories.map((category) => (
        <li key={category.id} className="my-2 px-2">
          <div className="flex flex-row gap-2 justify-start items-center py-3 px-2 rounded-xl bg-ascent">
            <div>icon</div>
            <div>
              <p>{category.cat_name_en}</p>
              <p>Subcategoty: {category.no_of_subcat}</p>
            </div>
          </div>
          <ul>
            {subcategories
              .filter((subcategory) => subcategory.cat_id === category.cat_id)
              .map((subcategory) => (
                <li key={subcategory.id} className="my-2 px-2">
                  <p>{subcategory.subcat_name_en}</p>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default CategoryList;
