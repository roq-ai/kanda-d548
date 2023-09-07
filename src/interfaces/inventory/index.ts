import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  item_name: string;
  quantity: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_name?: string;
  user_id?: string;
}
