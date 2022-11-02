const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f9b7ebd78550de7aee1a819d5df94d80',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;