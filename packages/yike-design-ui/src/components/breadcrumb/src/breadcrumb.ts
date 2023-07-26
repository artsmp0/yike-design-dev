import { InjectionKey } from 'vue';

export type BreadcrumbProps = {
  // id?: string;
  separator?: string;
  separatorIcon?: string;
};

export type BreadcrumbItemProps = {
  to?: string;
};

export const breadcrumbName: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbName');
