export const getAssetUrl = (path) => {
    // Ensure path doesn't start with slash if base url ends with one, 
    // but simpler to just standardise: 
    // We assume path does NOT start with /, or we strip it.
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.VITE_ASSET_BASE_URL}/${cleanPath}`;
};
