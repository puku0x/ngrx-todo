/**
 * Spring Data JPA の Pageインターフェース
 */
export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  sort: any;
  first: boolean;
  size: number;
  number: number;
}
