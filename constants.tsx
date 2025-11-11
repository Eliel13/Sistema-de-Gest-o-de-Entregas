import React from 'react';
import { Delivery, DeliveryStatus, DeliveryPriority, Driver, DriverStatus, Product, Bonus, BonusStatus } from './types';

export const ICONS = {
    truck: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10"></path><path d="M14 18h1"></path><path d="M19 18h1c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-1"></path><path d="M14 9V6"></path><path d="M7 9V6"></path><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>,
    dashboard: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    box: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="m12 9-7.53 13"></path><path d="M22 21H2"></path><path d="m12 9 7.53 13"></path></svg>,
    dollarSign: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    settings: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
    logout: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>,
    user: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    chevronDown: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>,
    plus: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>,
    x: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>,
    mapPin: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    edit: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>,
    home: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
    camera: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>,
    signature: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10.5c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1"></path><path d="M20 12.5c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1"></path><path d="M18 14.5c0 .5-.5 1-1 1s-1-.5-1-1 .5-1 1-1"></path><path d="m15 15.5 1 1"></path><path d="m14 14.5 1 1"></path><path d="M22 11.5c0 2-1.5 3.5-3.5 3.5-1.5 0-2.5-1-2.5-1s-1.5-1.5-3.5-1.5-3.5 1.5-3.5 1.5-1 1-2.5 1C1.5 15 0 13.5 0 11.5 0 9.5 1.5 8 3.5 8c1.5 0 2.5 1 2.5 1s1.5 1.5 3.5 1.5 3.5-1.5 3.5-1.5 1-1 2.5-1c2 0 3.5 1.5 3.5 3.5Z"></path></svg>,
};

export const MOCK_PRODUCTS: Product[] = [
    { id: 'prod-001', name: 'Tijolo Baiano 9 Furos', sku: 'TB9F-01', price: 1.20, reward_pct: 2.0, unit: 'un', photo: 'https://picsum.photos/seed/tijolo/100/100' },
    { id: 'prod-002', name: 'Cimento CPII 50kg', sku: 'CIM-CPII-50', price: 28.50, reward_pct: 1.5, unit: 'sc', photo: 'https://picsum.photos/seed/cimento/100/100' },
    { id: 'prod-003', name: 'Argamassa ACIII 20kg', sku: 'ARG-ACIII-20', price: 15.75, reward_pct: 1.8, unit: 'sc', photo: 'https://picsum.photos/seed/argamassa/100/100' },
    { id: 'prod-004', name: 'Vergalhão de Aço 10mm (12m)', sku: 'VER-10-12', price: 45.00, reward_pct: 1.0, unit: 'br', photo: 'https://picsum.photos/seed/vergalhao/100/100' },
];

export const MOCK_DRIVERS: Driver[] = [
    { id: 'drv-001', name: 'Carlos Silva', cpf: '111.222.333-44', dateOfBirth: '1985-05-15', phone: '(11) 98765-4321', status: DriverStatus.ACTIVE, avatar: 'https://picsum.photos/seed/carlos/100/100', accumulatedBonus: 157.80, totalDeliveries: 45, vehicle: { type: 'Caminhão VUC', plate: 'ABC-1234' } },
    { id: 'drv-002', name: 'Joana Pereira', cpf: '222.333.444-55', dateOfBirth: '1992-11-20', phone: '(21) 91234-5678', status: DriverStatus.ACTIVE, avatar: 'https://picsum.photos/seed/joana/100/100', accumulatedBonus: 210.50, totalDeliveries: 62, vehicle: { type: 'Fiorino', plate: 'DEF-5678' } },
    { id: 'drv-003', name: 'Marcos Andrade', cpf: '333.444.555-66', dateOfBirth: '1988-01-30', phone: '(31) 95555-4444', status: DriverStatus.INACTIVE, avatar: 'https://picsum.photos/seed/marcos/100/100', accumulatedBonus: 0, totalDeliveries: 21, vehicle: { type: 'Kombi', plate: 'GHI-9012' } },
];

export const MOCK_DELIVERIES: Delivery[] = [
    {
        id: 'ENT-2024-001',
        customer: { name: 'Construtora Alfa', contact: '(11) 5555-1111', address: 'Rua das Flores, 123, São Paulo, SP' },
        items: [{ product: MOCK_PRODUCTS[0], qty_ordered: 1000, qty_delivered: 1000, proofs: [{ photoUrl: 'https://picsum.photos/seed/proof1/200/300', timestamp: '2024-07-28T14:30:00Z', geolocation: { lat: -23.5505, lng: -46.6333 } }] }],
        priority: DeliveryPriority.NORMAL,
        status: DeliveryStatus.DELIVERED,
        delivery_deadline: '2024-07-28T18:00:00Z',
        created_at: '2024-07-28T09:00:00Z',
        driver: MOCK_DRIVERS[0],
        history: [],
        totalValue: 1200,
        reward: 24.00,
    },
    {
        id: 'ENT-2024-002',
        customer: { name: 'Obra Rápida Ltda', contact: '(21) 5555-2222', address: 'Avenida Copacabana, 456, Rio de Janeiro, RJ' },
        items: [{ product: MOCK_PRODUCTS[1], qty_ordered: 50, qty_delivered: 0, proofs: [] }, { product: MOCK_PRODUCTS[2], qty_ordered: 30, qty_delivered: 0, proofs: [] }],
        priority: DeliveryPriority.URGENT,
        status: DeliveryStatus.IN_TRANSIT,
        delivery_deadline: new Date().toISOString(),
        created_at: new Date().toISOString(),
        driver: MOCK_DRIVERS[1],
        history: [],
        totalValue: 1900.50,
        reward: 35.50,
    },
    {
        id: 'ENT-2024-003',
        customer: { name: 'Reforma Já', contact: '(31) 5555-3333', address: 'Rua da Bahia, 789, Belo Horizonte, MG' },
        items: [{ product: MOCK_PRODUCTS[3], qty_ordered: 10, qty_delivered: 0, proofs: [] }],
        priority: DeliveryPriority.NORMAL,
        status: DeliveryStatus.ASSIGNED,
        delivery_deadline: new Date().toISOString(),
        created_at: '2024-07-27T10:00:00Z',
        driver: MOCK_DRIVERS[0],
        history: [],
        totalValue: 450.00,
        reward: 4.50,
    },
    {
        id: 'ENT-2024-004',
        customer: { name: 'Casa & Cia', contact: '(11) 5555-4444', address: 'Avenida Paulista, 1000, São Paulo, SP' },
        items: [{ product: MOCK_PRODUCTS[0], qty_ordered: 500, qty_delivered: 0, proofs: [] }],
        priority: DeliveryPriority.CRITICAL,
        status: DeliveryStatus.PENDING,
        delivery_deadline: '2024-07-31T12:00:00Z',
        created_at: '2024-07-29T11:00:00Z',
        history: [],
        totalValue: 600.00,
        reward: 12.00,
    },
];

export const MOCK_BONUSES: Bonus[] = [
    { id: 'bon-001', driver: MOCK_DRIVERS[0], delivery: MOCK_DELIVERIES[0], amount: 24.00, date: '2024-07-28', status: BonusStatus.PAID },
    { id: 'bon-002', driver: MOCK_DRIVERS[1], delivery: MOCK_DELIVERIES[1], amount: 35.50, date: '2024-07-29', status: BonusStatus.UNPAID },
    { id: 'bon-003', driver: MOCK_DRIVERS[0], delivery: MOCK_DELIVERIES[2], amount: 4.50, date: '2024-07-29', status: BonusStatus.UNPAID },
];
