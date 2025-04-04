function postSize(post) {
    const words = post.split(' ');

    const wordsWithoutLinks = words.filter(word => {
        if (word.startsWith('http://') || word.startsWith('https://')) {
            return false;
        }
        return true;
    });

    return wordsWithoutLinks.join(' ').length;
}

export default postSize;