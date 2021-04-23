export const calculateEndOfScroll = () => {
    let result = ((document.documentElement.scrollHeight - document.documentElement.scrollTop) - window.innerHeight);
    return result;
}