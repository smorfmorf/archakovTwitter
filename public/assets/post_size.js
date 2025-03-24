function postSize(post) {
    // Регулярное для поиска ссылок
    const urlPattern = /https?:\/\/[^\s]+/g;

    const textWithoutLinks = post.replace(urlPattern, '');

    return textWithoutLinks.length;
}

export default postSize;