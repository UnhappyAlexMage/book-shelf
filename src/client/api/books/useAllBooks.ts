import { useQuery } from '@tanstack/react-query';
import { getAllBooks } from './getAllBooks';

export const useAllBooks = () => {
    return useQuery({
        queryKey: ['books'],
        queryFn: getAllBooks,
    });
};
