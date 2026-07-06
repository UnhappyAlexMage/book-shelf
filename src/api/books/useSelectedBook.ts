import { useQuery } from '@tanstack/react-query';
import { getBookById } from './getBookById';
import { useParams } from 'react-router';

export const useSelectedBook = () => {
    const { bookId } = useParams<{bookId: string}>();

    return useQuery({
        queryKey: ['selectedbook', bookId],
        queryFn: () => getBookById(bookId!),
        enabled: !!bookId
    });
};
