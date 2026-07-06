import { useQuery } from '@tanstack/react-query';
import { getAllRecords } from './getAllRecords';

export const useAllRecords = (authorId: string | undefined) => {
    return useQuery({
        queryKey: ['records', authorId],
        queryFn: () => getAllRecords(authorId),
        enabled: !!authorId, 
    });
};
