import React, { useContext, useState, type FC } from "react";
import { AppContext } from "../../context/appContext";
import styles from "../../styles/Common.module.scss";
import type { IAppContext, IFavoriteItem } from "../../types/product.interface";

interface IFavoriteProps {
  productID: number;
  image: string;
  title: string;
}

const Favorite: FC<IFavoriteProps> = ({ productID, image, title }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { addToFavorite } = useContext(AppContext) as IAppContext;

  const addToFavorites = () => {
    const newItem: IFavoriteItem = {
      productID: productID,
      productName: title,
      productImg: image,
    };
    setIsFavorite(!isFavorite);
    addToFavorite(newItem);
  };

  return (
    <div
      onClick={addToFavorites}
      className={isFavorite ? styles.favorite : styles.unfavorite}
    >
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 9 7 13 9 15"
          stroke={isFavorite ? "#FF0000" : "#999999 "}
          strokeLinecap="round"
        />
        <path
          d="M9.27686 11C10.3119 10.1153 11.4675 9.09688 12.4677 8"
          stroke={isFavorite ? "#FF0000" : "#999999 "}
        />
        <path
          d="M8.64645 14.6464C8.45118 14.8417 8.45118 15.1583 8.64645 15.3536C8.84171 15.5488 9.15829 15.5488 9.35355 15.3536L8.64645 14.6464ZM16.5 5C16.5 5.87535 16.1709 6.78414 15.6049 7.70747C15.0399 8.62934 14.2575 9.53538 13.3964 10.3964C12.5366 11.2563 11.6122 12.0578 10.7695 12.7756C9.93709 13.4847 9.16475 14.1281 8.64645 14.6464L9.35355 15.3536C9.83525 14.8719 10.5629 14.2653 11.418 13.5369C12.2628 12.8172 13.2134 11.9937 14.1036 11.1036C14.9925 10.2146 15.8351 9.24566 16.4576 8.23003C17.0791 7.21586 17.5 6.12465 17.5 5H16.5ZM13 1.5C14.933 1.5 16.5 3.067 16.5 5H17.5C17.5 2.51472 15.4853 0.5 13 0.5V1.5ZM10.685 2.37487C11.3023 1.83003 12.112 1.5 13 1.5V0.5C11.8591 0.5 10.8163 0.925239 10.0233 1.62513L10.685 2.37487Z"
          fill={isFavorite ? "#FF0000" : "#999999 "}
        />
      </svg>
    </div>
  );
};

export default Favorite;
