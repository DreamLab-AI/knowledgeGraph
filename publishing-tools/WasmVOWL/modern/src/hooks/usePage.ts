import { useQuery } from '@tanstack/react-query';
import { fetchPage, fetchBacklinks, type PageData } from '../api/pageService';

export function usePage(pageName: string) {
  return useQuery({
    queryKey: ['page', pageName],
    queryFn: () => fetchPage(pageName),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

export function useBacklinks(pageName: string) {
  return useQuery({
    queryKey: ['backlinks', pageName],
    queryFn: () => fetchBacklinks(pageName),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
