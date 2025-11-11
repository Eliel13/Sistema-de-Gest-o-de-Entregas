export enum DeliveryStatus {
  PENDING = 'Pendente',
  ASSIGNED = 'Atribuído',
  IN_TRANSIT = 'Em Trânsito',
  DELIVERED = 'Entregue',
  FAILED = 'Falhou',
  PARTIAL = 'Parcial',
  CANCELED = 'Cancelada'
}

export enum DeliveryPriority {
  NORMAL = 'Normal',
  URGENT = 'Urgente',
  CRITICAL = 'Crítico'
}

export enum DriverStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  reward_pct: number;
  unit: string;
  photo: string;
}

export interface Driver {
  id: string;
  name: string;
  cpf: string;
  dateOfBirth: string; // Used as initial password
  phone: string;
  status: DriverStatus;
  avatar: string;
  accumulatedBonus: number;
  totalDeliveries: number;
  vehicle: {
    type: string;
    plate: string;
  };
}

export interface ProofOfDelivery {
  photoUrl?: string;
  signatureUrl?: string;
  receiverName?: string;
  timestamp: string;
  geolocation: { lat: number; lng: number };
}

export interface DeliveryItem {
  product: Product;
  qty_ordered: number;
  qty_delivered: number;
  proofs: ProofOfDelivery[];
}

export interface DeliveryEvent {
  id: string;
  type: 'Criado' | 'Coletado' | 'Entregue' | 'Falha';
  timestamp: string;
  notes?: string;
  driverId?: string;
}

export interface Delivery {
  id: string;
  customer: {
    name: string;
    contact: string;
    address: string;
  };
  items: DeliveryItem[];
  priority: DeliveryPriority;
  status: DeliveryStatus;
  delivery_deadline: string;
  created_at: string;
  driver?: Driver;
  history: DeliveryEvent[];
  totalValue: number;
  reward: number;
}

export enum BonusStatus {
    PAID = 'Pago',
    UNPAID = 'Não Pago'
}

export interface Bonus {
    id: string;
    driver: Driver;
    delivery: Delivery;
    amount: number;
    date: string;
    status: BonusStatus;
}