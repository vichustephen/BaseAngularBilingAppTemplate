export interface ApiResponse<T> {
  success: boolean;
  data: T;
  errorMessage: string;
  detailedError: any;
  code: number;
}
