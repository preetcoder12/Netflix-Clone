import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import { Link } from "react-router-dom";
import { Small_base_url } from "../utils/constants";
import axios from "axios";

const MovieSlider = ({ category }) => {
    const { contentType } = useContentStore();

    const formattedcontenttype = contentType === "movie" ? "Movies" : "TV Shows";
    const formattedcategory = category
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

    const [content, setContent] = useState([]);

    useEffect(() => {
        const getContent = async () => {
            try {
                const res = await axios.get(`/api/v1/${contentType}/${category}`);
                console.log("Full API Response:", res.data); // Debugging
                setContent(res.data.similar || []); // ✅ Use the 'similar' array
            } catch (error) {
                console.error("Error fetching content:", error);
                setContent([]); // Prevent crashes by setting an empty array
            }
        };
        getContent();
    }, [contentType, category]);


    return (
        <div className="text-white">
            <h2 className="mb-4 text-2xl font-bold">
                {formattedcategory} {formattedcontenttype}
            </h2>
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                {content.map((item) => (
                    <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                        <div className='rounded-lg overflow-hidden'>
                            <img
                                src={Small_base_url + item.backdrop_path}
                                alt='Movie image'
                                className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                            />
                        </div>
                        <p className='mt-2 text-center'>{item.title || item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieSlider;