import React from "react";
import "../index.scss"

const recipes = [
  {
    id: 1000,
    title: "Chicken Pan Pizza",
    image: "https://cdn.vatgia.vn/pictures/thumb/w500/2013/11/kfa1384392025.jpg",
    authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
    id: 2000,
    title: "Spaghetti and Meatballs",
    image: "http://bizweb.dktcdn.net/100/134/673/files/pizza-free-download-wallpaper.jpg?v=1641997557191",
    authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
    id: 3000,
    title: "American Cheese Burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBIYCp-FmTcIhAYWUCo2UW5Udx_5WvVy-f-BZvmwhNyJQ14uqx3-T0zTNS2zx-djbNlY&usqp=CAU",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    id: 4000,
    title: "Mutton Biriyani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBIYCp-FmTcIhAYWUCo2UW5Udx_5WvVy-f-BZvmwhNyJQ14uqx3-T0zTNS2zx-djbNlY&usqp=CAU",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
    id: 5000,
    title: "Japanese Sushi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBIYCp-FmTcIhAYWUCo2UW5Udx_5WvVy-f-BZvmwhNyJQ14uqx3-T0zTNS2zx-djbNlY&usqp=CAU",
    authorImg: "/img/top-chiefs/img_6.jpg",
  },
];

function Suggestion() {
  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Trending
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {recipes.map((item,index) => {
            return (
              <li key={item+index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`
                      ${item.image}`}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${item.id}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Suggestion;
