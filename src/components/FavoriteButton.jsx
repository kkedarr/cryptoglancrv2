import { Star } from "lucide-react";
import { useFavoritesStore } from "../store/favoritesStore";

const FavoriteButton = ({ coin }) => {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.isFavorite(coin.id));

  return (
    <button
      onClick={() => toggleFavorite(coin)}
      className="hover:scale-110 transition"
      aria-label="Toggle favorite"
    >
      <Star
        size={18}
        className={
          isFavorite
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-400"
        }
      />
    </button>
  );
}


export default FavoriteButton;