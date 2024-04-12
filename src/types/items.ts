export interface ItemApiResponse {
    count: number;
    next: string;
    previous: null;
    results: Item[];
};
  
export interface Item {
    name: string;
    url: string;
};
  