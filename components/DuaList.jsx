"use client";
import { useState, useEffect } from "react";

const DuaList = () => {
  const [dua, setDua] = useState([]);
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchDuas();
    fetchSubCategories();
  }, []);

  const fetchDuas = () => {
    fetch("http://localhost:3000/dua")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setDua(data);
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
      {subcategories.map((subcat) => (
        <div key={subcat.id}>
          <p className=" bg-white rounded-md px-4 py-2">
            <span className=" text-primary">Section: </span>{" "}
            {subcat.subcat_name_en}
          </p>

          <div>
            {dua
              .filter((dua) => dua.subcat_id === subcat.subcat_id)
              .map((dua) => (
                <div key={dua.id} className="my-4">
                  <div className="bg-white rounded-md px-4 py-2 flex flex-col gap-4">
                    <div className="text-primary mt-2">
                      icon {dua.dua_id}. {dua.dua_name_en}
                    </div>
                    <div>{dua.top_en}</div>
                    <div className=" text-right">{dua.dua_arabic}</div>

                    {dua.transliteration_en === null ? null : (
                      <div>
                        {" "}
                        <strong>Transliteration:</strong>{" "}
                        {dua.transliteration_en}
                      </div>
                    )}

                    {dua.translation_en === null ? null : (
                      <div>
                        {" "}
                        <strong> Translation: </strong>
                        {dua.translation_en}
                      </div>
                    )}

                    <div className="mt-2">
                      <p className="text-primary">Reference:</p>
                      <p>{dua.refference_en}</p>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                      {dua.audio === null ? null : <div>icon</div>}
                      <div className="flex-end ml-auto">
                        <div className="flex flex-row">
                          <div>ic 1</div>
                          <div>ic 2</div>
                          <div>ic 3</div>
                          <div>ic 4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DuaList;
