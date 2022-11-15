import { PhotoInterface } from './image.interface';

export interface EmployeesAttributesInterface {
  pageTitle: string;
  pageDescription: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  description: null;
  experience: number;
  role: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  email: string;
  photo: PhotoInterface;
}

export interface EmployeesDataInterface {
  id: number;
  attributes: EmployeesAttributesInterface;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface EmployeesMetaInterface {
  pagination: Pagination;
}

export interface EmployeesInterface {
  data: EmployeesDataInterface[];
  meta: EmployeesMetaInterface;
}
