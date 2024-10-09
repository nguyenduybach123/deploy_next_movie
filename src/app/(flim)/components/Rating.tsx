import { StarIcon } from 'lucide-react';
import React from 'react';

const Rating = () => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer">
            <StarIcon width={40} height={40} stroke="#FF0000" strokeWidth={1} />
            <StarIcon width={40} height={40} stroke="#FF0000" strokeWidth={1} />
            <StarIcon width={40} height={40} stroke="#FF0000" strokeWidth={1} />
            <StarIcon width={40} height={40} stroke="#FF0000" strokeWidth={1} />
            <StarIcon width={40} height={40} stroke="#FF0000" strokeWidth={1} />
        </div>
    );
};

export default Rating;
