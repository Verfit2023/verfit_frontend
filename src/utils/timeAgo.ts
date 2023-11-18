function timeAgo(dateTime: string) {
    const seconds = Math.floor(((new Date().getTime() + 9 * 60 * 60 * 1000) - new Date(dateTime).getTime()) / 1000);

    const intervals = {
        년: 31536000,
        개월: 2592000,
        주: 604800,
        일: 86400,
        시간: 3600,
        분: 60,
        초: 1,
    };

    for (const [interval, secondsInterval] of Object.entries(intervals)) {
        const intervalCount = Math.floor(seconds / secondsInterval);

        if (intervalCount >= 1) {
            return `${intervalCount}${interval} 전`;
        }
    }

    return '방금';
}

export default timeAgo;