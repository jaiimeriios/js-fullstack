import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const time = formatDistanceToNow(parseISO(timestamp));
        timeAgo = `${time} Ago`;
    }

    return (
        <>
            <p>
                <i>{timeAgo}</i>
            </p>
        </>
    );
};

export default TimeAgo;
