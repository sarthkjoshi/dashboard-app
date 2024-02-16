type VisitorData = {
  date: string;
  count: number;
};

type SalesData = {
  date: string;
  amount: number;
};

type UserActivityData = {
  date: string;
  newUsers: number;
  returningUsers: number;
};

type ProductData = {
  name: string;
  sales: number;
  revenue: number;
};

type DashboardData = {
  visitors: VisitorData[];
  sales: SalesData[];
  userActivity: UserActivityData[];
  products: ProductData[];
};
type CardData = {
  data: number;
  label: string;
  icon: string;
};
