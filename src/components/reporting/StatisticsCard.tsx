import React from 'react';

interface StatisticsCardProps {
  title: string;
  value: number | string;
}

export default function StatisticsCard({ title, value }: StatisticsCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}