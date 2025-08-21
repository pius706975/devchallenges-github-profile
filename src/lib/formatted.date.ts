export const formatUpdated = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 14) {
        return diffDays <= 1 ? "1 day ago" : `${diffDays} days ago`;
    }

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffDays < 30) {
        return diffWeeks <= 1 ? "1 week ago" : `${diffWeeks} weeks ago`;
    }

    const diffMonths = Math.floor(diffDays / 30);
    if (diffDays < 365) {
        return diffMonths <= 1 ? "1 month ago" : `${diffMonths} months ago`;
    }

    const diffYears = Math.floor(diffDays / 365);
    return diffYears <= 1 ? "1 year ago" : `${diffYears} years ago`;
};
