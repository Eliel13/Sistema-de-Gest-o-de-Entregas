
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Delivery, DeliveryStatus } from '../types';

interface DriverRankingChartProps {
    deliveries: Delivery[];
}

const DriverRankingChart: React.FC<DriverRankingChartProps> = ({ deliveries }) => {
    const driverData = useMemo(() => {
        const driverMap = new Map<string, { name: string; deliveries: number }>();

        deliveries.forEach(delivery => {
            if (delivery.status === DeliveryStatus.DELIVERED && delivery.driver) {
                const driver = delivery.driver;
                if (!driverMap.has(driver.id)) {
                    driverMap.set(driver.id, { name: driver.name.split(' ')[0], deliveries: 0 });
                }
                driverMap.get(driver.id)!.deliveries += 1;
            }
        });

        return Array.from(driverMap.values()).sort((a, b) => b.deliveries - a.deliveries).slice(0, 5);
    }, [deliveries]);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    layout="vertical"
                    data={driverData}
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={60} stroke="#374151"/>
                    <Tooltip cursor={{fill: '#f3f4f6'}}/>
                    <Bar dataKey="deliveries" fill="#8884d8" barSize={20} radius={[0, 4, 4, 0]}>
                         <LabelList dataKey="deliveries" position="right" style={{ fill: '#4b5563' }} />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DriverRankingChart;
