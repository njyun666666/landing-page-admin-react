export type TableOrder = 'asc' | 'desc';

export interface ITableHeadLabel<T> {
  id: keyof T | string;
  label?: string;
  alignRight?: boolean;
}
