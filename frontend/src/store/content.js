import { create } from 'zustand';

export const Usercontent = create((set) => ({
    contentType: "movies",  // Default value
    setContentType: (type) => {
        console.log("Setting contentType to:", type); // Debugging Zustand state change
        set({ contentType: type });
    }
}));
